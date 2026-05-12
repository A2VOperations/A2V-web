"use client";

import Image from "next/image";
import BackgroundCircle from "../backgroundCircle";
import { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import SoftwareDev from "./home/softwareDev/page";
import InnovateSoft from "./home/InnovateSoft/page";
import PremierTech from "./home/premierTech/page";
import ExploreOur from "./home/exploreOur/page";
import DiscussStart from "./home/discussStart/page";
import Contact from "./home/contact/page";
import Blogs from "./home/blogs/page";
import ContactForm from "../components/ContactForm";
import Link from "next/link";
import { siteConfig } from "../config";

export default function Home() {
  const growthPanels = [
    {
      id: "mission",
      title: "Learn Our Company Mission",
      description:
        "Our mission is to revolutionize the digital landscape with AI-perfected innovation, delivering innovative software solutions to empower businesses to achieve their full potential.",
      points: ["Premier Tech Innovations", "Nexus Tech Systems"],
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "vision",
      title: "Our Company Vision",
      description:
        "We build future-ready, AI-driven platforms and product teams that turn ambitious ideas into measurable growth for modern businesses.",
      points: [
        "Long-term digital partnerships",
        "Scalable engineering culture",
      ],
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "philosophy",
      title: "Our Philosophy",
      description:
        "Clear strategy, practical execution, and user-focused design guide every decision we make from planning through launch.",
      points: ["Human-centered product thinking", "Lean, high-impact delivery"],
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=900&q=80",
    },
    {
      id: "strategy",
      title: "Our Strategy",
      description:
        "We combine modern technology, sharp product insight, and collaborative delivery to help teams move faster with confidence.",
      points: ["Roadmaps tied to outcomes", "Reliable delivery systems"],
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=900&q=80",
    },
  ];

  const popularServices = [
    {
      title: "Brand and Identity",
      description:
        "We create distinctive brand identities that resonate with your audience and build lasting brand equity through strategic design.",
      image:
        "/images/brand-service.png",
      accent: "text-[#ff4d00]",
      link: siteConfig.socialLinks.whatsapp,
      cta: "icon",
      icon: (
        <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden="true">
          <rect
            x="11"
            y="17"
            width="34"
            height="26"
            rx="3"
            className="fill-none stroke-current"
            strokeWidth="2"
          />
          <path
            d="M22 50c5-2 15-2 20 0M23 31l-4 4 4 4M33 39l4-8M41 31l4 4-4 4"
            className="fill-none stroke-current"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="46"
            cy="22"
            r="9"
            className="fill-none stroke-current"
            strokeWidth="2"
          />
          <path
            d="M46 17v10M41 22h10"
            className="fill-none stroke-current"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
    {
      title: "Custom Website Development",
      description:
        "High-performance, scalable web solutions built with cutting-edge technologies to drive your digital transformation and business growth.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=80",
      accent: "text-[#ff4d00]",
      link: siteConfig.socialLinks.whatsapp,
      cta: "button",
      icon: (
        <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden="true">
          <circle
            cx="32"
            cy="30"
            r="10"
            className="fill-none stroke-current"
            strokeWidth="2"
          />
          <path
            d="M32 12v8M32 40v12M14 30h8M42 30h8M20 18l6 6M38 36l6 6M44 18l-6 6M26 36l-6 6"
            className="fill-none stroke-current"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle
            cx="32"
            cy="7"
            r="4"
            className="fill-none stroke-current"
            strokeWidth="2"
          />
          <circle
            cx="32"
            cy="55"
            r="4"
            className="fill-none stroke-current"
            strokeWidth="2"
          />
          <circle
            cx="9"
            cy="30"
            r="4"
            className="fill-none stroke-current"
            strokeWidth="2"
          />
          <circle
            cx="55"
            cy="30"
            r="4"
            className="fill-none stroke-current"
            strokeWidth="2"
          />
        </svg>
      ),
    },
    {
      title: "SEO Optimization",
      description:
        "Maximize your online visibility and drive sustainable organic growth with our advanced search engine optimization strategies.",
      image:
        "/images/seo-service.png",
      accent: "text-[#ff4d00]",
      link: siteConfig.socialLinks.whatsapp,
      cta: "icon",
      icon: (
        <svg viewBox="0 0 64 64" className="h-16 w-16" aria-hidden="true">
          <path
            d="M24 16l8-4 8 4v9l-8 4-8-4zM24 16l8 4 8-4M32 20v9"
            className="fill-none stroke-current"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="32"
            cy="28"
            r="18"
            className="fill-none stroke-current"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
          <path
            d="M17 44l-5 5M47 44l5 5M18 13l-5-5M46 13l5-5"
            className="fill-none stroke-current"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle
            cx="49"
            cy="42"
            r="6"
            className="fill-none stroke-current"
            strokeWidth="2"
          />
          <path
            d="M49 38v8M45 42h8"
            className="fill-none stroke-current"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
    },
  ];

  const [activeGrowthPanel, setActiveGrowthPanel] = useState(
    growthPanels[0].id,
  );
  const [showConsultationBanner, setShowConsultationBanner] = useState(true);
  const activePanel =
    growthPanels.find((panel) => panel.id === activeGrowthPanel) ??
    growthPanels[0];

  const members = [
    {
      name: "William J. Alexander",
      role: "App Developer",
      img: "https://teckko.vercel.app/image/team-item/team-item-2.jpg",
    },
    {
      name: "Donnie O. Goldsmith",
      role: "Software Developer",
      img: "https://teckko.vercel.app/image/team-item/team-item-3.jpg",
    },
    {
      name: "Micheal R. Shannon",
      role: "Software Developer",
      img: "https://teckko.vercel.app/image/team-item/team-item-4.jpg",
    },
    {
      name: "Sarah L. Peterson",
      role: "UI/UX Designer",
      img: "https://teckko.vercel.app/image/team-item/team-item-5.jpg",
    },
    {
      name: "James A. Wright",
      role: "Backend Engineer",
      img: "https://teckko.vercel.app/image/team-item/team-item-6.jpg",
    },
  ];

  const [visibleCards, setVisibleCards] = useState(3);
  const [idx, setIdx] = useState(0);
  const max = Math.max(0, members.length - visibleCards);
  const currentIdx = Math.min(idx, max);

  const testimonials = [
    {
      // Indian client - Web Development
      text: "A2V transformed our outdated portal into a lightning-fast, AI-perfected platform. Our customers noticed the difference within weeks of launch. Truly a world-class web development team based right here in India.",
      name: "Rajesh Kumar",
      role: "Founder, TechVision India",
      imgs: [
        "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=300&h=300&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&h=400&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?w=300&h=400&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&h=300&fit=crop&crop=face",
      ],
    },
    {
      // Indian client - Graphic Design & Branding
      text: "The branding A2V created for us is stunning. From our logo to our complete brand identity, every element reflects premium quality. Our brand now stands out in a very competitive market.",
      name: "Priya Sharma",
      role: "CEO, Greenleaf Solutions",
      imgs: [
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&h=300&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=300&h=400&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=400&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      ],
    },
    {
      // Indian client - Digital Marketing
      text: "Since A2V took over our digital marketing, our organic traffic has tripled and leads have never been higher. Their AI-driven approach to SEO and paid ads is genuinely next-level.",
      name: "Amit Patel",
      role: "Director, GrowthX Pvt. Ltd.",
      imgs: [
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=300&h=400&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1463453091185-61582044d556?w=300&h=400&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=300&h=300&fit=crop&crop=face",
      ],
    },
    {
      // Indian client - AI & Automation
      text: "A2V's AI automation suite saved our operations team hundreds of hours monthly. Their team understood our workflow deeply and delivered a custom solution that integrates perfectly with our systems.",
      name: "Deepa Nair",
      role: "COO, Reddy Enterprises",
      imgs: [
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=300&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=300&h=400&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=300&h=400&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=300&h=300&fit=crop&crop=face",
      ],
    },
  ];

  const shapes = [
    "rounded-full", // top-left: circle
    "rounded-2xl", // top-right: rounded rect
    "rounded-xl", // bottom-left: rounded rect
    "rounded-full", // bottom-right: circle
  ];

  const sliderRef = useRef(null);

  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 768) {
        setVisibleCards(1);
      } else if (window.innerWidth < 1280) {
        setVisibleCards(2);
      } else {
        setVisibleCards(3);
      }
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
    cssEase: "ease-in-out",
    beforeChange: (_old, newIdx) => {
      // sync right grid by updating img opacity via CSS
      document.querySelectorAll(".img-grid-slot").forEach((slot) => {
        slot.querySelectorAll("img").forEach((img, i) => {
          img.style.opacity = i === newIdx ? "1" : "0";
        });
      });
    },
  };

  const posts = [
    {
      id: 1,
      date: "05 June 2025",
      comments: 5,
      title: "The Future of Software Development Emerging and Technologies",
      description: "We undertake is a testament to our dedication to quality",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=300&fit=crop",
    },
    {
      id: 2,
      date: "05 June 2025",
      comments: 5,
      title:
        "Mastering Agile: Best Practices for Efficient Software Development",
      description: "We undertake is a testament to our dedication to quality",
      image:
        "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop",
    },
  ];

  return (
    <div className="font-family relative min-h-screen overflow-hidden bg-white">
      <section className="relative z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#f5f5f5]/55 px-4 py-16 sm:py-20 md:min-h-[90vh] md:py-24">
        <BackgroundCircle />
        <BackgroundCircle
          position={{ top: "80%", left: "-200px", translateY: "-50%" }}
          size={{ outer: "600px", inner: "400px" }}
        />

        <div className="z-10 mx-auto w-full max-w-[1440px]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Area (Title, About, Image) - Span 8 */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-1 gap-y-10">
              {/* Row 1: Title Block (Span 2) */}
              <div className="md:col-span-2">
                <p className="mb-4 text-base font-bold text-orange-500 sm:text-lg">
                  Welcome to Tekko AI-Perfected Software
                </p>
                <h1 className="text-4xl font-bold leading-tight text-black sm:text-6xl lg:text-7xl">
                  NextGen AI-Powered Innovators
                </h1>
                <h2 className="mt-3 text-2xl font-medium leading-tight text-black sm:text-5xl lg:text-6xl">
                  and{" "}
                  <span className="inline-block bg-orange-500 px-3 py-1 text-white">
                    DIGITAL SOFT
                  </span>{" "}
                  Solutions
                </h2>
              </div>

              {/* Row 2, Col 1: About Block */}
              <div className="flex flex-col justify-center">
                <p className="border-l-4 border-orange-500 pl-4 text-base leading-relaxed text-gray-600 md:text-lg">
                  We specialize in delivering comprehensive software solutions
                  tailored to meet the unique needs of businesses across various
                  industries, perfected with AI technology.
                </p>
                <div className="mt-8 flex flex-wrap gap-8 border-t border-gray-300 pt-8">
                  <div>
                    <h3 className="text-3xl font-semibold text-gray-600 md:text-5xl">
                      5k+
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">Happy Clients</p>
                  </div>
                  <div>
                    <h3 className="text-3xl font-semibold text-gray-600 md:text-5xl">
                      9+
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Years Experience
                    </p>
                  </div>
                </div>
              </div>

              {/* Row 2, Col 2: Image Block */}
              <div className="relative aspect-4/3 w-full overflow-hidden rounded-lg shadow-xl">
                <Image
                  src="https://teckko.vercel.app/image/page-title/img-page-title.jpg"
                  alt="Innovation Team"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  unoptimized
                />
              </div>
            </div>

            {/* Right Column: Contact Form (Span 4) */}
            <div className="lg:col-span-4 lg:sticky lg:top-24">
              <ContactForm source="hero_section_v2" />
            </div>
          </div>
        </div>
      </section>

      <SoftwareDev />
      <InnovateSoft />
      <PremierTech />

      <section className="bg-[#19272b] px-4 py-16 text-white md:px-8 md:py-24">
        <div className="mx-auto grid max-w-[1440px] gap-12 xl:grid-cols-[0.95fr_1.05fr] xl:items-start">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-orange-400 md:text-base">
              Grow &amp; Development
            </p>
            <h2 className="mt-6 text-4xl leading-[1.05] font-semibold tracking-tight md:text-5xl">
              Modern Technology and
              <span className="mt-1 block font-light text-white/90">
                Advancement Incentives
              </span>
            </h2>

            <div className="mt-10 border-t border-white/12">
              {growthPanels.map((panel) => {
                const isActive = panel.id === activeGrowthPanel;

                return (
                  <div
                    key={panel.id}
                    className="border-b border-white/12 py-6 md:py-4"
                  >
                    <button
                      type="button"
                      onMouseEnter={() => setActiveGrowthPanel(panel.id)}
                      className="flex w-full items-center justify-between gap-6 text-left"
                    >
                      <span
                        className={`text-2xl leading-tight md:text-[1.5rem] ${
                          isActive ? "text-orange-400" : "text-white"
                        }`}
                      >
                        {panel.title}
                      </span>
                      <span className="text-3xl leading-none text-white">
                        {isActive ? "−" : "+"}
                      </span>
                    </button>

                    {isActive ? (
                      <div className="mt-5 grid gap-6 md:grid-cols-[180px_1fr] md:items-start">
                        <div className="relative overflow-hidden">
                          <Image
                            src={panel.image}
                            alt={panel.title}
                            width={380}
                            height={420}
                            className="h-52 w-full object-cover md:h-44"
                            unoptimized
                          />
                        </div>

                        <div className="max-w-xl">
                          <p className="text-md text-white/90 md:text-[1.05rem]">
                            {panel.description}
                          </p>

                          <div className="mt-4 space-y-2">
                            {panel.points.map((point) => (
                              <div
                                key={point}
                                className="flex items-center gap-4 text-lg font-semibold text-white"
                              >
                                <span className="text-3xl leading-none text-orange-400">
                                  *
                                </span>
                                <span>{point}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative overflow-hidden bg-[#19272b] my-auto">
            <Image
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1400&q=80"
              alt="Team members collaborating around a laptop"
              width={1400}
              height={1600}
              className="h-full w-full object-cover"
              unoptimized
            />
          </div>
        </div>
      </section>

      <SoftwareDev />

      <section className="relative overflow-hidden bg-[#ffffff] px-4 py-16 text-black md:px-8 md:py-24">
        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto max-w-4xl text-center">
            <p className="text-sm font-semibold text-orange-400 md:text-base">
              Our Popular Services
            </p>
            <h2 className="mt-5 text-4xl leading-tight font-semibold tracking-tight md:text-6xl">
              We Run All kinds Of IT Services
              <span className="mt-1 block font-light text-black">
                that vow Your Success
              </span>
            </h2>
          </div>

          <div className="mt-14 grid border border-black/12 lg:grid-cols-3">
            {popularServices.map((service) => (
              <article
                key={service.title}
                className="group flex min-h-144 flex-col border-b border-black/12 px-6 py-8 transition duration-300 last:border-b-0 hover:bg-[#19272b] sm:px-8 sm:py-10 lg:border-r lg:border-b-0 last:lg:border-r-0"
              >
                <div
                  className={`${service.accent} transition duration-300 group-hover:text-orange-400`}
                >
                  {service.icon}
                </div>

                <h3
                  className={`mt-8 text-[1.75rem] leading-tight font-semibold sm:mt-10 sm:text-[2rem] ${service.accent} transition duration-300 group-hover:text-orange-400`}
                >
                  {service.title}
                </h3>

                <p className="mt-5 max-w-sm text-base leading-8 text-black transition duration-300 group-hover:text-white sm:text-lg sm:leading-9">
                  {service.description}
                </p>

                <div className="mt-8 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={900}
                    height={620}
                    className="h-52 w-full object-cover transition duration-500 group-hover:scale-105"
                    unoptimized
                  />
                </div>

                <div className="mt-auto pt-10">
                  {/* Original Link: {service.link} */}
                  <Link
                    href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=Hi, I'm interested in your ${service.title} service.`}
                    className="inline-flex translate-y-3 items-center gap-3 rounded-full border border-white px-6 py-3 text-base font-semibold text-white opacity-100 transition duration-300 hover:border-orange-400 hover:text-orange-400 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
                  >
                    <span className="text-xl leading-none">+</span>
                    <span>Read More</span>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <DiscussStart />

      <section className="bg-white px-4 py-16 sm:px-6 md:px-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-10 md:flex-row md:items-center md:gap-10">
          {/* Left */}
          <div className="w-full shrink-0 md:w-52">
            <p className="mb-3 text-sm font-semibold text-orange-500 md:text-base">
              Our Professionals
            </p>
            <h2 className="font-syne text-3xl font-extrabold leading-tight text-black sm:text-4xl md:text-5xl">
              Meet Our <span className="block font-light">Members</span>
            </h2>
            <div className="mt-7 flex gap-3">
              {[
                { dir: "prev", label: "←" },
                { dir: "next", label: "→" },
              ].map(({ dir, label }) => (
                <button
                  key={dir}
                  onClick={() =>
                    setIdx(
                      dir === "prev"
                        ? Math.max(0, currentIdx - 1)
                        : Math.min(max, currentIdx + 1),
                    )
                  }
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-black/30 text-black transition hover:border-black/70 hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-40"
                  disabled={max === 0}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="relative w-full overflow-hidden">
            <div
              className="flex gap-5 transition-transform duration-400 ease-in-out"
              style={{
                transform: `translateX(calc(-${currentIdx} * ((100% - ${(visibleCards - 1) * 20}px) / ${visibleCards} + 20px)))`,
              }}
            >
              {members.map((m) => (
                <div
                  key={m.name}
                  onClick={() => window.open(`https://wa.me/${siteConfig.phone?.replace(/\D/g, "")}?text=Hi, I'd like to connect with ${m.name} from A2V regarding your ${m.role} services.`, "_blank")}
                  className="group shrink-0 border border-white/10 bg-[#162020] cursor-pointer"
                  style={{
                    width: `calc((100% - ${(visibleCards - 1) * 20}px) / ${visibleCards})`,
                  }}
                >
                  {/* Image + hover overlay */}
                  <div className="relative overflow-hidden">
                    <Image
                      src={m.img}
                      alt={m.name}
                      width={400}
                      height={420}
                      className="w-full object-cover"
                      unoptimized
                    />

                    {/* Social icons — slides up on hover */}
                    <div className="absolute bottom-0 left-1/2 flex -translate-x-1/2 translate-y-full transition-transform duration-300 group-hover:translate-y-0">
                      {[
                        { label: "📸", href: siteConfig.socialLinks.instagram },
                        { label: "𝕏", href: siteConfig.socialLinks.x },
                        { label: "in", href: siteConfig.socialLinks.linkedin },
                        { label: "▶", href: siteConfig.socialLinks.youtube },
                      ].map(({ label, href }) => (
                        <a
                          key={label}
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex h-11 w-11 items-center justify-center bg-[#ff6a00] text-sm font-bold text-white hover:bg-[#a34502]"
                        >
                          {label}
                        </a>
                      ))}
                    </div>
                  </div>

                  {/* Info */}
                  <div className="px-4 pb-5 pt-7 text-center">
                    <p className="font-syne font-bold text-white">{m.name}</p>
                    <p className="mt-1 text-sm text-white/50">{m.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ExploreOur />

      <section className="bg-white px-4 py-16 sm:px-6 md:px-16 md:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          {/* LEFT: Quote Slider */}
          <div>
            <p className="mb-3 text-sm font-bold tracking-widest text-orange-500">
              Clients Feedback
            </p>
            <h2 className="font-syne mb-10 text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl md:text-5xl">
              1250+ <span className="text-gray-900">People Say</span>{" "}
              <span className="font-light text-gray-500">About Us</span>
            </h2>

            <div className="mb-6 flex items-end justify-between gap-4">
              <span className="font-syne block select-none text-7xl leading-none text-orange-500">
                &quot;
              </span>
              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={() => sliderRef.current?.slickPrev()}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-500 text-xl text-orange-500 transition hover:bg-orange-500 hover:text-white"
                  aria-label="Previous testimonial"
                >
                  &#8592;
                </button>
                <button
                  type="button"
                  onClick={() => sliderRef.current?.slickNext()}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-orange-500 text-xl text-orange-500 transition hover:bg-orange-500 hover:text-white"
                  aria-label="Next testimonial"
                >
                  &#8594;
                </button>
              </div>
            </div>

            <Slider ref={sliderRef} {...settings}>
              {testimonials.map((t, i) => (
                <div key={i} className="outline-none">
                  <p className="mb-6 text-lg leading-8 text-gray-700">
                    {t.text}
                  </p>
                  <p className="text-sm font-semibold text-gray-900">
                    {t.name}
                  </p>
                  <p className="mt-1 text-sm font-medium text-orange-500">
                    {t.role}
                  </p>
                </div>
              ))}
            </Slider>
          </div>

          {/* RIGHT: 2x2 image grid (images cross-fade on slide change) */}
          <div className="grid h-[320px] grid-cols-2 grid-rows-2 gap-3 sm:h-[360px] md:h-[460px] md:gap-4">
            {[0, 1, 2, 3].map((slotIdx) => (
              <div
                key={slotIdx}
                className={`img-grid-slot relative overflow-hidden ${shapes[slotIdx]}`}
              >
                {testimonials.map((t, ti) => (
                  <Image
                    key={ti}
                    src={t.imgs[slotIdx]}
                    alt={t.name}
                    loading="lazy"
                    width={500}
                    height={500}
                    className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
                    style={{ opacity: ti === 0 ? 1 : 0 }}
                    unoptimized
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Contact />

      <Blogs />
    </div>
  );
}
