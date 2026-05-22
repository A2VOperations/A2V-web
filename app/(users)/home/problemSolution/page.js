"use client";

import React, { useState } from 'react';

const data = {
  web: {
    badge: 'Web Development',
    cards: [
      { icon: 'ti-device-mobile-off', problem: '"My site looks totally broken on phones."', solution: 'We build fully responsive websites that look perfect on every screen size.' },
      { icon: 'ti-clock-off', problem: '"My website takes forever to load — visitors just leave."', solution: 'We optimize speed with modern hosting, compressed assets & clean code.' },
      { icon: 'ti-world-off', problem: '"I don\'t even have a website. Customers can\'t find me."', solution: 'We design and launch your website end-to-end, from domain to go-live.' },
      { icon: 'ti-mood-empty', problem: '"My site looks old and embarrassing. I\'m losing trust."', solution: 'We redesign with a modern, professional look that builds instant credibility.' },
    ]
  },
  mkt: {
    badge: 'Digital Marketing',
    cards: [
      { icon: 'ti-ad-off', problem: '"I\'m spending on ads but getting zero sales."', solution: 'We audit your campaigns and rebuild them with proven targeting strategies.' },
      { icon: 'ti-search-off', problem: '"My competitors appear on Google. I\'m invisible."', solution: 'We do on-page & off-page SEO to push your business to page one.' },
      { icon: 'ti-heart-broken', problem: '"I post on social media but get no engagement or leads."', solution: 'We create data-driven content strategies that actually convert followers.' },
      { icon: 'ti-chart-off', problem: '"I have no idea if my marketing money is working."', solution: 'We set up analytics dashboards so you see exactly what\'s performing.' },
    ]
  },
  design: {
    badge: 'Graphic Design',
    cards: [
      { icon: 'ti-brush-off', problem: '"My logo looks amateurish. No one takes me seriously."', solution: 'We craft a professional logo and brand identity that builds instant trust.' },
      { icon: 'ti-layout-off', problem: '"My brand looks inconsistent across every platform."', solution: 'We build a full brand kit — colors, fonts, templates — so everything matches.' },
      { icon: 'ti-photo-off', problem: '"My social posts look unprofessional compared to competitors."', solution: 'We design scroll-stopping post templates tailored to your brand.' },
      { icon: 'ti-pencil-off', problem: '"I need a designer for every single thing — it\'s too slow."', solution: 'We create ready-to-edit template packs you can update yourself anytime.' },
    ]
  }
};

export default function ProblemSolutionPage() {
  const [activeTab, setActiveTab] = useState('web');

  const { badge, cards } = data[activeTab];

  const handleConsultation = () => {
    console.log("Help me understand which service I need for my business");
    alert("Help me understand which service I need for my business");
  };

  return (
    <div className="font-sans">
      <h2 className="sr-only">Problem and solution section for web development, digital marketing, and graphic design services</h2>
      
      <div className="text-center mb-12 flex flex-col items-center">
        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Sound Familiar?</span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 max-w-2xl">
          Pick your struggle — <span className="text-orange-500 italic">we've got the fix.</span>
        </h2>
      </div>

      <div className="flex gap-3 justify-center mb-12 flex-wrap">
        <button 
          className={`px-6 py-3 rounded-full border text-sm cursor-pointer flex items-center gap-2 transition-all duration-300 shadow-sm
            ${activeTab === 'web' 
              ? 'bg-orange-500 text-white border-orange-500 font-bold shadow-md shadow-orange-500/20' 
              : 'bg-white border-slate-200 text-slate-600 hover:border-orange-500 hover:text-orange-500'
            }`} 
          onClick={() => setActiveTab('web')}
        >
          <i className="ti ti-code text-lg" aria-hidden="true"></i> Web Development
        </button>
        <button 
          className={`px-6 py-3 rounded-full border text-sm cursor-pointer flex items-center gap-2 transition-all duration-300 shadow-sm
            ${activeTab === 'mkt' 
              ? 'bg-orange-500 text-white border-orange-500 font-bold shadow-md shadow-orange-500/20' 
              : 'bg-white border-slate-200 text-slate-600 hover:border-orange-500 hover:text-orange-500'
            }`} 
          onClick={() => setActiveTab('mkt')}
        >
          <i className="ti ti-speakerphone text-lg" aria-hidden="true"></i> Digital Marketing
        </button>
        <button 
          className={`px-6 py-3 rounded-full border text-sm cursor-pointer flex items-center gap-2 transition-all duration-300 shadow-sm
            ${activeTab === 'design' 
              ? 'bg-orange-500 text-white border-orange-500 font-bold shadow-md shadow-orange-500/20' 
              : 'bg-white border-slate-200 text-slate-600 hover:border-orange-500 hover:text-orange-500'
            }`} 
          onClick={() => setActiveTab('design')}
        >
          <i className="ti ti-palette text-lg" aria-hidden="true"></i> Graphic Design
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, index) => (
          <div key={index} className="group relative overflow-hidden bg-white border border-slate-100 flex flex-col shadow-sm hover:shadow-xl transition-all duration-500 p-8 rounded-2xl">
            <div className="inline-block text-[10px] font-black uppercase tracking-[0.25em] text-orange-500 mb-6 bg-orange-50 px-3 py-1.5 rounded-full self-start">
              {badge}
            </div>
            
            <div className="text-3xl mb-6 text-orange-500 group-hover:scale-110 transition-transform duration-300 origin-left">
              <i className={`ti ${c.icon}`} aria-hidden="true"></i>
            </div>
            
            <div className="text-slate-900 font-medium text-lg mb-6 leading-relaxed italic border-l-4 border-orange-500 pl-4">
              {c.problem}
            </div>
            
            <div className="mt-auto pt-4 border-t border-slate-50">
              <span className="text-[10px] font-black uppercase tracking-[0.25em] text-slate-400 mb-2 block">
                Our Solution
              </span>
              <div className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-700 transition-colors">
                {c.solution}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16 text-center p-10 bg-white border border-slate-100 shadow-sm rounded-2xl w-full max-w-3xl mx-auto relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-orange-400 to-orange-600"></div>
        <h3 className="text-2xl font-bold text-slate-900 mb-3">Not sure which service you need?</h3>
        <p className="text-base text-slate-500 mb-8">Let's talk about your business goals and find the perfect fit.</p>
        <button 
          className="inline-flex items-center gap-2 bg-slate-900 text-white px-8 py-4 rounded-full text-sm font-bold tracking-wider uppercase hover:bg-orange-500 transition-colors shadow-lg shadow-slate-900/20 hover:shadow-orange-500/30" 
          onClick={handleConsultation}
        >
          Get a free consultation <span className="text-lg leading-none">↗</span>
        </button>
      </div>
    </div>
  );
}
