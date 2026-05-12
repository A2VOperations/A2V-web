"use client";

import Image from "next/image";
import Link from "next/link";
import Contact from "@/app/components/Contact";
import Testimonials from "@/app/components/Testimonials";
import ServiceFAQ from "@/app/components/ServiceFAQ";
import FeaturedProjects from "@/app/components/FeaturedProjects";
import {
  Palette,
  Layout,
  Layers,
  PenTool,
  Monitor,
  Image as ImageIcon,
  Smartphone,
  Printer,
  MousePointer2,
  Brush,
  ShieldCheck,
  Zap,
  Sparkles,
} from "lucide-react";

const features = [
  {
    title: "Logo & Branding",
    description: "Crafting unique and memorable identities that represent your brand's core values and vision.",
    icon: <Palette className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "UI/UX Design",
    description: "Creating intuitive and aesthetically pleasing interfaces for web and mobile applications.",
    icon: <Layout className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Print Media",
    description: "High-quality designs for brochures, business cards, and all your marketing collateral needs.",
    icon: <Printer className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Social Media Graphics",
    description: "Engagement-focused visuals tailored for Instagram, LinkedIn, and Facebook to boost presence.",
    icon: <ImageIcon className="w-6 h-6 text-orange-500" />,
  },
];

const benefits = [
  {
    id: "01",
    title: "Brand Identity",
    description: "Distinctive logos and comprehensive brand systems that serve as the foundation of your identity.",
    href: "/services/graphic-designing/brand-identity"
  },
  {
    id: "02",
    title: "UI/UX Design",
    description: "User-centric digital experiences that combine stunning aesthetics with intuitive functionality.",
    href: "/services/graphic-designing/ui-ux-design"
  },
  {
    id: "03",
    title: "Print & Social Media",
    description: "High-engagement visuals for social platforms and professional print marketing collateral.",
    href: "/services/graphic-designing/print-social-media"
  },
  {
    id: "04",
    title: "Motion Graphics",
    description: "Dynamic animations and video graphics that capture attention and tell your brand story.",
    href: "/services/graphic-designing/motion-graphics"
  },
  {
    id: "05",
    title: "Package Design",
    description: "Innovative packaging solutions that protect your product and attract customers on the shelf.",
    href: "/services/graphic-designing/package-design"
  },
  {
    id: "06",
    title: "Illustration Art",
    description: "Custom digital illustrations that add unique personality and charm to your brand communication.",
    href: "/services/graphic-designing/illustration"
  },
  {
    id: "07",
    title: "Presentation Design",
    description: "High-impact deck designs that help you communicate ideas clearly and win over audiences.",
    href: "/services/graphic-designing/presentation-design"
  },
  {
    id: "08",
    title: "Infographic Design",
    description: "Transforming complex data into clear, engaging, and easy-to-understand visual narratives.",
    href: "/services/graphic-designing/infographics"
  },
  {
    id: "09",
    title: "3D Rendering",
    description: "Photorealistic 3D models and renderings that bring your products and concepts to life.",
    href: "/services/graphic-designing/3d-rendering"
  },
  {
    id: "10",
    title: "Logo Animation",
    description: "Bringing your brand identity to life with smooth, professional, and memorable animations.",
    href: "/services/graphic-designing/logo-animation"
  }
];

export default function GraphicDesignPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#19272B] overflow-visible pb-24 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pt-32">
          <div className="relative z-20">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
              Transform Your <br />
              <span className="text-white">Brand with Stunning</span> <br />
              <span className="text-white">Visual Design</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-lg leading-relaxed">
              We turn your vision into reality with visually captivating designs
              that reflect your brand&apos;s true identity. From logos to
              complete brand systems, our creative team crafts experiences that
              leave a lasting impression.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/home/contact" className="px-10 py-4 bg-[#FF4500] text-white font-bold rounded-sm hover:bg-orange-600 transition-all uppercase tracking-wider text-sm">
                Start Project
              </Link>
              <button className="px-10 py-4 border-2 border-white/20 text-white font-bold rounded-sm hover:bg-white/10 transition-all uppercase tracking-wider text-sm">
                View Portfolio
              </button>
            </div>
          </div>

          <div className="relative h-[500px] lg:h-[700px] z-10">
            <div className="relative w-full h-full rounded-sm overflow-hidden shadow-2xl">
              <Image
                src="/images/graphic-design-hero.png"
                alt="Graphic Design Showcase"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-[#FF4500] group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 px-6 bg-[#f4f7f8]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start mb-16">
            <div className="flex gap-6">
              <div className="w-1.5 h-32 bg-[#FF4500] shrink-0" />
              <div>
                <span className="text-[#FF4500] font-bold uppercase tracking-widest text-sm mb-4 block">
                  OUR SERVICES
                </span>
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Design Solutions That <br /> Power Your Business
                </h2>
              </div>
            </div>
            <div className="lg:pt-16">
              <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                We combine technical excellence with creative strategy to
                deliver results that move the needle.
              </p>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 relative group overflow-hidden rounded-sm h-[500px]">
              <Image
                src="/images/portfolio-1.png"
                alt="Design Collaboration"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-[#FF4500]/20 mix-blend-multiply" />
            </div>

            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-white p-12 rounded-sm shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-[#1a1a1a] text-white rounded-full flex items-center justify-center font-bold text-lg mb-8">
                  {benefit.id}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 mb-10 leading-relaxed">
                  {benefit.description}
                </p>
                <Link
                  href={benefit.href}
                  className="inline-block px-8 py-2 border-2 border-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-all text-sm uppercase tracking-wider text-center"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Audit Section */}
      <section className="bg-[#121212] py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="absolute top-1/4 -left-8 w-12 h-12 border-8 border-[#FF4500] rounded-full z-20" />
            <div className="absolute top-10 right-10 w-16 h-16 border-12 border-[#FF4500] rounded-full z-20" />
            <div className="relative rounded-sm overflow-hidden h-[400px] shadow-2xl">
              <Image
                src="/images/portfolio-3.png"
                alt="Brand Audit"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="text-white order-1 lg:order-2">
            <span className="text-[#FF4500] font-bold uppercase tracking-widest text-sm mb-6 block">
              VISUAL AUDIT
            </span>
            <h2 className="text-3xl md:text-5xl font-bold mb-10 leading-tight">
              Test your Brand&apos;s <br /> Impact with{" "}
              <span className="text-white underline decoration-[#FF4500] decoration-8 underline-offset-8">
                A2V Design
              </span>{" "}
              Audit!
            </h2>
            <p className="text-gray-400 text-lg mb-12 leading-relaxed max-w-xl">
              Whether you&apos;re aiming for a fresh startup look or a corporate
              rebrand, we analyze your current visuals and provide a roadmap for
              aesthetic excellence.
            </p>
            <div className="flex flex-col sm:flex-row max-w-xl">
              <input
                type="text"
                placeholder="Enter your website or brand name"
                className="flex-1 px-6 py-4 bg-white text-gray-900 outline-none placeholder:text-gray-400"
              />
              <button className="bg-[#FF4500] text-white px-8 py-4 font-bold uppercase tracking-wider hover:bg-orange-600 transition-colors">
                Analyze Brand
              </button>
            </div>
          </div>
        </div>
      </section>

      <Testimonials />

      <FeaturedProjects source="graphic-designing" />
      
      <ServiceFAQ source="graphic-designing" />

      <Contact />
    </main>
  );
}
