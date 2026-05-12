"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/app/config";
import Contact from "@/app/components/Contact";
import Testimonials from "@/app/components/Testimonials";
import ServiceFAQ from "@/app/components/ServiceFAQ";
import FeaturedProjects from "@/app/components/FeaturedProjects";
import {
  Target,
  Mail,
  Megaphone,
  Users,
  Search,
  Zap,
  ShieldCheck,
  Rocket,
  Link2,
  Code,
} from "lucide-react";

const features = [
  {
    title: "SEO Optimization",
    description: "Data-driven strategies to rank higher on search engines and drive organic traffic to your website.",
    icon: <Search className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Social Media Marketing",
    description: "Engagement-focused campaigns across all major platforms like Instagram, LinkedIn, and Facebook.",
    icon: <Users className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "PPC & Paid Ads",
    description: "Maximize your ROI with targeted advertising on Google Ads, Meta, and other premium networks.",
    icon: <Target className="w-6 h-6 text-orange-500" />,
  },
  {
    title: "Content Marketing",
    description: "Compelling storytelling and content creation that educates, inspires, and converts your audience.",
    icon: <Megaphone className="w-6 h-6 text-orange-500" />,
  },
];

const benefits = [
  {
    id: "01",
    title: "SEO Optimization",
    description: "Data-driven search engine optimization to boost your organic visibility and drive high-intent traffic.",
    href: "/services/digital-marketing/seo-optimization"
  },
  {
    id: "02",
    title: "Social Media Marketing",
    description: "Strategic social media campaigns that build brand awareness and foster deep audience engagement.",
    href: "/services/digital-marketing/social-media-marketing"
  },
  {
    id: "03",
    title: "PPC & Paid Ads",
    description: "Targeted advertising campaigns across Google, Meta, and LinkedIn to generate immediate ROI.",
    href: "/services/digital-marketing/ppc-paid-ads"
  },
  {
    id: "04",
    title: "Content Marketing",
    description: "Compelling storytelling and high-value content that attracts, educates, and converts your audience.",
    href: "/services/digital-marketing/content-marketing"
  },
  {
    id: "05",
    title: "Email Marketing",
    description: "Personalized email campaigns designed to nurture leads and build long-term customer loyalty.",
    href: "/services/digital-marketing/email-marketing"
  },
  {
    id: "06",
    title: "Influencer Marketing",
    description: "Partnering with key industry voices to amplify your brand message and reach new audiences.",
    href: "/services/digital-marketing/influencer-marketing"
  },
  {
    id: "07",
    title: "ORM Services",
    description: "Strategic reputation management to build and maintain a positive brand image in the digital space.",
    href: "/services/digital-marketing/online-reputation-management"
  },
  {
    id: "08",
    title: "E-Commerce Marketing",
    description: "Data-backed marketing strategies specifically tailored for online stores to increase conversions.",
    href: "/services/digital-marketing/ecommerce-marketing"
  },
  {
    id: "09",
    title: "Marketing Automation",
    description: "Implementing smart workflows that streamline your marketing tasks and increase efficiency.",
    href: "/services/digital-marketing/marketing-automation"
  },
  {
    id: "10",
    title: "Conversion Optimization",
    description: "Rigorous A/B testing and user analysis to turn your existing traffic into loyal customers.",
    href: "/services/digital-marketing/conversion-rate-optimization"
  }
];

export default function DigitalMarketingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-[#1a1a1a] overflow-hidden pt-32 pb-24 lg:pt-48 lg:pb-32">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <span className="text-[#FF4500] font-bold uppercase tracking-widest text-sm mb-6 block">
              DIGITAL MARKETING
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Aggressive Growth <br />
              <span className="text-white">Powered By Data</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl mb-12 max-w-xl leading-relaxed">
              We don&apos;t just chase clicks; we chase revenue. Our full-funnel 
              marketing strategies turn your digital presence into a conversion engine.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link href="/home/contact" className="px-10 py-4 bg-[#FF4500] text-white font-bold rounded-sm hover:bg-orange-600 transition-all uppercase tracking-wider text-sm">
                Get Free Audit
              </Link>
            </div>
          </div>
          <div className="relative h-[400px] lg:h-[600px]">
            <Image
              src="/images/digital-marketing-hero.png"
              alt="Digital Marketing"
              fill
              className="object-cover rounded-sm grayscale"
              priority
            />
          </div>
        </div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#FF4500]/10 to-transparent" />
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
                  OUR SOLUTIONS
                </span>
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Our Benefit We Can <br /> Offer To You
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
            {/* Image Card (Spans 2 cols on lg) */}
            <div className="lg:col-span-2 relative group overflow-hidden rounded-sm h-[500px]">
              <Image
                src="/images/team-collaboration.png"
                alt="Team Collaboration"
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
                  href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=Hi, I'm interested in ${benefit.title} (Digital Marketing).`}
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

      <FeaturedProjects source="digital-marketing" />
      
      <ServiceFAQ source="digital-marketing" />

      <Contact />
    </main>
  );
}
