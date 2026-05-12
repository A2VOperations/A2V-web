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

const galleryProjects = [
  {
    image: "https://res.cloudinary.com/dwbgco82p/image/upload/v1778575206/Picture19_sbdc8t.jpg",
    categories: ["Branding"],
    title: "QUATES",
    description: "", 
    link: "#"
  },
  {
    image: "https://res.cloudinary.com/dwbgco82p/image/upload/v1778575206/Picture19_sbdc8t.jpg",
    categories: ["Branding"],
    title: "VISUAL ECOSYSTEM 02",
    description: "", 
    link: "#"
  },
  {
    image: "https://res.cloudinary.com/dwbgco82p/image/upload/v1778575206/Picture19_sbdc8t.jpg",
    categories: ["Branding"],
    title: "BRAND ARCHITECTURE 03",
    description: "",
    link: "#"
  },
  {
    image: "https://res.cloudinary.com/dwbgco82p/image/upload/v1778575206/Picture19_sbdc8t.jpg",
    categories: ["Branding"],
    title: "STRATEGIC MARK 04",
    description: "",
    link: "#"
  }
];

export default function BrandIdentityPage() {
  const source = "brand-identity";

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-orange-500 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-15">
          <Image
            src="https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop"
            alt="Branding Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-orange-500/20 to-orange-500" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-black uppercase tracking-[0.2em] mb-8">
                Strategic Branding
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-[0.85]">
                Brand <br />{" "}
                <span className="text-slate-900">Visual Identity</span>
              </h1>
              <p className="text-xl text-white/90 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                We craft memorable visual identities that tell your unique
                story, build deep trust, and distinguish your brand in a crowded
                market.
              </p>
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <button className="px-12 py-5 bg-slate-900 text-white font-black rounded-xl hover:bg-slate-800 transition-all shadow-[0_20px_40px_rgba(0,0,0,0.3)] hover:-translate-y-1">
                  Define Your Identity
                </button>
                <button className="px-12 py-5 bg-white text-orange-500 font-black rounded-xl hover:bg-slate-50 transition-all">
                  View Portfolio
                </button>
              </div>
            </div>

            <div className="flex-1 relative w-full max-w-2xl">
              <div className="relative aspect-square rounded-[3rem] overflow-hidden border-8 border-white/20 shadow-[0_40px_100px_rgba(0,0,0,0.3)] rotate-3 group">
                <Image
                  src="https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=2070&auto=format&fit=crop"
                  alt="Branding Showcase"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <ServiceStatsCards source={source} />
      
      {/* Gallery Section */}
      <FeaturedProjects 
        projects={galleryProjects} 
        variant="gallery" 
        title="Visual Identity Gallery" 
        subtitle="Our Creative Work"
      />

      {/* About Section */}
      <ServiceAbout source={source} />

      {/* Dark Grid Section */}
      <ServiceDarkGrid source={source} />

      {/* Feature Grid Section */}
      <ServiceFeatureGrid source={source} />

      {/* Showcase Section */}
      <ServiceShowcase source={source} />

      <ClientLogos />

      <ServiceFAQ source="brand-identity" />
      <Contact />
    </main>
  );
}
