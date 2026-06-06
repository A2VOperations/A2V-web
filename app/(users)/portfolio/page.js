'use client';

import { useState } from 'react';
import { ChevronRight, Search, Menu, X, Eye, ChevronLeft, ArrowRight } from 'lucide-react';

import Image from 'next/image';
import { siteConfig } from '@/app/config';

const categories = ['All', 'Web Development', 'Graphic Designing', 'Digital Marketing'];

const projects = [
  {
    id: 3,
    title: 'Hamira',
    category: 'Graphic Designing',
    tag: 'BRANDING',
    desc: 'Devised premium graphics and informative infographics for a majestic brand.',
    bgColor: 'bg-orange-100',
    image: '/images/a2vgroups_preview_graphics_logo.png',
    previewImage: '/images/a2vgroups_preview_graphics.png',
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
    previewImage: '/images/a2vgroups_preview_webiste_mhc.png',
    gridClass: 'md:col-span-2 h-[290px]',
  },
  {
    id: 1,
    title: 'ShopinGo',
    category: 'Web Development',
    tag: 'E-COMMERCE',
    desc: 'A vibrant shoping platform designed for the ultimate browsing experience.',
    bgColor: 'bg-white',
    image: '/images/a2vgroups_preview_website3.png',
    previewImage: '/images/a2vgroups_preview_website3.png',
    gridClass: 'md:col-span-1 h-[290px]',
  },
  {
    id: 4,
    title: 'Quates',
    category: 'Graphic Designing',
    tag: 'UI/UX',
    desc: 'Modern graphics and tech-focused infographics for an emerging brand.',
    bgColor: 'bg-blue-50',
    image: '/images/a2vgroups_preview_graphics_logo2.png',
    previewImage: '/images/a2vgroups_preview_graphics2.jpg',
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
    previewImage: '/images/a2vgroups_previe_website_hif.png',
    gridClass: 'md:col-span-2 h-[350px]',
  },
  // {
  //   id: 6,
  //   title: 'Lotus Hospital',
  //   category: 'Web Development',
  //   tag: 'HEALTHCARE',
  //   desc: 'Next-gen hospital management and patient-care portal implementation.',
  //   bgColor: 'bg-blue-100',
  //   image: '/images/a2vgroups_lotus2.jpg',
  //   previewImage: '/images/a2vgroups_lotus2.jpg',
  //   gridClass: 'md:col-span-1 h-[350px]',
  // },
  {
    id: 6,
    title: 'Ridda Designs',
    category: 'Web Development',
    tag: 'UI/UX',
    desc: 'A website design and digital marketing agency.',
    bgColor: 'bg-blue-100',
    image: '/images/a2vgroups_preview_website_logo2.jpg',
    previewImage: '/images/a2vgroups_preview_website2.png',
    gridClass: 'md:col-span-1 h-[350px]',
  },
  {
    id: 7,
    title: 'Meipaly',
    category: 'Web Development',
    tag: 'WEB DESIGN',
    desc: 'A modern and stylish website design agency.',
    bgColor: 'bg-slate-100',
    image: '/images/a2vgroups_preview_website_logo.png',
    previewImage: '/images/a2vgroups_preview_website.png',
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
    previewImage: '/images/a2vgroups_preview_website_rawat.png',
    gridClass: 'md:col-span-2 h-[290px]',
  },
  {
    id: 9,
    title: 'BRB Works',
    category: 'Digital Marketing',
    tag: 'SEO',
    desc: 'SEO AND KEYWORD OPTIMIZATION for an emerging brand.',
    bgColor: 'bg-red-50',
    image: '/images/a2vgroups_preview_digital.jpg',
    previewImage: '/images/a2vgroups_preview_digital.jpg',
    gridClass: 'md:col-span-1 h-[290px]',
  },
  {
    id: 10,
    title: 'Pravah Enterprise',
    category: 'Digital Marketing',
    tag: 'Lead Generation',
    desc: 'Global lead generation for an emerging company.',
    bgColor: 'bg-red-50',
    image: '/images/a2vgroups_preview_digital2.jpg',
    previewImage: '/images/a2vgroups_preview_digital2.jpg',
    gridClass: 'md:col-span-1 h-[290px]',
  },
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredProject, setHoveredProject] = useState(null);
  
  // Lightbox State
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredProjects = projects.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          p.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const getPreviewLabel = (project) => {
    const cat = project.category.toLowerCase();
    if (cat.includes('web')) return 'Preview Website';
    if (cat.includes('design')) return 'Preview Design';
    if (cat.includes('marketing')) return 'Preview Results';
    return 'Preview Project';
  };

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(filteredProjects[index].previewImage || filteredProjects[index].image);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % filteredProjects.length;
    setCurrentIndex(nextIdx);
    setSelectedImage(filteredProjects[nextIdx].previewImage || filteredProjects[nextIdx].image);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length;
    setCurrentIndex(prevIdx);
    setSelectedImage(filteredProjects[prevIdx].previewImage || filteredProjects[prevIdx].image);
  };

  return (
    <div className="min-h-screen bg-white pt-12">
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #FC6600;
          border-radius: 10px;
        }
      `}</style>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 ">
        <div className="mb-12">
          <p className="text-orange-500 font-semibold text-xs sm:text-sm tracking-widest uppercase mb-4 sm:mb-6">
            ✦ Our Showroom
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight tracking-tighter">
            Portfolio of <br className="hidden md:block"/> <span className="text-orange-500">Success Stories</span>
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
              className={`group cursor-pointer relative overflow-hidden rounded-xl transition-all duration-500 shadow-sm hover:shadow-xl ${project.gridClass}`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
              onClick={() => openLightbox(index)}
            >
              {/* Background Image */}
              <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover blur-[2px] group-hover:blur-none transition-all duration-700"
                  unoptimized
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay for readability */}
                <div className={`absolute inset-0 ${project.bgColor} opacity-30 group-hover:opacity-10 transition-opacity`} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
              </div>

              {/* Hover Overlay - Premium Style */}
              <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-4 z-20">
                  <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white scale-50 group-hover:scale-100 transition-transform duration-500 delay-100 shadow-xl">
                    <Eye className="w-8 h-8" />
                  </div>
                  <span className="text-white font-black uppercase tracking-[0.2em] text-xs translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                    {getPreviewLabel(project)}
                  </span>
              </div>

              {/* Tag - Top Left */}
              <div className="absolute top-6 left-6 z-10">
                <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full uppercase">
                  {project.tag}
                </span>
              </div>

              {/* Project Info - Bottom Left */}
              <div className="absolute bottom-0 left-0 right-0 p-8 pt-20 z-10 bg-gradient-to-t from-black/80 to-transparent group-hover:opacity-0 transition-opacity duration-300">
                <p className="text-orange-500 text-[10px] font-bold uppercase tracking-widest mb-1">
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

      {/* Lightbox Overlay / Preview Gallery Mode */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[9999] bg-slate-950/95 flex items-center justify-center p-0 md:p-10 backdrop-blur-md transition-all animate-in fade-in duration-500"
          onClick={closeLightbox}
        >
          {/* Top Bar */}
          <div className="absolute top-0 left-0 right-0 h-20 px-8 flex items-center justify-between z-[10001] bg-gradient-to-b from-black/80 to-transparent">
             <div className="flex flex-col">
                <span className="text-orange-500 text-[10px] font-black uppercase tracking-[0.3em]">Portfolio Showcase</span>
                <h4 className="text-white font-black uppercase tracking-tight text-xl">{filteredProjects[currentIndex].title}</h4>
             </div>
             <button 
                className="text-white/70 hover:text-white transition-colors p-2 bg-white/10 rounded-full"
                onClick={closeLightbox}
              >
                <X className="w-6 h-6" />
              </button>
          </div>

          {/* Navigation */}
          <button 
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-all p-4 z-[10001] bg-white/5 rounded-full hover:bg-white/10 hidden md:block"
            onClick={prevImage}
          >
            <ChevronLeft className="w-10 h-10" />
          </button>

          <button 
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-all p-4 z-[10001] bg-white/5 rounded-full hover:bg-white/10 hidden md:block"
            onClick={nextImage}
          >
            <ChevronRight className="w-10 h-10" />
          </button>

          {/* Image Container - Scrollable */}
          <div 
            className="w-full h-full overflow-y-auto custom-scrollbar flex flex-col items-center pt-24 pb-24 px-4" 
            onClick={e => e.stopPropagation()}
          >
            <div className="relative w-full max-w-5xl bg-[#111] shadow-2xl border border-white/5">
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="w-full h-auto block"
              />
              
              {/* Info Overlay at bottom of image */}
              <div className="p-12 bg-white text-gray-900 w-full">
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div>
                       <span className="text-orange-500 text-xs font-black uppercase tracking-[0.2em] mb-2 block">
                          {filteredProjects[currentIndex].category} • {filteredProjects[currentIndex].tag}
                       </span>
                       <h3 className="text-4xl font-black uppercase tracking-tighter">
                          {filteredProjects[currentIndex].title}
                       </h3>
                    </div>
                 </div>
                 <p className="mt-8 text-gray-500 text-lg leading-relaxed max-w-3xl font-medium">
                    {filteredProjects[currentIndex].desc}
                 </p>
              </div>
            </div>

            {/* Pagination Hint */}
            <div className="mt-12 mb-12 text-center">
              <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">
                {currentIndex + 1} / {filteredProjects.length}
              </p>
              <div className="flex gap-4 mt-6 md:hidden">
                 <button onClick={prevImage} className="px-6 py-3 bg-white/10 text-white font-black text-xs uppercase tracking-widest">Prev</button>
                 <button onClick={nextImage} className="px-6 py-3 bg-orange-500 text-white font-black text-xs uppercase tracking-widest">Next</button>
              </div>
            </div>
          </div>
        </div>
      )}

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
    </div>
  );
}