const fs = require('fs');
const path = require('path');

const aiSubCategories = [
  { slug: "consulting", title: "AI Consulting" },
  { slug: "development", title: "AI Development" },
  { slug: "machine-learning", title: "Machine Learning" },
  { slug: "nlp", title: "NLP Solutions" },
  { slug: "computer-vision", title: "Computer Vision" },
  { slug: "automation", title: "AI Automation" },
  { slug: "chatbots", title: "Chatbot Development" },
  { slug: "data-science", title: "Data Science" },
  { slug: "predictive-analytics", title: "Predictive Analytics" },
  { slug: "modernization", title: "AI Modernization" }
];

const template = (slug, title) => '"use client";\n\n' +
'import Image from "next/image";\n' +
'import Contact from "@/app/components/Contact";\n' +
'import ServiceFAQ from "@/app/components/ServiceFAQ";\n' +
'import FeaturedProjects from "@/app/components/FeaturedProjects";\n' +
'import ServiceStatsCards from "@/app/components/ServiceStatsCards";\n' +
'import ServiceAbout from "@/app/components/ServiceAbout";\n' +
'import ServiceDarkGrid from "@/app/components/ServiceDarkGrid";\n' +
'import ServiceFeatureGrid from "@/app/components/ServiceFeatureGrid";\n' +
'import ServiceShowcase from "@/app/components/ServiceShowcase";\n' +
'import ClientLogos from "@/app/components/ClientLogos";\n' +
'import Testimonials from "@/app/components/Testimonials";\n\n' +
'export default function ' + title.replace(/\s+/g, '') + 'Page() {\n' +
'  const source = "' + slug + '";\n\n' +
'  return (\n' +
'    <main className="min-h-screen bg-white">\n' +
'      {/* Hero Section */}\n' +
'      <section className="relative py-32 bg-slate-900 text-white overflow-hidden">\n' +
'        <div className="absolute inset-0 opacity-20">\n' +
'          <Image\n' +
'            src="https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop"\n' +
'            alt="' + title + ' Background"\n' +
'            fill\n' +
'            className="object-cover"\n' +
'          />\n' +
'        </div>\n' +
'        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />\n\n' +
'        <div className="max-w-7xl mx-auto px-6 relative z-10">\n' +
'          <div className="flex flex-col lg:flex-row items-center gap-20">\n' +
'            <div className="flex-1 text-center lg:text-left">\n' +
'              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 text-xs font-black uppercase tracking-[0.2em] mb-8">\n' +
'                AI Intelligence\n' +
'              </div>\n' +
'              <h1 className="text-6xl md:text-8xl font-black mb-8 uppercase tracking-tighter leading-[0.85]">\n' +
'                ' + title.split(' ')[0] + ' <br />{" "}\n' +
'                <span className="text-orange-500">' + (title.split(' ').slice(1).join(' ') || 'SOLUTIONS') + '</span>\n' +
'              </h1>\n' +
'              <p className="text-xl text-gray-400 mb-12 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">\n' +
'                We leverage cutting-edge artificial intelligence to transform your business \n' +
'                operations and drive unprecedented growth through intelligent automation.\n' +
'              </p>\n' +
'              <div className="flex flex-wrap gap-6 justify-center lg:justify-start">\n' +
'                <button className="px-12 py-5 bg-orange-500 text-white font-black rounded-xl hover:bg-orange-600 transition-all shadow-[0_20px_40px_rgba(252,102,0,0.3)] hover:-translate-y-1">\n' +
'                  Start Your Project\n' +
'                </button>\n' +
'                <button className="px-12 py-5 bg-white/5 backdrop-blur-md text-white font-black rounded-xl border border-white/10 hover:bg-white/10 transition-all">\n' +
'                  View Roadmap\n' +
'                </button>\n' +
'              </div>\n' +
'            </div>\n\n' +
'            <div className="flex-1 relative w-full max-w-2xl">\n' +
'              <div className="relative aspect-square rounded-[3rem] overflow-hidden border-2 border-orange-500/20 shadow-2xl group">\n' +
'                <Image\n' +
'                  src="https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2070&auto=format&fit=crop"\n' +
'                  alt="' + title + ' Showcase"\n' +
'                  fill\n' +
'                  className="object-cover transition-transform duration-700 group-hover:scale-110"\n' +
'                />\n' +
'                <div className="absolute bottom-10 right-10 p-8 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl">\n' +
'                  <p className="text-4xl font-black text-orange-500 mb-2">\n' +
'                    10x\n' +
'                  </p>\n' +
'                  <p className="text-xs font-black text-white uppercase tracking-widest">\n' +
'                    Efficiency Boost\n' +
'                  </p>\n' +
'                </div>\n' +
'              </div>\n' +
'            </div>\n' +
'          </div>\n' +
'        </div>\n' +
'      </section>\n\n' +
'      {/* Stats Section */}\n' +
'      <ServiceStatsCards source={source} />\n' +
'      \n' +
'      {/* About Section */}\n' +
'      <ServiceAbout source={source} />\n\n' +
'      {/* Dark Grid Section */}\n' +
'      <ServiceDarkGrid source={source} />\n\n' +
'      {/* Feature Grid Section */}\n' +
'      <ServiceFeatureGrid source={source} />\n\n' +
'      {/* Showcase Section */}\n' +
'      <ServiceShowcase source={source} />\n\n' +
'      <Testimonials />\n\n' +
'      <FeaturedProjects source={source} />\n' +
'      \n' +
'      <ServiceFAQ source={source} />\n\n' +
'      <Contact />\n' +
'    </main>\n' +
'  );\n' +
'}\n';

const baseDir = path.join(process.cwd(), 'app', '(users)', 'services', 'ai');

aiSubCategories.forEach(({ slug, title }) => {
  const dir = path.join(baseDir, slug);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
  fs.writeFileSync(path.join(dir, 'page.js'), template(slug, title));
  console.log('Generated ' + slug);
});
