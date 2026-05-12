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
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800&auto=format&fit=crop",
    categories: ["Building", "Interior"],
    title: "The Fallingwater House",
    description: "We understand that data is greatest asset when it comes to analyzing and optimizing your supply chain performance.",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1428366890462-dd4baecf492b?q=80&w=800&auto=format&fit=crop",
    categories: ["Construction", "Engineering"],
    title: "The Guggenheim Museum",
    description: "Cost savings is crucial, innovative technology minimizes your overall spend by utilizing an extensive consolidation.",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=800&auto=format&fit=crop",
    categories: ["Renovation", "Architecture"],
    title: "Neue National Galerie",
    description: "Our Group has been building relationships and projects last. Serving an impressive list of long-term clients with experience.",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1541888086925-0c13d3cb0023?q=80&w=800&auto=format&fit=crop",
    categories: ["Commercial", "Design"],
    title: "Modern Tech Hub",
    description: "A state-of-the-art facility designed for collaboration and innovation in the heart of the tech district.",
    link: "#"
  }
];

export default function CMSDevelopmentPage() {
  const source = "cms-development";

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative py-32 bg-slate-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
            alt="CMS Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-black uppercase tracking-[0.2em] mb-8">
                Total Content Control
              </div>
              <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-[0.85]">
                CMS <br /> <span className="text-orange-500">Architecture</span>
              </h1>
              <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
                Empower your marketing team to manage complex content
                effortlessly without needing a developer for every update.
              </p>
              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
                <button className="px-12 py-5 bg-orange-500 text-white font-black rounded-xl hover:bg-orange-600 transition-all shadow-[0_20px_40px_rgba(252,102,0,0.3)] hover:-translate-y-1">
                  Get Total Control
                </button>
                <button className="px-12 py-5 bg-white/5 backdrop-blur-md text-white font-black rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  Request Demo
                </button>
              </div>
            </div>

            <div className="flex-1 relative w-full max-w-2xl">
              <div className="relative aspect-square rounded-[3rem] overflow-hidden border-2 border-orange-500/20 shadow-2xl group">
                <Image
                  src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop"
                  alt="CMS Interface"
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
      <FeaturedProjects projects={featuredProjects} />

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

      {/* Contact Section */}
      
      <ServiceFAQ source="cms-development" />
      <Contact />
    </main>
  );
}
