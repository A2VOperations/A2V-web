"use client";

import React, { useState } from 'react';

const data = {
  info: {
    badge: 'Information Website',
    cards: [
      { icon: 'ti-info-circle', problem: '"No one knows about my services or business hours online."', solution: 'We build modern, informative websites that present your services and details clearly.' },
      { icon: 'ti-search', problem: '"My business doesn\'t show up when local clients search Google."', solution: 'We engineer highly SEO-optimized structures so you appear at the top of Google.' },
      { icon: 'ti-help', problem: '"Clients ask the same basic questions repeatedly over the phone."', solution: 'We design dedicated FAQ pages, forms, and resource sections to educate visitors.' },
      { icon: 'ti-map-pin', problem: '"Clients complain that our contact info or address is hard to find."', solution: 'We integrate visual contact details, direct click-to-call, and Google Maps interfaces.' },
    ]
  },
  portfolio: {
    badge: 'Portfolio Website',
    cards: [
      { icon: 'ti-briefcase', problem: '"I have amazing client work but my website looks cheap and outdated."', solution: 'We build stunning, visual-first portfolios to wow your potential clients.' },
      { icon: 'ti-layout-grid4', problem: '"My past case studies look cluttered and text-heavy to read."', solution: 'We structure elegant project galleries, dynamic sliders, and clean typography.' },
      { icon: 'ti-bolt', problem: '"My visual work and project photos take forever to load on mobile."', solution: 'We compression-bundle high-res media files and implement lazy-loading scripts.' },
      { icon: 'ti-face-smile', problem: '"I don\'t know how to cleanly showcase client reviews and feedback."', solution: 'We build custom animated testimonial carousels and brand highlights.' },
    ]
  },
  ecom: {
    badge: 'E-Commerce Website',
    cards: [
      { icon: 'ti-shopping-cart-x', problem: '"Too many users abandon shopping carts at the checkout page."', solution: 'We build seamless, 1-click checkout experiences to boost completed orders.' },
      { icon: 'ti-database-off', problem: '"My store inventory is out of sync across multiple warehouses."', solution: 'We integrate real-time API sync tunnels connecting your digital dashboard.' },
      { icon: 'ti-lock', problem: '"I\'m worried my customers\' payment gateway is insecure."', solution: 'We implement high-grade SSL certificates, HTTPS, and compliant Stripe gateways.' },
      { icon: 'ti-stats-down', problem: '"My Shopify store layout feels rigid and slows down during sales."', solution: 'We build custom liquid templates and headless frontends to scale transaction speed.' },
    ]
  },
  marketing: {
    badge: 'Digital Marketing',
    cards: [
      { icon: 'ti-announcement', problem: '"I have a great website but no one is visiting it."', solution: 'We execute targeted SEO and ad campaigns to drive high-intent traffic to your site.' },
      { icon: 'ti-stats-up', problem: '"I spend money on ads but don\'t see any return on investment."', solution: 'We optimize ad spend and tracking to ensure every dollar generates measurable revenue.' },
      { icon: 'ti-share', problem: '"My social media presence is inconsistent and doesn\'t engage my audience."', solution: 'We create data-driven content strategies that build brand loyalty and engagement.' },
      { icon: 'ti-email', problem: '"I struggle to turn website visitors into paying customers."', solution: 'We implement automated email funnels and retargeting strategies to close leads.' },
    ]
  }
};

export default function ProblemSolutionPage() {
  const [activeTab, setActiveTab] = useState('info');

  const { badge, cards } = data[activeTab];

  const handleConsultation = () => {
    console.log("Help me understand which service I need for my business");
    alert("Help me understand which service I need for my business");
  };

  return (
    <div className="font-sans mx-auto max-w-7xl">
      <h2 className="sr-only">Problem and solution section for information websites, portfolio websites, and e-commerce stores</h2>
      
      <div className="text-center mb-12 flex flex-col items-center">
        <span className="text-orange-500 font-bold uppercase tracking-widest text-xs mb-3 block">Sound Familiar?</span>
        <h2 className="text-4xl md:text-5xl font-black text-slate-900 max-w-2xl">
          Pick your struggle — <span className="text-orange-500 italic">we\&apos;ve got the fix.</span>
        </h2>
      </div>

      <div className="flex gap-3 justify-center mb-12 flex-wrap">
        <button 
          className={`px-6 py-3 rounded-full border text-sm cursor-pointer flex items-center gap-2 transition-all duration-300 shadow-sm
            ${activeTab === 'info' 
              ? 'bg-orange-500 text-white border-orange-500 font-bold shadow-md shadow-orange-500/20' 
              : 'bg-white border-slate-200 text-slate-600 hover:border-orange-500 hover:text-orange-500'
            }`} 
          onClick={() => setActiveTab('info')}
        >
          <i className="ti ti-info-circle text-lg" aria-hidden="true"></i> Information Website
        </button>
        <button 
          className={`px-6 py-3 rounded-full border text-sm cursor-pointer flex items-center gap-2 transition-all duration-300 shadow-sm
            ${activeTab === 'portfolio' 
              ? 'bg-orange-500 text-white border-orange-500 font-bold shadow-md shadow-orange-500/20' 
              : 'bg-white border-slate-200 text-slate-600 hover:border-orange-500 hover:text-orange-500'
            }`} 
          onClick={() => setActiveTab('portfolio')}
        >
          <i className="ti ti-briefcase text-lg" aria-hidden="true"></i> Portfolio Website
        </button>
        <button 
          className={`px-6 py-3 rounded-full border text-sm cursor-pointer flex items-center gap-2 transition-all duration-300 shadow-sm
            ${activeTab === 'ecom' 
              ? 'bg-orange-500 text-white border-orange-500 font-bold shadow-md shadow-orange-500/20' 
              : 'bg-white border-slate-200 text-slate-600 hover:border-orange-500 hover:text-orange-500'
            }`} 
          onClick={() => setActiveTab('ecom')}
        >
          <i className="ti ti-shopping-cart text-lg" aria-hidden="true"></i> E-Commerce Website
        </button>
        <button 
          className={`px-6 py-3 rounded-full border text-sm cursor-pointer flex items-center gap-2 transition-all duration-300 shadow-sm
            ${activeTab === 'marketing' 
              ? 'bg-orange-500 text-white border-orange-500 font-bold shadow-md shadow-orange-500/20' 
              : 'bg-white border-slate-200 text-slate-600 hover:border-orange-500 hover:text-orange-500'
            }`} 
          onClick={() => setActiveTab('marketing')}
        >
          <i className="ti ti-announcement text-lg" aria-hidden="true"></i> Digital Marketing
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
        <p className="text-base text-slate-500 mb-8">Let&apos;s talk about your business goals and find the perfect fit.</p>
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
