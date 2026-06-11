"use client";

import React from 'react';
import CountUp from 'react-countup';
import { Code, PenTool, Megaphone, Headphones, Users, Briefcase, Trophy, ShieldCheck } from 'lucide-react';
import Image from 'next/image';

export default function HomeAbout() {
  return (

    <section className="relative isolate overflow-hidden w-full py-20">
      {/* Background Decorative Elements - Preserved from previous iteration */}
      <div className="absolute top-10 right-10 -z-10 hidden lg:block">
        <div className="grid grid-cols-6 gap-3">
          {[...Array(36)].map((_, i) => (
            <span
              key={i}
              className="w-1.5 h-1.5 rounded-full bg-orange-300 animate-pulse"
              style={{ animationDelay: `${i * 0.1}s`, animationDuration: '3s' }}
            />
          ))}
        </div>
      </div>

      <div className="absolute top-40 right-40 w-24 h-24 border border-orange-200 rounded-full -z-10 hidden lg:block animate-bounce" style={{ animationDuration: '6s' }}></div>

      <div className="absolute -bottom-20 -right-20 -z-10 opacity-50 animate-pulse" style={{ animationDuration: '5s' }}>
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
      </div>

      <div className="absolute top-20 left-1/4 text-orange-300 text-4xl font-light -z-10 hidden lg:block animate-spin" style={{ animationDuration: '10s' }}>
        ×
      </div>

      <svg
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
      </svg>

      <svg
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
      </svg>

      <div className="absolute -left-22 -bottom-12 w-96 h-96 rounded-full bg-orange-200/50 opacity-80 -z-10 animate-pulse" style={{ animationDuration: '8s' }}></div>

      {/* Main Content Container */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-12 items-center">
          {/* Left Side: Text and Services */}
          <div className='col-span-3'>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-orange-500 font-bold tracking-wider text-sm uppercase">About Us</span>
              <div className="h-0.5 w-12 bg-orange-500 rounded-full"></div>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-[2.75rem] font-bold text-gray-900 mb-6 leading-[1.2]">
              We Build Digital Solutions <br /> That Drive <span className="bg-orange-500 text-white px-2">Real Results</span>
            </h2>

            <p className="text-gray-600 mb-10 text-md max-w-xl leading-relaxed">
              At A2V Groups, we help businesses grow online with powerful websites,
              creative designs, and result-driven digital marketing strategies.
              Our team combines technology, creativity, and data to build solutions
              that not only look great — but perform even better.
            </p>

            {/* Services Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-y-10 gap-x-6">
              <div className="flex flex-col gap-1">
                <div className="text-orange-500 mb-1">
                  <Code size={36} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-gray-900 text-md">Web Development</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Fast, secure & scalable web solutions</p>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-orange-500 mb-1">
                  <PenTool size={36} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-gray-900 text-md">Graphic Designing</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Creative designs that captivate your brand</p>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-orange-500 mb-1">
                  <Megaphone size={36} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-gray-900 text-md">Digital Marketing</h3>
                <p className="text-gray-500 text-sm leading-relaxed">Smart strategies that grow your business</p>
              </div>
              <div className="flex flex-col gap-1">
                <div className="text-orange-500 mb-1">
                  <Headphones size={36} strokeWidth={1.5} />
                </div>
                <h3 className="font-bold text-gray-900 text-md">Dedicated Support</h3>
                <p className="text-gray-500 text-sm leading-relaxed">We&apos;re here to support you, always</p>
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="col-span-2 relative mt-12 lg:mt-0">
            {/* Orange rounded background shape (acting as solid shadow) */}
            <div className="absolute inset-0 bg-orange-500 rounded-4xl rounded-tr-[4rem] -z-10 translate-x-6 -translate-y-6"></div>

            {/* Main Image */}
            <div className="relative rounded-4xl overflow-hidden shadow-2xl aspect-4/3 bg-gray-100">
              <Image src="/home/homeAbout.png" alt="Team Collaboration" width={500} height={500} className="w-full h-full object-cover" />
            </div>

            {/* Experience Badge */}
            <div className="absolute top-[10%] -left-8 bg-white rounded-2xl shadow-xl flex flex-col items-center justify-center w-32 h-32 border border-gray-50 z-10">
              <span className="text-4xl font-bold text-orange-500 mb-2">10+</span>
              <span className="text-gray-600 text-xs uppercase tracking-wider text-center font-semibold">Years of<br />Experience</span>
            </div>
          </div>
        </div>

        {/* Stats Banner */}
        <div className="mt-10 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-8 lg:p-8 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-1 divide-y-0 lg:divide-x divide-gray-300">
            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 lg:justify-center">
              <div className="text-orange-500">
                <Users size={40} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[2rem] font-bold text-orange-500 flex items-center leading-none mb-1">
                  <CountUp end={150} duration={2.5} enableScrollSpy scrollSpyOnce />+
                </span>
                <span className="text-gray-600 text-sm font-medium">Happy Clients</span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 lg:justify-center">
              <div className="text-orange-500">
                <Briefcase size={40} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[2rem] font-bold text-orange-500 flex items-center leading-none mb-1">
                  <CountUp end={250} duration={2.5} enableScrollSpy scrollSpyOnce />+
                </span>
                <span className="text-gray-600 text-sm font-medium">Projects Completed</span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 lg:justify-center">
              <div className="text-orange-500">
                <Trophy size={40} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[2rem] font-bold text-orange-500 flex items-center leading-none mb-1">
                  <CountUp end={98} duration={2.5} enableScrollSpy scrollSpyOnce />%
                </span>
                <span className="text-gray-600 text-sm font-medium">Client Satisfaction</span>
              </div>
            </div>

            <div className="flex flex-col lg:flex-row items-start lg:items-center gap-5 lg:justify-center">
              <div className="text-orange-500">
                <ShieldCheck size={40} strokeWidth={1.5} />
              </div>
              <div className="flex flex-col">
                <span className="text-[2rem] font-bold text-orange-500 flex items-center leading-none mb-1">
                  24/7
                </span>
                <span className="text-gray-600 text-sm font-medium">Support Available</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
