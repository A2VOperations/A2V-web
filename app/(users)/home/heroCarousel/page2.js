'use client'
import React, { useRef } from 'react'

const stats = [
  { value: '7,000+', label: 'Projects' },
  { value: '5,000+', label: 'Clients' },
  { value: '50+', label: 'Locations' },
  { value: '500', label: 'Developers' },
  { value: '10', label: 'Industries' },
  { value: '5', label: 'Years' },
  { value: '100%', label: 'Satisfaction' },
]

// Repeat enough times so the seam never shows
const repeated = [...stats, ...stats, ...stats, ...stats]

export default function HeroTicker() {
  const trackRef = useRef(null)

  const pause = () => { if (trackRef.current) trackRef.current.style.animationPlayState = 'paused' }
  const resume = () => { if (trackRef.current) trackRef.current.style.animationPlayState = 'running' }

  return (
    <div className="relative w-full overflow-hidden shadow-lg">
      {/* Fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-[inherit] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-[inherit] to-transparent" />

      {/* Ticker track */}
      <div
        ref={trackRef}
        onMouseEnter={pause}
        onMouseLeave={resume}
        className="flex w-max animate-ticker "
      >
        {repeated.map((stat, i) => (
          <React.Fragment key={i}>
            <div className="flex flex-row items-center justify-center gap-3 px-8 py-3.5 whitespace-nowrap ">
              <span className="text-lg font-medium leading-tight tracking-tight text-orange-500 md:text-xl bg-white font-bold">
                {stat.value}
              </span>
              <span className="mt-0.5 text-[10px] font-bold uppercase tracking-widest text-neutral-500">
                {stat.label}
              </span>
            </div>
            {/* Divider — skip after the very last item */}
            {i < repeated.length - 1 && (
              <div className="my-auto h-7 w-px flex-shrink-0 bg-neutral-800/40" />
            )}
          </React.Fragment>
        ))}
      </div>

      <style>{`
        @keyframes ticker {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-ticker {
          animation: ticker 28s linear infinite;
          will-change: transform;
        }
      `}</style>
    </div>
  )
}