'use client';

import { useState } from 'react';
import { ChevronRight, Search, Menu, X } from 'lucide-react';

import Image from 'next/image';
import { siteConfig } from '@/app/config';

const categories = ['All', 'Web Development', 'Graphic Designing', 'Digital Marketing'];

const projects = [
  {
    id: 3,
    title: 'Bikaner Sweets Burari',
    category: 'Graphic Designing',
    tag: 'BRANDING',
    desc: 'Devised premium graphics and informative infographics for a legacy confectionary brand.',
    bgColor: 'bg-orange-100',
    image: '/home/a2vgroups_bikaner.jpg',
    gridClass: 'md:col-span-1 md:row-span-2 h-[400px] md:h-full',
  },
  {
    id: 2,
    title: 'Mom Health Care',
    category: 'Web Development',
    tag: 'FULL SUITE',
    desc: 'Integrated web development, graphics, and digital marketing strategy for maternal wellness.',
    bgColor: 'bg-rose-50',
    image: '/images/a2vgroups_mhc.png',
    gridClass: 'md:col-span-2 h-[290px]',
  },
  {
    id: 1,
    title: 'ToysForKids',
    category: 'Web Development',
    tag: 'E-COMMERCE',
    desc: 'A vibrant kids shopping platform designed for the ultimate toy browsing experience.',
    bgColor: 'bg-white',
    image: '/images/toysforkids_logo.png',
    gridClass: 'md:col-span-1 h-[290px]',
  },
  {
    id: 4,
    title: 'AS Mobile',
    category: 'Graphic Designing',
    tag: 'UI/UX',
    desc: 'Modern graphics and tech-focused infographics for an emerging mobile retail leader.',
    bgColor: 'bg-blue-50',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    gridClass: 'md:col-span-1 h-[290px]',
  },
  {
    id: 5,
    title: 'Helping India Foundation',
    category: 'Web Development',
    tag: 'NGO',
    desc: 'A robust and compassionate digital home for nationwide humanitarian efforts.',
    bgColor: 'bg-green-50',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80',
    gridClass: 'md:col-span-2 h-[350px]',
  },
  {
    id: 6,
    title: 'Lotus Hospital',
    category: 'Web Development',
    tag: 'HEALTHCARE',
    desc: 'Next-gen hospital management and patient-care portal implementation.',
    bgColor: 'bg-blue-100',
    image: '/images/a2vgroups_lotus2.jpg',
    gridClass: 'md:col-span-1 h-[350px]',
  },
  {
    id: 7,
    title: 'Ras Care',
    category: 'Web Development',
    tag: 'INDUSTRIAL',
    desc: 'Clean and authoritative web presence for professional waterproofing services.',
    bgColor: 'bg-slate-100',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    gridClass: 'md:col-span-1 h-[290px]',
  },
  {
    id: 8,
    title: 'Rawat Band',
    category: 'Web Development',
    tag: 'EVENTS',
    desc: 'An festive and rhythmic website for premium wedding band services.',
    bgColor: 'bg-red-50',
    image: 'https://rawatband.com/assets/Utranchal%20Rawat%20Band6-DqcfuL_T.jpg',
    gridClass: 'md:col-span-2 h-[290px]',
  },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = projects.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-white pt-12">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="mb-12">
          <p className="text-orange-500 font-semibold text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6">
            ✦ Our Showroom
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight tracking-tighter">
            Portfolio of <br className="hidden md:block"/> <span className="text-orange-500">Success Stories.</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed">
            A curated anthology of our latest explorations across web development, creative
            design, and strategic marketing.
          </p>
        </div>

        {/* Filter & Search Section */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
          {/* Category Buttons */}
          <div className="flex flex-wrap gap-2 sm:gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-bold transition-all duration-300 text-sm sm:text-base ${
                  selectedCategory === category
                    ? 'bg-orange-500 text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full lg:max-w-sm group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400 group-focus-within:text-orange-500 transition-colors" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="block w-full pl-12 pr-4 py-3 border-2 border-gray-100 rounded-2xl bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-0 focus:border-orange-500 transition-all duration-300"
            />
          </div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-auto">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group cursor-pointer relative overflow-hidden rounded-[2rem] transition-all duration-500 shadow-sm hover:shadow-xl ${project.gridClass}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Background Image */}
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  unoptimized
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay for readability */}
                <div className={`absolute inset-0 ${project.bgColor} opacity-20 group-hover:opacity-10 transition-opacity`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              {/* Tag - Top Left */}
              <div className="absolute top-6 left-6 z-10">
                <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full uppercase">
                  {project.tag}
                </span>
              </div>

              {/* Project Info - Bottom Left */}
              <div className="absolute bottom-8 left-8 right-8 z-10">
                <p className="text-white/70 text-[10px] font-bold uppercase tracking-widest mb-1">
                  {project.category}
                </p>
                <h3 className="text-white text-2xl md:text-3xl font-bold mb-2 tracking-tight">
                  {project.title}
                </h3>
                <p className="text-white/80 text-sm font-medium leading-relaxed max-w-xs">
                  {project.desc}
                </p>
              </div>

              {/* Hover Effect Light */}
              <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="py-16 text-center">
            <p className="text-gray-500 text-base sm:text-lg">
              No projects found in this category.
            </p>
          </div>
        )}
      </section>

      {/* Collaborative Brands Section */}
      <section className=" text-black pt-24 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* Header */}
          <div className="flex flex-col items-center mb-16">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[14px] font-black tracking-[0.3em] text-gray-500  uppercase">Collaborative Brands</span>
              <div className="w-12 h-px bg-gray-800" />
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center tracking-tight pt-10">
              Our Digital <span className="text-orange-500">Brand</span> Associates
            </h2>
          </div>

          {/* Brands Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {[
              { name: 'ToysForKids', style: 'font-serif italic tracking-tight' },
              { name: 'Mom Health Care', style: 'font-sans font-black tracking-tighter uppercase' },
              { name: 'Bikaner Sweets', style: 'font-serif font-medium tracking-[0.2em] uppercase' },
              { name: 'AS Mobile', style: 'font-sans font-extralight tracking-[0.3em] uppercase' },
              { name: 'Helping India', style: 'font-serif font-bold tracking-normal' },
              { name: 'Lotus Hospital', style: 'font-sans font-semibold tracking-[0.15em] uppercase' },
              { name: 'Ras Care', style: 'font-serif italic font-light tracking-wide' },
              { name: 'Rawat Band', style: 'font-sans font-black tracking-[0.25em] uppercase' },
              { name: 'Max', style: 'font-serif font-black text-2xl tracking-tighter' },
              { name: 'Arogya', style: 'font-sans font-medium tracking-[0.4em] uppercase text-[24px]' },
            ].map((brand) => (
              <div 
                key={brand.name}
                className="bg-[#19272B] border border-gray-800 rounded-xl p-6 flex items-center justify-center h-28 hover:border-orange-500/50 transition-all duration-300 group shadow-2xl"
              >
                <span className={`text-gray-300 text-2xl leading-none group-hover:text-white transition-colors text-center ${brand.style}`}>
                  {brand.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}