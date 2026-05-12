"use client";

import { useEffect, useState } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const radius = 26; // Slightly larger for a more "expensive" footprint
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      setVisible(scrollTop > 250);
      if (height > 0) {
        setScrollProgress((scrollTop / height) * 100);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-10 right-10 z-50 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
        visible 
          ? "opacity-100 translate-y-0 scale-100" 
          : "opacity-0 translate-y-20 scale-75 pointer-events-none"
      }`}
    >
      <div className="relative w-16 h-16 group">
        
        {/* Subtle Outer Glow (Luxury Aura) */}
        <div className="absolute inset-0 rounded-full bg-orange-500/10 blur-xl group-hover:bg-orange-500/20 transition-all duration-500" />

        {/* The Track (Glassmorphism) */}
        <svg className="absolute inset-0 w-full h-full -rotate-90">
          <circle
            cx="32"
            cy="32"
            r={radius}
            stroke="rgba(0,0,0,0.03)"
            strokeWidth="1.5"
            fill="rgba(255, 255, 255, 0.8)"
            className="backdrop-blur-md"
          />
          
          {/* Progress Ring (Fine Jewelry Style) */}
          <circle
            cx="32"
            cy="32"
            r={radius}
            stroke="url(#luxuryGradient)"
            strokeWidth="10.5"
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - (circumference * scrollProgress) / 100}
            strokeLinecap="round"
            className="transition-all duration-300 ease-out"
          />
          
          <defs>
            <linearGradient id="luxuryGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff4d00" /> {/* Deep Red */}
              <stop offset="100%" stopColor="#ff4d00" /> {/* Warm Gold-Orange */}
            </linearGradient>
          </defs>
        </svg>

        {/* The Core Button */}
        <button
          onClick={scrollToTop}
          className="absolute inset-[6px] rounded-full flex items-center justify-center 
                     bg-black text-white 
                     shadow-[0_10px_25px_-5px_rgba(0,0,0,0.3)] 
                     border-[2px] border-white/10
                     transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]
                     group-hover:inset-[4px]
                     group-hover:border-white/100 
                     group-hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.5)]
                     active:scale-90"
        >
          {/* Subtle Shine Reflection */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-5 h-5 transition-transform duration-500 group-hover:-translate-y-1.5"
          >
            <path d="M12 19V5M5 12l7-7 7 7" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

      </div>
    </div>
  );
}