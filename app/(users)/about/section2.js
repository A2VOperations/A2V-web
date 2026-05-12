"use client";
import React from "react";
import Image from "next/image";
import { siteConfig } from "@/app/config";

const Section2 = () => {
  return (
    <section className="pt-20 pb-10 px-6 md:px-12 lg:px-24 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Column */}
        <div className="flex flex-col">
          {/* Subheading */}
          <div className="flex items-center gap-4 text-gray-800 text-xs font-semibold tracking-[0.2em] uppercase mb-8">
            OUR STORY
            <svg
              width="24"
              height="10"
              viewBox="0 0 24 10"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 1H23V10" stroke="#6B7280" strokeWidth="1" />
            </svg>
          </div>

          {/* Heading */}
          <div className="relative mb-12">
            <div className="absolute left-0 top-1 bottom-1 w-[6px] bg-gradient-to-b from-red-500 via-red-600 to-red-900/50"></div>
            <h2 className="pl-8 text-[24px] md:text-[44px] lg:text-[48px] font-bold text-gray-800 leading-tight">
              Your Vision Our Expertise Your
              <br className="hidden md:block" /> Success Get Noticed Generate
              <br className="hidden md:block" />{" "}
              <span className="text-[#ff6900]">Leads Dominate.</span>
            </h2>
          </div>

          {/* Main Left Image */}
          <div className="w-full h-[300px] md:h-[380px] relative overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&q=80"
              alt="A2V team working"
              fill
              className="object-cover"
            />
          </div>

          {/* Capabilities strip — fills white gap below image */}
          <div className="mt-6 grid grid-cols-2 gap-x-6 gap-y-5">
            {[
              { title: "Web Development",     desc: "Next.js, React, CMS & PWA" },
              { title: "AI Automation",        desc: "Smart workflows & ML tools" },
              { title: "SEO & Growth",         desc: "Ranked. Found. Converted." },
              { title: "Graphic Design",       desc: "Brand identity & motion" },
              { title: "Digital Marketing",    desc: "Paid, organic & influencer" },
              { title: "UI/UX Design",         desc: "Human-centered interfaces" },
            ].map((item) => (
              <div key={item.title} className="flex items-start gap-3">
                <span className="mt-1.5 w-2 h-2 bg-[#ff6900] shrink-0" />
                <div>
                  <p className="text-sm font-bold text-gray-800 leading-tight">{item.title}</p>
                  <p className="text-xs text-gray-400 mt-0.5">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col mt-4 lg:mt-0">
          {/* Top Images Row */}
          <div className="grid grid-cols-2 gap-6 mb-10">
            {/* Image 1 */}
            <div className="relative h-[200px] md:h-[260px] overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
                alt="Indian woman working on tech blog"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <span className="px-3 py-1 bg-black/40 backdrop-blur-md text-white text-[10px] uppercase font-semibold tracking-wider border border-white/20">
                  Tech Blog
                </span>
                <span className="px-3 py-1 bg-black/40 backdrop-blur-md text-white text-[10px] uppercase font-semibold tracking-wider border border-white/20">
                  Trends
                </span>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative h-[200px] md:h-[260px] overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                alt="Indian team discussing trends"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <span className="px-3 py-1 bg-black/40 backdrop-blur-md text-white text-[10px] uppercase font-semibold tracking-wider border border-white/20">
                  Tech Blog
                </span>
                <span className="px-3 py-1 bg-black/40 backdrop-blur-md text-white text-[10px] uppercase font-semibold tracking-wider border border-white/20">
                  Trends
                </span>
              </div>
            </div>
          </div>

          {/* Description Text */}
          <p className="text-gray-600 text-sm md:text-base leading-[1.8] mb-12">
            At A2V, we combine AI-perfected strategies with deep creative expertise to help
            brands grow faster, communicate better, and convert more. Every project we take on
            is backed by data, driven by design, and built for real results.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-3xl font-bold mb-2">5k+</h3>
              <p className="text-[11px] text-gray-400 uppercase font-semibold tracking-wider">
                Completed Projects
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">98%</h3>
              <p className="text-[11px] text-gray-400 uppercase font-semibold tracking-wider">
                Client Satisfaction
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">9+</h3>
              <p className="text-[11px] text-gray-400 uppercase font-semibold tracking-wider">
                Years Of Mastery
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">15+</h3>
              <p className="text-[11px] text-gray-400 uppercase font-semibold tracking-wider">
                Industries Served
              </p>
            </div>
          </div>

          {/* Bottom Action Area */}
          <div className="flex flex-wrap items-center gap-8 md:gap-12">
            {/* Avatars */}
            <div className="flex -space-x-3">
              <img
                className="w-14 h-14 border-4 border-white object-cover relative z-30"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
                alt="Team member"
              />
              <img
                className="w-14 h-14 border-4 border-white object-cover relative z-20"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                alt="Team member"
              />
              <img
                className="w-14 h-14 border-4 border-white object-cover relative z-10"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                alt="Team member"
              />
            </div>

            {/* AI Integration Badge — replaced Watch Intro */}
            <div className="flex flex-wrap items-center gap-6 group cursor-default">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 border border-[#ff6900]/30 flex items-center justify-center relative">
                  <div className="absolute inset-2 bg-[#ff6900]/10 animate-pulse" />
                  <svg className="w-6 h-6 text-[#ff6900]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-[#ff6900]">Our Approach</span>
                  <span className="text-sm font-bold text-gray-800">AI-Integrated Methodology</span>
                </div>
              </div>
              
              <div className="hidden sm:flex items-center gap-2 px-4 py-2 border border-gray-200">
                <div className="w-1.5 h-1.5 bg-green-500 animate-pulse" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-gray-600">Strategy First</span>
              </div>
            </div>
          </div>

          {/* Achievement card — fills vertical gap on tablet */}
          <div className="mt-8 bg-[#19272b] p-7 flex flex-col gap-4">
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#ff6900]">
              Why Clients Choose A2V
            </span>
            <p className="text-gray-400 text-xs italic leading-relaxed">
              &quot;We don&apos;t just build websites; we build the digital future of your business.&quot;
            </p>

            {/* Directed WhatsApp Button */}
            <button
              onClick={() => window.open(`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=${encodeURIComponent("Hi A2V, I'm interested in your AI-Integrated services and would like to discuss our digital strategy.")}`, "_blank")}
              className="mt-2 flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#128C7E] text-white py-3 font-bold transition-all duration-300 group shadow-lg shadow-green-500/20"
            >
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.067 2.877 1.215 3.076.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.94 3.659 1.437 5.634 1.437h.005c6.558 0 11.897-5.335 11.9-11.894a11.83 11.83 0 00-3.415-8.413z" />
              </svg>
              Chat on WhatsApp
            </button>
            <div className="flex items-center gap-4 pt-2 border-t border-white/10">
              <div className="flex flex-col">
                <span className="text-white font-bold text-sm">A2V Digital Team</span>
                <span className="text-gray-400 text-xs">AI-Perfected Agency · Est. 2000</span>
              </div>
              <div className="ml-auto flex gap-6">
                <div className="text-center">
                  <p className="text-[#ff6900] font-black text-xl">5k+</p>
                  <p className="text-gray-400 text-[10px] uppercase tracking-wider">Clients</p>
                </div>
                <div className="text-center">
                  <p className="text-[#ff6900] font-black text-xl">9yr</p>
                  <p className="text-gray-400 text-[10px] uppercase tracking-wider">Legacy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
