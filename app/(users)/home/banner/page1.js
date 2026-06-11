"use client"

import React from 'react'

const Banner = () => {
    return (
        <section className='relative w-full overflow-hidden py-32 mt-1'>
            {/* Grid Background */}
            <div className='absolute inset-0 z-190'>
                <div className='w-full h-10 bg-white absolute top-0 left-0 opacity-100'></div>
            </div>
            <div className='absolute inset-0 z-0' style={{
                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.09) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.09) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
            }}></div>

            {/* Glow Effects */}
            <div className='absolute top-0 right-10 w-[500px] h-[500px] bg-[#F57B23]/10 rounded-full blur-[120px] pointer-events-none' />
            <div className='absolute bottom-0 left-10 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none' />

            <div className='relative z-10 max-w-7xl mx-auto px-4'>
                <div className='flex flex-col justify-center items-center text-center'>

                    {/* Badge */}
                    <div className='flex items-center gap-2 rounded-full border border-white/10 bg-[#1C2030]/50 px-4 py-2 mb-10'>
                        <span className='h-2 w-2 rounded-full bg-[#10B981]'></span>
                        <p className='text-sm font-medium text-white/60 tracking-wide'>
                            IN <span className='text-white font-semibold'>India&apos;s #1</span> Digital Agency Since 2009
                        </p>
                    </div>

                    {/* Main Heading */}
                    <h1 className='text-5xl md:text-7xl lg:text-[5.5rem] font-bold text-black tracking-tight leading-[1.1] mb-8'>
                        We Build <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600'>Digital Products</span><br />
                        That Grow Business
                    </h1>

                    {/* Subheading */}
                    <p className='text-lg md:text-xl lg:text-[1.35rem] text-black/60 max-w-3xl font-light leading-relaxed mb-12'>
                        <span className='font-semibold text-black'>15+ years</span> of transforming ideas into powerful digital products. From <br className='hidden md:block' />
                        websites to apps — <span className='font-semibold text-black'>7000+ projects</span> delivered with <span className='font-semibold text-black'>1.2s load speeds</span>.
                    </p>

                    {/* Buttons */}
                    <div className='flex flex-col sm:flex-row gap-5 justify-center items-center'>
                        <button className='rounded-xl text-lg font-semibold px-8 py-4 bg-[#F57B23] hover:bg-[#EA580C] text-white transition-all shadow-[0_0_25px_rgba(245,123,35,0.3)]'>
                            Start Your Project &rarr;
                        </button>

                        <button className='rounded-xl text-lg font-semibold px-8 py-4 border border-white/10 bg-[#1C2030] hover:bg-[#252A3F] text-white transition-all flex items-center gap-3'>
                            <svg className="w-5 h-5 text-[#10B981]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
                            </svg>
                            Contact Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner