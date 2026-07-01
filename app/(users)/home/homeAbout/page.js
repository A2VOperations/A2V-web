"use client";

import React, { useState } from 'react';
import { ShieldCheck, Play, CheckCircle2, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function HomeAbout() {
  const [activeTab, setActiveTab] = useState('commitment');
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  const tabContent = {
    mission: {
      description: "To empower businesses with innovative technology, automation, and strategic branding solutions that drive sustainable growth and long-term success.",
      list: [
        "Build powerful digital platforms for scalability.",
        "Strengthen brand presence and visual identity.",
        "Automate business processes for smarter operations.",
        "Generate more leads and scale operations efficiently."
      ]
    },
    vision: {
      description: "To become a trusted global technology and digital solutions partner, helping businesses transform digitally and build powerful brands in the modern business world.",
      list: [
        "Provide end-to-end business solutions under one roof.",
        "Help startups, SMEs, and growing companies build a strong digital foundation.",
        "Launch our upcoming technology academy to empower students and professionals.",
        "Deliver business solutions that create real growth and long-term value."
      ]
    },
    commitment: {
      description: "At A2V Groups, our goal is simple: Help businesses grow smarter, faster, and stronger with the right technology and strategy.",
      list: [
        "Website, Web App & SaaS Product Development.",
        "CRM & ERP Business Automation.",
        "Digital Marketing & Growth Strategy.",
        "Graphic Design & Professional Printing Solutions."
      ]
    }
  };

  return (

    <section className="relative isolate overflow-hidden w-full py-20">
      {/* Background Decorative Elements - Preserved from previous iteration */}
      {/* <div className="absolute top-10 right-10 -z-10 hidden lg:block">
        <div className="grid grid-cols-6 gap-3">
          {[...Array(36)].map((_, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-orange-300 animate-pulse"
              style={{ animationDelay: `${i * 0.1}s`, animationDuration: '3s' }}
            />
          ))}
        </div>
      </div> */}

      <div className="absolute top-40 right-40 w-24 h-24 border border-orange-200 rounded-full -z-10 hidden lg:block animate-bounce" style={{ animationDuration: '6s' }}></div>

      {/* <div className="absolute -bottom-20 -right-20 -z-10 opacity-50 animate-pulse" style={{ animationDuration: '5s' }}>
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-orange-500"
            style={{
              width: `${200 + i * 40}px`,
              height: `${200 + i * 40}px`,
              right: 0,
              bottom: 0,
            }}
          />
        ))}
      </div> */}

      {/* <div className="absolute top-20 left-1/4 text-orange-300 text-4xl font-light -z-10 hidden lg:block animate-spin" style={{ animationDuration: '10s' }}>
        ×
      </div> */}

      {/* <svg
        width="30"
        height="30"
        viewBox="0 0 24 24"
        className="absolute top-50 left-20 -z-10 hidden lg:block animate-spin"
        style={{ animationDuration: '15s', animationDirection: 'reverse' }}
      >
        <path
          d="M6 6L18 18M18 6L6 18"
          stroke="#FDBA74"
          strokeWidth="2"
        />
      </svg> */}

      {/* <svg
        className="absolute top-0 left-0 bottom-20 -z-10 opacity-50 animate-pulse"
        width="700"
        height="200"
        viewBox="0 0 700 200"
        style={{ animationDuration: '7s' }}
      >
        {[0, 20, 40, 60, 80].map((offset) => (
          <path
            key={offset}
            d={`M0 ${100 + offset}
          C150 ${40 + offset},
          300 ${160 + offset},
          450 ${100 + offset}
          S700 ${40 + offset},
          700 ${100 + offset}`}
            fill="none"
            stroke="#FDD5B1"
            strokeWidth="1"
          />
        ))}
      </svg> */}

      {/* <div className="absolute -left-22 -bottom-12 w-96 h-96 rounded-full bg-orange-200/50 opacity-80 -z-10 animate-pulse" style={{ animationDuration: '8s' }}></div> */}

      {/* Main Content Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-12 items-center">
          {/* Left Side: Images */}
          <div className="relative lg:pr-8 ">
            {/* Dotted pattern */}
            <div className="absolute -bottom-20 -left-10 w-48 h-48 -z-10 opacity-30 animate-move-lr" style={{
              backgroundImage: 'radial-gradient(#9ca3af 2px, transparent 2px)',
              backgroundSize: '16px 16px'
            }}></div>

            <div className="absolute -bottom-5 -left-50 w-24 h-48 -z-10 opacity-80 rounded-r-full animate-move-lr" style={{
              backgroundImage: 'radial-gradient(#374151 2px, transparent 2px)',
              backgroundSize: '16px 16px',
              backgroundPosition: '0 0'
            }}></div>

            {/* Orange bar at the top right */}
            <div className="absolute top-1 right-2 w-6 h-80 bg-orange-500 -z-10 animate-move-ud"></div>

            {/* Main large image */}
            <div className="rounded-2xl overflow-hidden shadow-lg border-2 border-white">
              <Image src="/home/about-pho.png" alt="About" width={450} height={450} className="w-full object-cover h-[450px] lg:h-[450px] " />
            </div>

            {/* Overlapping smaller image */}
            <div className="absolute -bottom-35 -right-8 w-3/5 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.15)] border-8 border-white bg-white z-10">
              <Image src="/home/home-About.png" alt="Team" width={300} height={300} className="w-full object-cover h-[200px] lg:h-[280px]" />


            </div>
            {/* Play Button Overlay */}
            <div className="absolute top-100 left-60 z-50 flex items-center justify-center">
              <div className="relative group flex items-center justify-center">
                {/* Glowing animated rings */}
                <div className="absolute w-16 h-16 rounded-full bg-orange-500/40 animate-ping" style={{ animationDuration: '2.5s' }}></div>
                <div className="absolute w-20 h-20 rounded-full bg-orange-400/20 animate-pulse group-hover:scale-125 transition-transform duration-500"></div>

                {/* The main button */}
                <div
                  onClick={() => setIsVideoOpen(true)}
                  className="relative w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-[0_0_20px_rgba(249,115,22,0.5)] cursor-pointer group-hover:scale-110 group-hover:shadow-[0_0_40px_rgba(249,115,22,0.8)] transition-all duration-300 z-10 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-linear-to-tr from-orange-100 to-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-inner group-hover:bg-transparent transition-all duration-300">
                    <Play className="w-6 h-6 text-orange-500 ml-1 fill-current group-hover:text-orange-600 filter drop-shadow-md transition-colors duration-300" />
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute top-10 -right-10 bg-white py-5 px-6 rounded-[3.5rem] shadow-[0_10px_40px_rgba(0,0,0,0.08)] flex items-center gap-4 border-r-4 border-b-4 border-orange-500 z-20 w-max md:flex">
              <div className="w-12 h-12 rounded-full border-2 border-gray-800 flex items-center justify-center relative">
                <ShieldCheck className="text-gray-800 w-6 h-6" />
              </div>
              <div >
                <div className="text-2xl font-black text-gray-900 leading-none mb-1">4,000+</div>
                <div className="text-lg font-bold text-gray-800 uppercase tracking-wider">Satisfied Client</div>
              </div>
            </div>
          </div>

          {/* Right Side: Text */}
          <div className="mt-24 lg:mt-0 lg:pl-4">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-orange-500 font-bold uppercase text-sm tracking-wider">About A2V Groups</span>
              <div className="h-0.5 w-12 bg-orange-500"></div>
            </div>

            <h2 className="text-3xl lg:text-3xl font-extrabold text-[#1A1F2C] mb-3 leading-tight uppercase">
              Transforming Businesses Through Smart Technology & Powerful Branding
            </h2>

            <p className="text-orange-500 text-lg italic font-medium mb-3">
              &quot;Every business deserves innovative digital solutions, strong brand identity, and streamlined operations to compete in today’s fast-changing market.&quot;
            </p>

            <p className="text-gray-600 mb-5 leading-relaxed">
              Founded by Ravinder Singh, A2V Groups provides end-to-end IT solutions. By combining technology, automation, marketing strategy, and creative branding, we help startups, SMEs, and growing companies build a strong digital foundation.
            </p>

            <div className="flex flex-wrap gap-3 mb-5">
              <button
                onClick={() => setActiveTab('mission')}
                className={`px-6 py-3 rounded-lg font-bold text-sm transition-all ${activeTab === 'mission' ? 'bg-orange-500 text-white shadow-[0_4px_14px_0_rgba(249,115,22,0.39)]' : 'bg-white text-gray-900 shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] hover:shadow-md'}`}>
                OUR MISSION
              </button>
              <button
                onClick={() => setActiveTab('vision')}
                className={`px-6 py-3 rounded-lg font-bold text-sm transition-all ${activeTab === 'vision' ? 'bg-orange-500 text-white shadow-[0_4px_14px_0_rgba(249,115,22,0.39)]' : 'bg-white text-gray-900 shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] hover:shadow-md'}`}>
                OUR VISION
              </button>
              <button
                onClick={() => setActiveTab('commitment')}
                className={`px-6 py-3 rounded-lg font-bold text-sm transition-all ${activeTab === 'commitment' ? 'bg-orange-500 text-white shadow-[0_4px_14px_0_rgba(249,115,22,0.39)]' : 'bg-white text-gray-900 shadow-[0_4px_14px_0_rgba(0,0,0,0.05)] hover:shadow-md'}`}>
                OUR COMMITMENT
              </button>
            </div>

            <p className="text-gray-600 mb-5 leading-relaxed">
              {tabContent[activeTab].description}
            </p>

            <ul className="flex flex-col gap-3 mb-6">
              {tabContent[activeTab].list.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 min-w-[24px] h-[24px] bg-orange-500 rounded-full flex items-center justify-center text-white">
                    <CheckCircle2 size={16} strokeWidth={3} />
                  </div>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>

            <Link href={"/about"} className="px-8 py-3.5 bg-orange-500 text-white rounded-full font-bold hover:bg-orange-600 transition-colors shadow-[0_8px_20px_-6px_rgba(249,115,22,0.5)]">
              Read More
            </Link>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/80 px-4">
          <div className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl">
            {/* Close Button */}
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 p-2 bg-black/50 hover:bg-black text-white rounded-full transition-colors"
              aria-label="Close video"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Video Element */}
            <video
              className="w-full h-auto max-h-[80vh]"
              controls
              autoPlay
              playsInline
              onClick={(e) => e.stopPropagation()}
            >
              <source src="/home/Video Project 2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          {/* Backdrop click to close */}
          <div
            className="absolute inset-0 -z-10 cursor-pointer"
            onClick={() => setIsVideoOpen(false)}
          />
        </div>
      )}
    </section>
  );
}
