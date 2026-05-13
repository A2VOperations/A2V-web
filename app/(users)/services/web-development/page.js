"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/app/config";
import Contact from "@/app/components/Contact";
import Testimonials from "@/app/components/Testimonials";
import ServiceFAQ from "@/app/components/ServiceFAQ";
import FeaturedProjects from "@/app/components/FeaturedProjects";
import {
  Code,
  Globe,
  Cpu,
  Database,
  Server,
  ShieldCheck,
  Zap,
  Terminal,
} from "lucide-react";

const features = [
  {
    title: "Custom Web Apps",
    description: "Scalable and dynamic web applications built with modern frameworks tailored to your business needs.",
    icon: <Code className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "E-Commerce Solutions",
    description: "Robust online stores with secure payment gateways, inventory management, and seamless checkouts.",
    icon: <Database className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Corporate Websites",
    description: "Professional, fast-loading, and SEO-optimized websites that establish trust and credibility.",
    icon: <Globe className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Backend & APIs",
    description: "Secure and efficient server-side architectures and API integrations to power your digital platforms.",
    icon: <Server className="w-6 h-6 text-orange-500" />,
  },
];

const benefits = [
  {
    id: "01",
    title: "Custom Web Solutions",
    description: "Tailor-made web applications designed to solve your specific business challenges and drive growth.",
    href: siteConfig.socialLinks.whatsapp
  },
  {
    id: "02",
    title: "E-commerce Development",
    description: "Robust online stores that provide seamless shopping experiences and maximize your sales potential.",
    href: siteConfig.socialLinks.whatsapp
  },
  {
    id: "03",
    title: "CMS Development",
    description: "User-friendly content management systems that give you full control over your digital content.",
    href: siteConfig.socialLinks.whatsapp
  },
  {
    id: "04",
    title: "Progressive Web Apps",
    description: "High-performance web apps that look and feel like native mobile applications across all devices.",
    href: siteConfig.socialLinks.whatsapp
  },
  {
    id: "05",
    title: "Web Portal Development",
    description: "Secure and scalable portals for employees, customers, or partners to access centralized information.",
    href: siteConfig.socialLinks.whatsapp
  },
  {
    id: "06",
    title: "API Integration",
    description: "Connecting your web ecosystem with third-party services for enhanced functionality and automation.",
    href: siteConfig.socialLinks.whatsapp
  },
  {
    id: "07",
    title: "Maintenance & Support",
    description: "Continuous monitoring, updates, and optimization to ensure your web assets remain secure and fast.",
    href: siteConfig.socialLinks.whatsapp
  },
  {
    id: "08",
    title: "SPA Development",
    description: "Blazing fast Single Page Applications that provide fluid, app-like interactions without page reloads.",
    href: siteConfig.socialLinks.whatsapp
  },
  {
    id: "09",
    title: "Cloud Solutions",
    description: "Scalable cloud-based architectures that offer reliability, speed, and cost-efficient web hosting.",
    href: siteConfig.socialLinks.whatsapp
  },
  {
    id: "10",
    title: "Web Security",
    description: "Advanced security protocols and vulnerability assessments to protect your data and user privacy.",
    href: siteConfig.socialLinks.whatsapp
  },
];

export default function WebDevelopmentPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#0d1117] overflow-hidden pt-32 pb-24 lg:pt-48 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <span className="text-[#FF4500] font-bold uppercase tracking-widest text-sm mb-6 block">
              AI-PERFECTED WEB DEVELOPMENT
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Engineering <br />
              <span className="text-[#FF4500]">AI-Perfected Excellence</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-xl leading-relaxed">
              We build high-performance, AI-perfected, and scalable web solutions 
              that drive business growth and user engagement.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link 
                href={siteConfig.socialLinks.whatsapp} 
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-[#FF4500] text-white font-bold rounded-sm hover:bg-orange-600 transition-all uppercase tracking-wider text-sm"
              >
                Start Building
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px]">
            <Image
              src="/images/web-dev-hero.png"
              alt="Web Development"
              fill
              className="object-cover rounded-sm"
              priority
            />
          </div>
        </div>
        {/* Abstract Background Element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[#FF4500]/5 -skew-x-12 translate-x-1/4" />
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
                  OUR CAPABILITIES
                </span>
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  AI-Enhanced Solutions <br /> That Scale
                </h2>
              </div>
            </div>
            <div className="lg:pt-16">
              <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                We combine technical excellence with strategic thinking to deliver
                results that move the needle.
              </p>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 relative group overflow-hidden rounded-sm h-[500px]">
              <Image
                src="/images/portfolio-2.png"
                alt="Web Development Collaboration"
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
                {/* Original Link: {benefit.href} */}
                <Link
                  href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=Hi, I'm interested in ${benefit.title} (Web Development).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-2 border-2 border-gray-900 font-bold hover:bg-gray-900 hover:text-white transition-all text-sm uppercase tracking-wider text-center"
                >
                  Read More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Testimonials />

      <FeaturedProjects source="web-development" />
      
      <ServiceFAQ source="web-development" />

      <Contact />
    </main>
  );
}
