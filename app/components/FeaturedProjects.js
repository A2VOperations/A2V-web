"use client";

import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function FeaturedProjects({ 
  projects = [], 
  title = "Featured Projects",
  subtitle = "Explore Recent Works",
  variant = "default" // "default" or "gallery"
}) {
  const sliderRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!projects || projects.length === 0) {
    return null;
  }

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(projects[index].image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  const nextImage = (e) => {
    e.stopPropagation();
    const nextIdx = (currentIndex + 1) % projects.length;
    setCurrentIndex(nextIdx);
    setSelectedImage(projects[nextIdx].image);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + projects.length) % projects.length;
    setCurrentIndex(prevIdx);
    setSelectedImage(projects[prevIdx].image);
  };

  // Close on ESC
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: variant === "gallery" ? 4 : 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    touchThreshold: 10,
    touchMove: true,
    draggable: true,
    autoplay: variant !== "gallery",
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      }
    ],
    appendDots: dots => (
      <div>
        <ul className="flex justify-center gap-2 mt-12 custom-slick-dots"> {dots} </ul>
      </div>
    ),
    customPaging: i => (
      <div className="w-3 h-3 rounded-full border-2 border-[#1A1A1A] transition-colors duration-300"></div>
    )
  };

  return (
    <section className="py-24 bg-[#F8F9FA] px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <style dangerouslySetInnerHTML={{__html: `
          .custom-slick-dots li {
            margin: 0;
            width: auto;
            height: auto;
          }
          .custom-slick-dots li.slick-active div {
            border-color: #FC6600;
          }
          .slick-track {
            display: flex !important;
            gap: 0;
          }
          .slick-slide {
            height: inherit !important;
            display: flex !important;
            justify-content: center;
          }
          .slick-slide > div {
            width: 100%;
            display: flex;
          }
          .custom-scrollbar::-webkit-scrollbar {
            width: 6px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #FC6600;
            border-radius: 10px;
          }
        `}} />
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <span className="text-[#FC6600] font-bold text-sm uppercase tracking-wide block mb-2">
              {subtitle}
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-[#1A1A1A]">
              {title}
            </h2>
          </div>
          
          <div className="flex gap-2 mt-6 md:mt-0">
            <button 
              onClick={() => sliderRef.current?.slickPrev()}
              className="bg-[#FC6600] text-white px-6 py-2.5 flex items-center gap-2 font-bold hover:bg-orange-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Prev
            </button>
            <button 
              onClick={() => sliderRef.current?.slickNext()}
              className="bg-[#1A1A1A] text-white px-4 py-2.5 flex items-center justify-center hover:bg-black transition-colors"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <Slider ref={sliderRef} {...settings}>
          {projects.map((project, index) => {
            // Logic to split title if it has a number at the end
            const titleParts = project.title.split(/( \d+)$/);
            
            return (
              <div key={index} className="px-4">
                <div 
                  className={`bg-white rounded-none overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group cursor-pointer h-full flex flex-col`}
                  onClick={() => openLightbox(index)}
                >
                  <div className={`relative ${variant === 'gallery' ? 'aspect-square' : 'h-[300px]'} overflow-hidden`}>
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                       <Eye className="text-white w-12 h-12" />
                    </div>
                  </div>
                  
                  <div className={`p-8 flex-1 flex flex-col items-center text-center`}>
                    {variant !== 'gallery' && (
                      <p className="text-[#FC6600] text-sm mb-3">
                        {project.categories.join(" , ")}
                      </p>
                    )}
                    <h3 className={`${variant === 'gallery' ? 'text-xl font-black' : 'text-2xl font-bold'} text-[#1A1A1A] mb-4 uppercase tracking-tight`}>
                      {titleParts[0]}
                      {titleParts[1] && <span className="block mt-1">{titleParts[1].trim()}</span>}
                    </h3>
                    
                    {variant !== 'gallery' && project.description && (
                      <p className="text-gray-500 text-[15px] leading-relaxed mb-8 line-clamp-3 min-h-[68px]">
                        {project.description}
                      </p>
                    )}

                    {/* Show "Read More" button even in gallery mode if desired */}
                    <div className="mt-auto pt-6 border-t border-gray-100 w-full flex justify-center">
                      <div className="flex items-center gap-3 text-[#1A1A1A] font-black hover:text-[#FC6600] transition-colors text-sm uppercase tracking-widest">
                        <div className="w-8 h-8 rounded-full bg-[#FC6600] flex items-center justify-center text-white">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                        Explore More
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      {/* Lightbox Overlay */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[9999] bg-black/95 flex items-center justify-center p-4 backdrop-blur-sm transition-all animate-in fade-in duration-300"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-8 right-8 text-white/50 hover:text-white transition-colors p-2 z-[10000]"
            onClick={closeLightbox}
          >
            <X className="w-10 h-10" />
          </button>

          <button 
            className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-all p-4 z-[10000] bg-white/5 rounded-full hover:bg-white/10"
            onClick={prevImage}
          >
            <ChevronLeft className="w-12 h-12" />
          </button>

          <div 
            className="w-full max-w-6xl h-full overflow-y-auto custom-scrollbar flex flex-col items-center" 
            onClick={e => e.stopPropagation()}
          >
            <div className="relative w-full mt-20 mb-20">
              <img 
                src={selectedImage} 
                alt="Enlarged view" 
                className="w-full h-auto object-contain"
              />
              
              <div className="mt-12 text-center pb-20">
                <h3 className="text-4xl font-black text-white uppercase tracking-[0.2em] mb-4">
                  {projects[currentIndex].title}
                </h3>
                <p className="text-white/40 text-sm uppercase tracking-widest">
                  Project {currentIndex + 1} of {projects.length} • Use mouse to scroll
                </p>
              </div>
            </div>
          </div>

          <button 
            className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 text-white/30 hover:text-white transition-all p-4 z-[10000] bg-white/5 rounded-full hover:bg-white/10"
            onClick={nextImage}
          >
            <ChevronRight className="w-12 h-12" />
          </button>
        </div>
      )}
    </section>
  );
}
