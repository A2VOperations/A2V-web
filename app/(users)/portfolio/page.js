"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  ExternalLink, Search, X, 
  ArrowUpRight, Play, Eye
} from "lucide-react";
import { gsap } from "gsap";
import { getPortfolios } from "@/app/actions/portfolioActions";

const categories = ["All", "Web Development", "Graphic Designing", "Digital Marketing"];


export default function PortfolioPage() {
  const [filter, setFilter] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function loadProjects() {
      const res = await getPortfolios();
      if (res.success) {
        setProjects(res.data);
      }
      setLoading(false);
    }
    loadProjects();
  }, []);

  const filteredProjects = projects.filter(p => {
    const matchesFilter = filter === "All" || p.category === filter;
    const matchesSearch = p.title.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  useEffect(() => {
    gsap.fromTo(".project-card", 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, stagger: 0.1, duration: 0.8, ease: "power3.out" }
    );
  }, [filter, searchQuery]);

  return (
    <main className="min-h-screen bg-slate-50 pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-xs mb-4 block animate-bounce">Our Showroom</span>
          <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-6 uppercase tracking-tighter leading-none">
            Success <span className="text-orange-500">Stories</span>
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            A curated selection of our best work across web development, creative design, and strategic marketing.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16 bg-white p-6 rounded-[2.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
           {/* Filters */}
           <div className="flex flex-wrap justify-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-6 py-3 rounded-2xl text-sm font-black uppercase tracking-widest transition-all ${
                    filter === cat 
                    ? "bg-orange-500 text-white shadow-lg shadow-orange-500/40 scale-105" 
                    : "text-slate-500 hover:bg-slate-50 hover:text-orange-500"
                  }`}
                >
                  {cat}
                </button>
              ))}
           </div>

           {/* Search */}
           <div className="relative w-full md:w-80">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input 
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 text-sm outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
              />
           </div>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {loading ? (
            <div className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-20 text-slate-500 font-bold uppercase tracking-widest animate-pulse">
              Loading Projects...
            </div>
          ) : filteredProjects.map((project) => (
            <div 
              key={project._id || project.id}
              className="project-card group relative bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  fill 
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                   <button 
                    onClick={() => setSelectedProject(project)}
                    className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all hover:scale-110"
                   >
                      <Eye className="w-6 h-6" />
                   </button>
                   {project.isLive && (
                     <Link 
                      href={project.link} 
                      target="_blank"
                      className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center text-white hover:bg-slate-900 transition-all hover:scale-110"
                     >
                        <ExternalLink className="w-6 h-6" />
                     </Link>
                   )}
                </div>
                <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl text-[10px] font-black uppercase tracking-[0.2em] text-orange-500 shadow-sm">
                   {project.category}
                </div>
              </div>

              <div className="p-10">
                <div className="flex flex-wrap gap-2 mb-6">
                   {project.tech.map((t, i) => (
                     <span key={i} className="px-3 py-1 bg-slate-50 text-[10px] font-bold text-slate-400 uppercase tracking-widest rounded-lg">
                        {t}
                     </span>
                   ))}
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter group-hover:text-orange-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
                <div className="mt-8 flex items-center justify-between">
                   <button 
                    onClick={() => setSelectedProject(project)}
                    className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-900 group-hover:text-orange-500 transition-all flex items-center gap-2"
                   >
                      Case Study <ArrowUpRight className="w-4 h-4" />
                   </button>
                   {project.isLive && (
                     <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-[10px] font-black uppercase text-green-600 tracking-widest">Live Demo</span>
                     </div>
                   )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {!loading && filteredProjects.length === 0 && (
          <div className="text-center py-32 bg-white rounded-[4rem] border-2 border-dashed border-slate-100">
             <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-slate-300" />
             </div>
             <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase tracking-tighter">No Projects Found</h3>
             <p className="text-slate-400">Try adjusting your filters or search query.</p>
          </div>
        )}
      </div>

      {/* Project Detail Modal / Iframe Viewer */}
      {selectedProject && (
        <div className="fixed inset-0 z-[2000] flex items-center justify-center p-6 md:p-12">
           <div 
            className="absolute inset-0 bg-slate-900/95 backdrop-blur-xl"
            onClick={() => setSelectedProject(null)}
           />
           
           <div className="relative w-full max-w-6xl bg-white rounded-[4rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row h-full lg:max-h-[85vh]">
              {/* Left: Viewer */}
              <div className="flex-[1.5] bg-slate-100 relative group overflow-hidden border-b lg:border-b-0 lg:border-r border-slate-100">
                 {selectedProject.isLive ? (
                   <iframe 
                    src={selectedProject.link} 
                    className="w-full h-full border-none bg-white"
                    title={selectedProject.title}
                   />
                 ) : (
                   <Image 
                    src={selectedProject.image} 
                    alt={selectedProject.title} 
                    fill 
                    className="object-cover"
                   />
                 )}
                 <div className="absolute top-6 left-6 flex gap-4">
                    <div className="px-5 py-2 bg-slate-900 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl">
                       {selectedProject.isLive ? "Live Preview" : "Final Design"}
                    </div>
                 </div>
              </div>

              {/* Right: Info */}
              <div className="flex-1 p-10 md:p-16 overflow-y-auto custom-scrollbar">
                 <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-8 right-8 w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-400 hover:bg-orange-500 hover:text-white transition-all shadow-sm"
                 >
                    <X className="w-6 h-6" />
                 </button>

                 <span className="text-orange-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block">
                    {selectedProject.category}
                 </span>
                 <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 uppercase tracking-tighter leading-none">
                    {selectedProject.title}
                 </h2>

                 <div className="space-y-10">
                    <div>
                       <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">Project Overview</h4>
                       <p className="text-slate-600 leading-relaxed text-lg">
                          {selectedProject.description}
                       </p>
                    </div>

                    <div>
                       <h4 className="text-[11px] font-black text-slate-400 uppercase tracking-widest mb-4">Technologies Used</h4>
                       <div className="flex flex-wrap gap-3">
                          {selectedProject.tech.map((t, i) => (
                            <span key={i} className="px-5 py-2 bg-slate-50 text-slate-900 font-bold rounded-xl text-xs border border-slate-100">
                               {t}
                            </span>
                          ))}
                       </div>
                    </div>

                    <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row gap-6">
                       {selectedProject.isLive && (
                         <Link 
                          href={selectedProject.link} 
                          target="_blank"
                          className="flex-1 px-8 py-4 bg-orange-500 text-white font-black rounded-2xl text-center uppercase tracking-widest text-xs hover:bg-orange-600 transition-all flex items-center justify-center gap-3 shadow-xl shadow-orange-500/30"
                         >
                            Visit Live Site <ExternalLink className="w-4 h-4" />
                         </Link>
                       )}
                       <Link 
                        href="/contact" 
                        className="flex-1 px-8 py-4 bg-slate-900 text-white font-black rounded-2xl text-center uppercase tracking-widest text-xs hover:bg-black transition-all flex items-center justify-center gap-3 shadow-xl shadow-slate-900/30"
                       >
                          Similar Project? <Play className="w-4 h-4" />
                       </Link>
                    </div>
                 </div>
              </div>
           </div>
        </div>
      )}

      {/* Contact CTA */}
      <section className="mt-32 max-w-5xl mx-auto">
         <div className="bg-slate-900 rounded-[4rem] p-12 md:p-24 text-center relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 blur-[100px] rounded-full" />
            <h2 className="text-4xl md:text-7xl font-black text-white mb-10 uppercase tracking-tighter leading-none relative z-10">
               Ready To Build Your <br /> <span className="text-orange-500 italic">Success Story?</span>
            </h2>
            <Link 
              href="/contact" 
              className="px-12 py-5 bg-orange-500 text-white font-black rounded-2xl hover:bg-orange-600 transition-all shadow-2xl shadow-orange-500/40 hover:-translate-y-2 uppercase tracking-widest text-sm inline-flex items-center gap-4 relative z-10"
            >
               Let&apos;s Discuss <ArrowUpRight className="w-5 h-5" />
            </Link>
         </div>
      </section>
    </main>
  );
}
