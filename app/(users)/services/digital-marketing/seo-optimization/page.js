"use client";

import Image from "next/image";
import Contact from "@/app/components/Contact";
import ServiceFAQ from "@/app/components/ServiceFAQ";
import FeaturedProjects from "@/app/components/FeaturedProjects";
import ServiceStatsCards from "@/app/components/ServiceStatsCards";
import ServiceAbout from "@/app/components/ServiceAbout";
import ServiceDarkGrid from "@/app/components/ServiceDarkGrid";
import ServiceFeatureGrid from "@/app/components/ServiceFeatureGrid";
import ServiceShowcase from "@/app/components/ServiceShowcase";
import ClientLogos from "@/app/components/ClientLogos";

const featuredProjects = [
  {
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    previewImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
    categories: ["SEO", "Analysis"],
    title: "Organic Growth Audit",
    description: "Detailed analysis showing 300% increase in organic traffic through technical SEO and content optimization.",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
    previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2426&auto=format&fit=crop",
    categories: ["Search", "Rankings"],
    title: "Keyword Dominance",
    description: "Successfully ranking for 500+ competitive keywords on the first page of Google search results.",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1504868584819-f8e90526354c?q=80&w=800&auto=format&fit=crop",
    previewImage: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop",
    categories: ["Traffic", "ROI"],
    title: "Conversion Optimization",
    description: "Data-driven approach to SEO that focuses on quality traffic and high conversion rates.",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?q=80&w=800&auto=format&fit=crop",
    previewImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2426&auto=format&fit=crop",
    categories: ["Technical", "Performance"],
    title: "Core Web Vitals",
    description: "Optimizing website performance to meet Google's Core Web Vitals and improve user experience.",
    link: "#"
  }
];

export default function SEOOptimizationPage() {
  const source = "seo-optimization";

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
            alt="SEO Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-black uppercase tracking-[0.2em] mb-8">
                Rank #1 Strategy
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-[0.85]">
                SEO <br /> <span className="text-orange-500">Optimization</span>
              </h1>
              <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                We use data-driven strategies and technical excellence to
                dominate search results and drive consistent organic growth.
              </p>
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <button className="px-12 py-5 bg-orange-500 text-white font-black rounded-xl hover:bg-orange-600 transition-all shadow-[0_20px_40px_rgba(252,102,0,0.3)] hover:-translate-y-1">
                  Audit My Website
                </button>
                <button className="px-12 py-5 bg-white/5 backdrop-blur-md text-white font-black rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  View Case Studies
                </button>
              </div>
            </div>
            
            <div className="flex-1 relative w-full max-w-2xl">
              <div className="relative aspect-square rounded-[3rem] overflow-hidden border-2 border-white/10 shadow-2xl group">
                <Image
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                  alt="SEO Analysis"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-orange-500/10 mix-blend-overlay" />
                
                {/* Floating Stat Card */}
                <div className="absolute bottom-10 right-10 p-8 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl animate-bounce-slow">
                  <p className="text-4xl font-black text-orange-500 mb-2">350%</p>
                  <p className="text-xs font-black text-white uppercase tracking-widest">
                    Avg. Traffic Increase
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <ServiceStatsCards source={source} />
      <FeaturedProjects projects={featuredProjects} source={source} />

      {/* About Section */}
      <ServiceAbout source={source} />

      {/* Dark Grid Section */}
      <ServiceDarkGrid source={source} />

      {/* Feature Grid Section */}
      <ServiceFeatureGrid source={source} />

      {/* Showcase Section */}
      <ServiceShowcase source={source} />

      {/* Client Logos Section */}
      <ClientLogos />


      <ServiceFAQ source="seo-optimization" />
      <Contact />
    </main>
  );
}

