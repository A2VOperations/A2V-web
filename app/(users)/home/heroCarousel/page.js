'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'

const herocarousel = () => {

  const slider = [
    { name: "7000+", sub: "Projects" },
    { name: "5000+", sub: "Clients" },
    { name: "50+", sub: "Locations" },
    { name: "500", sub: "Developers" },
    { name: "10", sub: "Industries" },
    { name: "5", sub: "Years" },
    { name: "100%", sub: "Satisfaction" },
  ]

  // Duplicate the items so the carousel has enough content to continuously loop
  const duplicatedSlider = [...slider, ...slider, ...slider, ...slider]

  return (
    <div className="w-full overflow-hidden relative z-10 border-y border-neutral-800/40">
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-inherit to-transparent z-20 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-inherit to-transparent z-20 pointer-events-none" />

      <div className="w-full">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={0}
          slidesPerView="auto"
          loop={true}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            reverseDirection: false,
          }}
          className="w-full ease-linear flex items-center"
        >
          {duplicatedSlider.map((item, index) => {
            return (
              <SwiperSlide key={index} className="!w-auto flex items-center py-2">
                <div className="flex flex-row justify-center items-center px-8">
                  <span className="text-[15px] md:text-[21px] font-bold text-orange-500 mr-1.5 tracking-wide">
                    {item.name}
                  </span>
                  <span className="text-[14px] md:text-[20px] text-neutral-400">
                    {item.sub}
                  </span>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <style>{`
        .swiper-wrapper {
          transition-timing-function: linear !important;
          align-items: center;
        }
      `}</style>
    </div>
  )
}

export default herocarousel