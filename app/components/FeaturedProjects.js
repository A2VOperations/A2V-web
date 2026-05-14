"use client";

import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import Image from "next/image";
import { ArrowLeft, ArrowRight, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const contentMap = {
  "web-development": [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
      previewImage: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format",
      categories: ["Web Development", "Next.js"],
      title: "Enterprise Solutions Portal",
      description: "A high-performance portal designed for enterprise-level data management and analytics reporting.",
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800&auto=format&fit=crop",
      previewImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      categories: ["E-commerce", "React"],
      title: "Global Commerce Engine",
      description: "Scalable e-commerce architecture supporting multi-currency and real-time inventory synchronization.",
      link: "#"
    }
  ],
  "graphic-designing": [
    {
      image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=800&auto=format&fit=crop",
      previewImage: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format",
      categories: ["Branding", "Logo"],
      title: "QUATES Identity",
      description: "Premium visual identity for a high-end fashion brand focusing on minimalism and elegance.", 
      link: "#"
    },
    {
      image: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=800&auto=format&fit=crop",
      previewImage: "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=2071&auto=format",
      categories: ["Identity", "Visuals"],
      title: "Visual Ecosystem",
      description: "A comprehensive design system that scales across print, digital, and environmental touchpoints.", 
      link: "#"
    }
  ],
  "digital-marketing": [
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      previewImage: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop",
      categories: ["SEO", "Analysis"],
      title: "Organic Growth Audit",
      description: "Detailed analysis showing 300% increase in organic traffic through technical SEO and content optimization.",
      link: "#"
    }
  ],
  "ai": [
    {
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
      previewImage: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1200&auto=format",
      categories: ["AI", "Automation"],
      title: "Intelligent Workflow",
      description: "AI-powered automation system that streamlines complex business processes and reduces manual effort by 70%.",
      link: "#"
    }
  ]
};

export default function FeaturedProjects({ 
  projects: projectsProp = [], 
  title = "Featured Projects",
  subtitle = "Explore Recent Works",
  variant = "default", // "default" or "gallery"
  source = "" 
}) {
  const sliderRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const resolvedProjects = source ? contentMap[source] : null;
  const projects = projectsProp.length > 0 ? projectsProp : (resolvedProjects || []);

  if (!projects || projects.length === 0) {
    return null;
  }

  const openLightbox = (index) => {
    setCurrentIndex(index);
    setSelectedImage(projects[index].previewImage || projects[index].image);
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
    setSelectedImage(projects[nextIdx].previewImage || projects[nextIdx].image);
  };

  const prevImage = (e) => {
    e.stopPropagation();
    const prevIdx = (currentIndex - 1 + projects.length) % projects.length;
    setCurrentIndex(prevIdx);
    setSelectedImage(projects[prevIdx].previewImage || projects[prevIdx].image);
  };

  const getPreviewLabel = (project) => {
    const cats = (project.categories || []).join(" ").toLowerCase();
    const src = (source || "").toLowerCase();
    
    if (cats.includes("web") || src.includes("web") || src.includes("automation")) return "Preview Website";
    if (cats.includes("design") || cats.includes("branding") || cats.includes("creative") || src.includes("design") || src.includes("branding")) return "Preview Design";
    if (cats.includes("marketing") || cats.includes("seo") || src.includes("marketing") || src.includes("seo")) return "Preview Results";
    
    return "Preview Project";
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
    <section className="py-24 bg-[#F8F9FA] px-6 md:px-12 lg:px-24 overflow-hidden">
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
            width: 8px;
          }
          .custom-scrollbar::-webkit-scrollbar-track {
            background: rgba(255, 255, 255, 0.05);
          }
          .custom-scrollbar::-webkit-scrollbar-thumb {
            background: #FC6600;
            border-radius: 10px;
          }
          .custom-scrollbar::-webkit-scrollbar-thumb:hover {
            background: #ff8533;
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
            const titleParts = project.title.split(/( \d+)$/);
            
            return (
              <div key={index} className="px-4 h-full">
                <div 
                  className={`bg-white rounded-none overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 group cursor-pointer h-full flex flex-col border border-gray-100`}
                >
                  <div 
                    className={`relative ${variant === 'gallery' ? 'aspect-[4/5]' : 'h-[300px]'} overflow-hidden`}
                    onClick={() => openLightbox(index)}
                  >
                    <Image 
                      src={project.image} 
                      alt={project.title} 
                      fill 
                      className="object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-4">
                       <div className="w-16 h-16 rounded-full bg-[#FC6600] flex items-center justify-center text-white scale-50 group-hover:scale-100 transition-transform duration-500 delay-100">
                          <Eye className="w-8 h-8" />
                       </div>
                       <span className="text-white font-black uppercase tracking-[0.2em] text-xs translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-200">
                          {getPreviewLabel(project)}
                       </span>
                    </div>

                    {/* Category Tag on Card */}
                    <div className="absolute top-4 left-4 bg-white px-3 py-1 text-[10px] font-black uppercase tracking-widest text-[#1A1A1A] z-10">
                       {project.categories?.[0] || "Featured"}
                    </div>
                  </div>
                  
                  <div className={`p-8 flex-1 flex flex-col ${variant === 'gallery' ? 'items-start text-left' : 'items-center text-center'}`}>
                    {variant !== 'gallery' && (
                      <p className="text-[#FC6600] text-[10px] font-black uppercase tracking-widest mb-3">
                        {project.categories.join(" • ")}
                      </p>
                    )}
                    <h3 className={`${variant === 'gallery' ? 'text-xl font-black' : 'text-2xl font-bold'} text-[#1A1A1A] mb-4 uppercase tracking-tight`}>
                      {titleParts[0]}
                      {titleParts[1] && <span className="block mt-1 text-sm text-[#FC6600]">{titleParts[1].trim()}</span>}
                    </h3>
                    
                    {variant !== 'gallery' && project.description && (
                      <p className="text-gray-500 text-[15px] leading-relaxed mb-8 line-clamp-3 min-h-[68px]">
                        {project.description}
                      </p>
                    )}

                    <div className="mt-auto pt-6 border-t border-gray-100 w-full flex justify-between items-center group/btn">
                      <div 
                        onClick={() => openLightbox(index)}
                        className="flex items-center gap-3 text-[#1A1A1A] font-black hover:text-[#FC6600] transition-colors text-xs uppercase tracking-widest cursor-pointer"
                      >
                        <div className="w-8 h-8 rounded-full bg-[#1A1A1A] group-hover:bg-[#FC6600] flex items-center justify-center text-white transition-colors">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                        Quick Preview
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      {/* Lightbox Overlay / Preview Gallery Mode */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-[9999] bg-slate-950/95 flex items-center justify-center p-0 md:p-10 backdrop-blur-md transition-all animate-in fade-in duration-500"
          onClick={closeLightbox}
        >
          {/* Top Bar */}
          <div className="absolute top-0 left-0 right-0 h-20 px-8 flex items-center justify-between z-[10001] bg-gradient-to-b from-black/80 to-transparent">
             <div className="flex flex-col">
                <span className="text-[#FC6600] text-[10px] font-black uppercase tracking-[0.3em]">Project Preview</span>
                <h4 className="text-white font-black uppercase tracking-tight text-xl">{projects[currentIndex].title}</h4>
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
                onLoad={(e) => {
                  // If image is very tall, show a small hint
                  if (e.target.naturalHeight > e.target.naturalWidth * 1.5) {
                    console.log("Tall image detected");
                  }
                }}
              />
              
              {/* Info Overlay at bottom of image */}
              <div className="p-12 bg-white text-[#1A1A1A] w-full">
                 <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
                    <div>
                       <span className="text-[#FC6600] text-xs font-black uppercase tracking-[0.2em] mb-2 block">
                          {(projects[currentIndex].categories || []).join(" / ")}
                       </span>
                       <h3 className="text-4xl font-black uppercase tracking-tighter">
                          {projects[currentIndex].title}
                       </h3>
                    </div>
                    {projects[currentIndex].link && (
                       <a 
                          href={projects[currentIndex].link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#1A1A1A] text-white px-10 py-5 font-black uppercase tracking-widest text-xs hover:bg-[#FC6600] transition-colors"
                       >
                          Visit Live Project
                       </a>
                    )}
                 </div>
                 {projects[currentIndex].description && (
                    <p className="mt-8 text-gray-500 text-lg leading-relaxed max-w-3xl font-medium">
                       {projects[currentIndex].description}
                    </p>
                 )}
              </div>
            </div>

            {/* Pagination Hint */}
            <div className="mt-12 mb-12 text-center">
              <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.4em]">
                {currentIndex + 1} / {projects.length}
              </p>
              <div className="flex gap-4 mt-6 md:hidden">
                 <button onClick={prevImage} className="px-6 py-3 bg-white/10 text-white font-black text-xs uppercase tracking-widest">Prev</button>
                 <button onClick={nextImage} className="px-6 py-3 bg-[#FC6600] text-white font-black text-xs uppercase tracking-widest">Next</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

