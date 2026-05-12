import React from "react";
import Image from "next/image";

const timelineData = [
  {
    year: "2000",
    title: (
      <>
        Establishment &<br /> Foundation
      </>
    ),
    isActive: true,
  },
  {
    year: "2005",
    title: "Early Growth & Expansion",
    isActive: false,
  },
  {
    year: "2010",
    title: "First Major Milestone",
    isActive: false,
  },
  {
    year: "2018",
    title: "Global Reach Setup",
    isActive: false,
  },
  {
    year: "2023",
    title: "Industry Leadership",
    isActive: false,
  },
];

const Section3 = () => {
  return (
    <section className="relative bg-[#19272b] py-24 w-full overflow-hidden">
      {/* Faint Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1920&q=80"
          alt="Office Background"
          fill
          className="object-cover opacity-[0.07]"
        />
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 mb-15">
          {/* Left Column: Text Content */}
          <div className="flex flex-col justify-center">
            {/* Subheading */}
            <div className="flex items-center gap-4 text-gray-300 text-xs font-semibold tracking-[0.2em] uppercase mb-6">
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
            <h2 className="text-[36px] md:text-[44px] lg:text-[48px] font-bold text-white leading-[1.2] mb-6">
              Your Gateway To{" "}
              <span className="text-[#ff6900]">
                Online
                <br className="hidden md:block" /> Excellence
              </span>{" "}
              Dream Big In Pixels.
            </h2>

            {/* Paragraph */}
            <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-10 max-w-lg">
              Lectus Vestibulum Mattis Ullamcorper Velit Sed Ullamcorper. Ac Ut
              Consequat Semper Viverra Nam. Morbi Tristique Senectus Et Netus Et
              Malesuada Fames. Diam Maecenas Ultricies Mi Eget.
            </p>

            {/* Button */}
            <div>
              <button className="bg-[#ff6900] hover:bg-red-600 text-white px-8 py-3.5 rounded-full font-semibold text-sm transition-colors duration-300 shadow-lg shadow-red-500/30">
                Know More
              </button>
            </div>
          </div>

          {/* Right Column: Image & Badge */}
          <div className="relative mt-12 lg:mt-0">
            {/* Main Right Image */}
            <div className="relative h-[400px] md:h-[480px] w-full rounded-[32px] overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80"
                alt="Indian professionals working"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>

            {/* Circular Badge */}
            <div className="absolute -bottom-10 -left-6 md:-left-12 w-[140px] h-[140px] bg-[#1a1a1a] rounded-full flex items-center justify-center p-2 z-20">
              <div className="absolute inset-0 animate-[spin_12s_linear_infinite]">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full overflow-visible"
                >
                  <path
                    id="circlePath"
                    d="M 10, 50 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                    fill="transparent"
                  />
                  <text className="text-[10px] font-bold fill-white uppercase tracking-[0.16em]">
                    <textPath href="#circlePath" startOffset="0%">
                      Get In Touch • Get In Touch • Get In Touch •
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className="w-16 h-16 bg-[#ff6900] rounded-full flex items-center justify-center z-10 shadow-lg shadow-red-500/40 hover:scale-110 transition-transform cursor-pointer">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M5 19L19 5M19 5H8M19 5V16"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="relative h-[200px] mt-8 w-full max-w-5xl">
          {/* Horizontal Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-gray-600 -translate-y-1/2 z-0"></div>

          {/* Timeline Nodes */}
          <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-between items-center z-10 w-full px-2 md:px-8">
            {timelineData.map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center justify-center group cursor-pointer"
              >
                <div className="absolute bottom-full mb-5 flex flex-col items-center">
                  <span className="text-white font-bold text-lg tracking-wide group-hover:text-[#ff6900] transition-colors">
                    {item.year}
                  </span>
                </div>
                <div
                  className={`rounded-full ring-[6px] ring-[#1a1a1a] transition-all ${
                    item.isActive
                      ? "w-[18px] h-[18px] bg-[#ff6900] shadow-[0_0_15px_rgba(239,68,68,0.5)] group-hover:scale-110"
                      : "w-[14px] h-[14px] bg-white group-hover:bg-[#ff6900] group-hover:shadow-[0_0_15px_rgba(239,68,68,0.5)]"
                  }`}
                ></div>
                <div
                  className={`absolute top-full mt-6 flex flex-col items-center w-[160px] text-center ${
                    item.isActive
                      ? ""
                      : "opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 pointer-events-none"
                  }`}
                >
                  <span
                    className={
                      item.isActive
                        ? "text-white text-sm font-semibold"
                        : "text-gray-300 text-sm font-medium"
                    }
                  >
                    {item.title}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
