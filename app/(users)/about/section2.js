import React from "react";
import Image from "next/image";

const Section2 = () => {
  return (
    <section className=" py-20 px-6 md:px-12 lg:px-24 w-full">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
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
            <div className="absolute left-0 top-1 bottom-1 w-[6px] bg-gradient-to-b from-red-500 via-red-600 to-red-900/50 rounded-sm"></div>
            <h2 className="pl-8 text-[24px] md:text-[44px] lg:text-[48px] font-bold text-gray-800 leading-tight">
              Your Vision Our Expertise Your
              <br className="hidden md:block" /> Success Get Noticed Generate
              <br className="hidden md:block" />{" "}
              <span className="text-[#ff6900]">Leads Dominate.</span>
            </h2>
          </div>

          {/* Main Left Image */}
          <div className="w-full h-[300px] md:h-[450px] relative rounded-[32px] overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=1200&q=80"
              alt="Indian corporate team discussing in office"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col mt-4 lg:mt-0">
          {/* Top Images Row */}
          <div className="grid grid-cols-2 gap-6 mb-10">
            {/* Image 1 */}
            <div className="relative h-[200px] md:h-[260px] rounded-[32px] overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=600&q=80"
                alt="Indian woman working on tech blog"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <span className="px-3 py-1 bg-black/40 backdrop-blur-md text-white text-[10px] uppercase font-semibold tracking-wider rounded-full border border-white/20">
                  Tech Blog
                </span>
                <span className="px-3 py-1 bg-black/40 backdrop-blur-md text-white text-[10px] uppercase font-semibold tracking-wider rounded-full border border-white/20">
                  Trends
                </span>
              </div>
            </div>

            {/* Image 2 */}
            <div className="relative h-[200px] md:h-[260px] rounded-[32px] overflow-hidden group">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=600&q=80"
                alt="Indian team discussing trends"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 flex gap-2">
                <span className="px-3 py-1 bg-black/40 backdrop-blur-md text-white text-[10px] uppercase font-semibold tracking-wider rounded-full border border-white/20">
                  Tech Blog
                </span>
                <span className="px-3 py-1 bg-black/40 backdrop-blur-md text-white text-[10px] uppercase font-semibold tracking-wider rounded-full border border-white/20">
                  Trends
                </span>
              </div>
            </div>
          </div>

          {/* Description Text */}
          <p className="text-gray-600 text-sm md:text-base leading-[1.8] mb-12">
            Tempor commodo ullamcorper a lacus. Amet commodo nulla facilisi
            nullam. Molestie nunc non blandit massa enim nec. Felis bibendum ut
            tristique et egestas quis ipsum suspendisse ultrices. Eros in cursus
            turpis massa tincidunt dui.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-3xl font-bold mb-2">10k+</h3>
              <p className="text-[11px] text-gray-400 uppercase font-semibold tracking-wider">
                Completed Projects
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold  mb-2">15k</h3>
              <p className="text-[11px] text-gray-400 uppercase font-semibold tracking-wider">
                Satisfied Customers
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">10k+</h3>
              <p className="text-[11px] text-gray-400 uppercase font-semibold tracking-wider">
                Years Of Mastery
              </p>
            </div>
            <div>
              <h3 className="text-3xl font-bold mb-2">45+</h3>
              <p className="text-[11px] text-gray-400 uppercase font-semibold tracking-wider">
                Worldwide Honors
              </p>
            </div>
          </div>

          {/* Bottom Action Area */}
          <div className="flex flex-wrap items-center gap-8 md:gap-12 mt-auto">
            {/* Avatars */}
            <div className="flex -space-x-3">
              <img
                className="w-14 h-14 rounded-full border-4 border-[#111111] object-cover relative z-30"
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
                alt="Team member"
              />
              <img
                className="w-14 h-14 rounded-full border-4 border-[#111111] object-cover relative z-20"
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
                alt="Team member"
              />
              <img
                className="w-14 h-14 rounded-full border-4 border-[#111111] object-cover relative z-10"
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80"
                alt="Team member"
              />
            </div>

            {/* Play Button */}
            <div className="flex items-center gap-4 cursor-pointer group">
              <div className="w-16 h-16 rounded-full border border-gray-600 flex items-center justify-center group-hover:border-red-500 transition-colors duration-300">
                <svg
                  className="w-5 h-5 text-gray-600 group-hover:text-[#ff6900] transition-colors ml-1"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <span className=" text-sm font-semibold tracking-wider uppercase group-hover:text-[#ff6900] transition-colors">
                Watch Intro
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section2;
