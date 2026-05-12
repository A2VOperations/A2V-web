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
import Testimonials from "@/app/components/Testimonials";

export default function ComputerVisionPage() {
  const source = "computer-vision";

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"
            alt="Computer Vision Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-black uppercase tracking-[0.2em] mb-8">
                AI Intelligence
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-[0.85]">
                Computer <br />{" "}
                <span className="text-orange-500">Vision</span>
              </h1>
              <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                We leverage cutting-edge artificial intelligence to transform your business 
                operations and drive unprecedented growth through intelligent automation.
              </p>
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <button className="px-12 py-5 bg-orange-500 text-white font-black rounded-xl hover:bg-orange-600 transition-all shadow-[0_20px_40px_rgba(252,102,0,0.3)] hover:-translate-y-1">
                  Start Your Project
                </button>
                <button className="px-12 py-5 bg-white/5 backdrop-blur-md text-white font-black rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  View Roadmap
                </button>
              </div>
            </div>

            <div className="flex-1 relative w-full max-w-2xl">
              <div className="relative aspect-square rounded-[3rem] overflow-hidden border-2 border-orange-500/20 shadow-2xl group">
                <Image
                  src="https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2070&auto=format&fit=crop"
                  alt="Computer Vision Showcase"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute bottom-10 right-10 p-8 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl">
                  <p className="text-4xl font-black text-orange-500 mb-2">
                    10x
                  </p>
                  <p className="text-xs font-black text-white uppercase tracking-widest">
                    Efficiency Boost
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <ServiceStatsCards source={source} />
      
      {/* About Section */}
      <ServiceAbout source={source} />

      {/* Dark Grid Section */}
      <ServiceDarkGrid source={source} />

      {/* Feature Grid Section */}
      <ServiceFeatureGrid source={source} />

      {/* Showcase Section */}
      <ServiceShowcase source={source} />

      <Testimonials />

      <FeaturedProjects source={source} />
      
      <ServiceFAQ source={source} />

      <Contact />
    </main>
  );
}
