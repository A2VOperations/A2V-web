'use client'
import React, { useRef } from 'react'

const stats = [
  { value: '12K+', label: 'Success Stories' },
  { value: '8K+', label: 'Trusted Clients' },
  { value: '80+', label: 'Global Presence' },
  { value: '500+', label: 'Industry Experts' },
  { value: '30+', label: 'Solutions Delivered' },
  { value: '10+', label: 'Years Strong' },
  { value: '99%', label: 'Customer Happiness' },
];

// Repeat enough times so the seam never shows
const repeated = [...stats, ...stats, ...stats, ...stats]

export default function HeroTicker() {
  const trackRef = useRef(null)

  const pause = () => { if (trackRef.current) trackRef.current.style.animationPlayState = 'paused' }
  const resume = () => { if (trackRef.current) trackRef.current.style.animationPlayState = 'running' }

  return (
    <div className="relative w-full overflow-hidden shadow-lg">
      {/* Fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-linear-to-r from-inherit to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-linear-to-l from-inherit to-transparent" />

      {/* Ticker track */}
      <div
        ref={trackRef}
        onMouseEnter={pause}
        onMouseLeave={resume}
        className="flex w-max animate-ticker2 "
      >
        {repeated.map((stat, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-row items-center justify-center gap-3 px-8 py-3.5 whitespace-nowrap ">
              <span className="text-lg font-bold leading-tight tracking-tight text-orange-500 md:text-xl ">
                {stat.value}
              </span>
              <span className="mt-0.5 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                {stat.label}
              </span>
            </div>
            {/* Divider — skip after the very last item */}
            {i < repeated.length - 1 && (
              <div className="my-auto h-7 w-px shrink-0 bg-neutral-800/40" />
            )}
          </React.Fragment>
        ))}
      </div>

      <style>{`
        @keyframes ticker2 {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-ticker2 {
          animation: ticker2 28s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  )
}