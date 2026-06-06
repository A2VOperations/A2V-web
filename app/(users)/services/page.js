"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Code, Palette, Megaphone, CheckCircle2, Sparkles, Rocket, Plus, Circle, ArrowUpRight, ChevronLeft, ChevronRight, Search, Presentation, Layout, Cloud, Brain, ShieldCheck, TrendingUp } from "lucide-react";
import ContactForm from "../../components/ContactForm";
import { siteConfig } from "../../config";

const Typewriter = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : 150, 100));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return <span>{`${words[index].substring(0, subIndex)}`}</span>;
};

const services = [
  {
    title: "Custom Web Solutions",
    desc: "We engineer custom SaaS, react apps, and API integrations that bridge the gap between business vision and digital reality.",
    href: siteConfig.socialLinks.whatsapp,
    icon: <Code className="w-8 h-8" />,
    image: "/images/web-dev-hero.png",
    accent: "orange-500"
  },
  {
    title: "E-Commerce Platforms",
    desc: "High-conversion online stores with custom payment gateways, secure checkouts, and optimized performance to maximize sales.",
    href: siteConfig.socialLinks.whatsapp,
    icon: <Layout className="w-8 h-8" />,
    image: "/images/graphic-design-hero.png",
    accent: "blue-500"
  },
  {
    title: "Headless CMS & Blogs",
    desc: "Intuitive content platforms built with headless dashboards like Strapi or Sanity so your team publishes instantly without code.",
    href: siteConfig.socialLinks.whatsapp,
    icon: <Cloud className="w-8 h-8" />,
    image: "/images/digital-marketing-hero.png",
    accent: "green-500"
  },
  {
    title: "Web Speed & SEO",
    desc: "Advanced PageSpeed tuning and technical Core Web Vitals optimizations to achieve top search authority and ultra-fast loads.",
    href: siteConfig.socialLinks.whatsapp,
    icon: <Zap className="w-8 h-8" />,
    image: "/images/ai-consultancy-hero.png",
    accent: "purple-500"
  }
];

const processSteps = [
  { id: "01", title: "kick-off", details: ["UI kit & design-system", "design documentation", "handover with developers"] },
  { id: "02", title: "research", details: ["market analysis", "competitor research", "user personas"] },
  { id: "03", title: "ideation", details: ["brainstorming sessions", "concept sketching", "wireframing"] },
  { id: "04", title: "testing", details: ["usability testing", "A/B testing", "feedback collection"] },
  { id: "05", title: "design", details: ["high-fidelity mockups", "interactive prototypes", "design iteration"] },
  { id: "06", title: "delivery", details: ["UI kit & design-system", "design documentation", "handover with developers"] }
];

const devTabs = [
  {
    title: "WORDPRESS DEVELOPMENT",
    heading: "WORDPRESS DEVELOPMENT",
    desc: "Custom WordPress solutions tailored to your business needs, ensuring a scalable and secure digital foundation.",
    bullets: ["Custom Theme Design", "Plugin Development", "SEO Optimization"],
    smallImg: "https://images.unsplash.com/photo-1551288049-bbbda536ad37?auto=format&fit=crop&q=80&w=300"
  },
  {
    title: "AMP WEB DEVELOPMENT",
    heading: "AMP WEB DEVELOPMENT",
    desc: "Accelerated Mobile Pages (AMP) to ensure lightning-fast load times for your mobile visitors.",
    bullets: ["Performance Audits", "Mobile Optimization", "Core Web Vitals"],
    smallImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=300"
  },
  {
    title: "CUSTOM 3D PRODUCT CONFIGURATORS",
    heading: "CUSTOM 3D CONFIGURATORS",
    desc: "Interactive 3D configurators that allow your customers to customize products in real-time.",
    bullets: ["WebGL Integration", "Real-time Rendering", "Interactive UI"],
    smallImg: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=300"
  },
  {
    title: "E-COMMERCE WEB DEVELOPMENT",
    heading: "E-COMMERCE DEVELOPMENT",
    desc: "Robust and scalable e-commerce platforms designed to maximize conversions and sales.",
    bullets: ["Secure Payments", "Inventory Management", "Custom Checkouts"],
    smallImg: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=300"
  },
  {
    title: "SHOPIFY DEVELOPMENT",
    heading: "SHOPIFY DEVELOPMENT",
    desc: "Leverage the power of Shopify with our development services. We design compelling, easy-to-navigate Shopify stores.",
    bullets: ["Theme Customization", "App Integration", "Store Migration"],
    smallImg: "https://images.unsplash.com/photo-1556740758-90de374c12ad?auto=format&fit=crop&q=80&w=300"
  },
  {
    title: "MAGENTO DEVELOPMENT",
    heading: "MAGENTO DEVELOPMENT",
    desc: "Enterprise-grade Magento development for complex e-commerce ecosystems.",
    bullets: ["B2B Solutions", "API Integration", "High Scalability"],
    smallImg: "https://images.unsplash.com/photo-1556740738-b6a63e27c4df?auto=format&fit=crop&q=80&w=300"
  },
  {
    title: "LARAVEL DEVELOPMENT",
    heading: "LARAVEL DEVELOPMENT",
    desc: "Custom web applications built on the robust and elegant Laravel PHP framework.",
    bullets: ["Custom Web Apps", "Database Design", "Cloud Deployment"],
    smallImg: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=300"
  }
];

const graphicTabs = [
  {
    title: "UI/UX DESIGN",
    heading: "UI/UX DESIGN",
    desc: "Crafting intuitive, engaging, and beautiful user interfaces that provide seamless digital experiences.",
    bullets: ["User Research", "Wireframing", "Interactive Prototypes"],
    smallImg: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?auto=format&fit=crop&q=80&w=300"
  },
  {
    title: "LOGO DESIGN",
    heading: "LOGO DESIGN",
    desc: "Creating memorable and impactful logos that capture the essence of your brand.",
    bullets: ["Concept Development", "Vector Graphics", "Brand Guidelines"],
    smallImg: "https://images.unsplash.com/photo-1572044162444-ad60f128bde2?auto=format&fit=crop&q=80&w=300"
  },
  {
    title: "BRANDING",
    heading: "BRANDING",
    desc: "Building strong, cohesive brand identities that resonate with your target audience.",
    bullets: ["Brand Strategy", "Visual Identity", "Voice & Tone"],
    smallImg: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?auto=format&fit=crop&q=80&w=300"
  },
  {
    title: "ILLUSTRATION",
    heading: "ILLUSTRATION",
    desc: "Bespoke illustrations that add a unique, creative touch to your digital and physical assets.",
    bullets: ["Digital Painting", "Vector Art", "Custom Graphics"],
    smallImg: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=300"
  },
  {
    title: "PRINT DESIGN",
    heading: "PRINT DESIGN",
    desc: "Designing eye-catching print materials from brochures to business cards.",
    bullets: ["Brochures", "Business Cards", "Large Format Print"],
    smallImg: "https://images.unsplash.com/photo-1586717799252-bd134ad00e26?auto=format&fit=crop&q=80&w=300"
  },
  {
    title: "MOTION GRAPHICS",
    heading: "MOTION GRAPHICS",
    desc: "Bringing your brand to life with stunning animations and motion graphics.",
    bullets: ["2D Animation", "Explainer Videos", "Social Content"],
    smallImg: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=300"
  }
];

const marketingTabs = [
  { title: "SEO SERVICES", heading: "SEO SERVICES", desc: "Improving your website's visibility on search engines to drive organic, high-intent traffic.", bullets: ["Keyword Research", "On-Page SEO", "Link Building"], smallImg: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=300" },
  { title: "PPC ADVERTISING", heading: "PPC ADVERTISING", desc: "Targeted ad campaigns designed to maximize your ROI and generate immediate leads.", bullets: ["Google Ads", "Meta Ads", "Retargeting"], smallImg: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&q=80&w=300" },
  { title: "SOCIAL MEDIA MARKETING", heading: "SOCIAL MEDIA MARKETING", desc: "Building engaged communities and driving brand awareness across all major social platforms.", bullets: ["Content Planning", "Community Mgmt", "Paid Social"], smallImg: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?auto=format&fit=crop&q=80&w=300" },
  { title: "CONTENT MARKETING", heading: "CONTENT MARKETING", desc: "Creating valuable, relevant content that attracts, informs, and retains your target audience.", bullets: ["Blog Writing", "Video Content", "Whitepapers"], smallImg: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=300" },
  { title: "EMAIL MARKETING", heading: "EMAIL MARKETING", desc: "Designing highly converting email sequences that nurture leads and turn subscribers into loyal customers.", bullets: ["Drip Campaigns", "Automation", "Newsletter Design"], smallImg: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=300" },
  { title: "CONVERSION RATE OPTIMIZATION", heading: "CONVERSION RATE OPTIMIZATION", desc: "Analyzing user behavior and optimizing your digital funnels to maximize conversions.", bullets: ["A/B Testing", "Heatmaps", "Funnel Analysis"], smallImg: "https://images.unsplash.com/photo-1551288049-bbbda536ad37?auto=format&fit=crop&q=80&w=300" }
];

const aiTabs = [
  { title: "AI CONSULTING", heading: "AI CONSULTING", desc: "Expert guidance on integrating AI into your business strategy to drive efficiency and innovation.", bullets: ["Strategy Development", "Feasibility Studies", "AI Roadmap Planning"], smallImg: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=300" },
  { title: "AI DEVELOPMENT", heading: "AI DEVELOPMENT", desc: "Building custom AI models and applications tailored to your specific business needs and data.", bullets: ["Custom ML Models", "NLP Solutions", "Computer Vision"], smallImg: "https://images.unsplash.com/photo-1677442135136-760c813a743d?auto=format&fit=crop&q=80&w=300" },
  { title: "AUTOMATION & MODERNIZATION", heading: "AUTOMATION & MODERNIZATION", desc: "Automating repetitive tasks and modernizing legacy systems with intelligent AI-driven workflows.", bullets: ["Process Automation", "Legacy Integration", "Smart Workflows"], smallImg: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=300" },
  { title: "LLM INTEGRATION", heading: "LLM INTEGRATION", desc: "Integrating Large Language Models like GPT-4 to power chatbots, content generation, and internal tools.", bullets: ["Custom Chatbots", "Text Generation", "Semantic Search"], smallImg: "https://images.unsplash.com/photo-1676299081847-824916de030a?auto=format&fit=crop&q=80&w=300" },
  { title: "DATA ANALYSIS & INSIGHTS", heading: "DATA ANALYSIS & INSIGHTS", desc: "Extracting actionable insights from your data using advanced machine learning and statistical techniques.", bullets: ["Predictive Analytics", "Data Visualization", "Trend Analysis"], smallImg: "https://images.unsplash.com/photo-1551288049-bbbda536ad37?auto=format&fit=crop&q=80&w=300" }
];

const testimonials = [
  {
    name: "Rajesh Kumar (TechVision India)",
    text: "A2V's web development team is top-notch. They built our e-commerce platform with incredible speed and precision, handling every technical challenge flawlessly.",
    rating: 5
  },
  {
    name: "Priya Sharma (Greenleaf Solutions)",
    text: "The graphic design work for our branding was outstanding. Creative, modern, and perfectly aligned with our vision for the Indian market.",
    rating: 5
  },
  {
    name: "Amit Patel (GrowthX)",
    text: "Their digital marketing strategies helped us reach our target audience effectively. The ROI on our campaigns has been fantastic since we started with A2V.",
    rating: 5
  },
  {
    name: "Anjali Gupta",
    text: "Reliable and professional. They handled our complex website migration and security audit without a single minute of downtime. Highly recommended!",
    rating: 4
  },
  {
    name: "Vikram Singh (Singh Logistics)",
    text: "Outstanding commitment to quality. The team at A2V transformed our legacy systems into a modern, fast, and user-friendly web application.",
    rating: 5
  },
  {
    name: "Deepa Reddy (Reddy Enterprises)",
    text: "The creative team's attention to detail is remarkable. Our new brand identity has received amazing feedback from our clients across India.",
    rating: 5
  },
  {
    name: "Sanjay Mehra (Mehra & Co)",
    text: "Data-driven marketing that actually works. We've seen a significant jump in qualified leads since A2V took over our digital strategy.",
    rating: 4
  },
  {
    name: "Neha Kapoor (Kapoor Creatives)",
    text: "A truly professional IT solution company. They are our go-to partners for anything related to web development and UI/UX design. Exceptional work!",
    rating: 5
  }
];

const WorkingProcess = () => {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Calculate progress based on viewport position
      // Starts filling when the section bottom enters the viewport
      // Finishes filling when the section top reaches the top of the viewport
      const scrollStart = rect.top + window.scrollY - windowHeight;
      const scrollEnd = rect.top + window.scrollY;
      const totalDist = windowHeight;

      let currentProgress = 0;
      const currentScroll = window.scrollY;

      // Alternative approach for full section height
      const sectionTop = rect.top + window.scrollY;
      const sectionHeight = rect.height;
      const viewportBottom = window.scrollY + windowHeight;

      if (viewportBottom > sectionTop) {
        currentProgress = ((viewportBottom - sectionTop) / (sectionHeight + windowHeight)) * 100;
      }

      setProgress(Math.min(100, Math.max(0, currentProgress)));
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const steps = [
    {
      num: 1,
      title: "Strategic Audit & Insight",
      desc: "We dissect your market position and operational architecture to engineer a blueprint for absolute dominance across all digital fronts.",
      bullets: [
        "Deep-dive infrastructure and performance audit",
        "Competitor positioning and market gap analysis",
        "Outcome-driven strategic roadmap formulation"
      ],
      image: "/images/process-abstract-1.png"
    },
    {
      num: 2,
      title: "Creative Architecture",
      desc: "Translating complex strategic goals into high-performance visual and technical structures that command authority and scale.",
      bullets: [
        "High-fidelity UI/UX and brand system design",
        "Scalable technical and cloud architecture",
        "Interactive prototyping and stress-testing"
      ],
      image: "https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&w=1200&q=80"
    },
    {
      num: 3,
      title: "Precision Engineering",
      desc: "Meticulous execution using cutting-edge stacks to build robust, secure, and lightning-fast digital flagships for your business.",
      bullets: [
        "Full-stack development and system integration",
        "AI-enhanced automation and data pipelines",
        "Performance-optimized deployment cycles"
      ],
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
    },
    {
      num: 4,
      title: "Growth Optimization",
      desc: "Continuous refinement and data-driven scaling to ensure your platform consistently outperforms the market and drives aggressive ROI.",
      bullets: [
        "Post-launch growth and conversion auditing",
        "Continuous CI/CD and security monitoring",
        "Iterative scaling and performance tuning"
      ],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80"
    }
  ];

  const mobileItems = [
    { title: "Strategic Audit", desc: "In-depth infrastructure and performance auditing.", icon: Search, color: "#4B5563" },
    { title: "Market Insight", desc: "Comprehensive competitor and market gap analysis.", icon: Presentation, color: "#10B981" },
    { title: "UI/UX Design", desc: "High-fidelity branding and interaction design.", icon: Layout, color: "#D97706" },
    { title: "System Arch", desc: "Scalable cloud-native architecture planning.", icon: Cloud, color: "#EF4444" },
    { title: "Precision Dev", desc: "Full-stack engineering with modern frameworks.", icon: Code, color: "#3B82F6" },
    { title: "AI Integration", desc: "Smart automation and neural-enhanced features.", icon: Brain, color: "#8B5CF6" },
    { title: "QA Testing", desc: "Rigorous stress testing and security auditing.", icon: ShieldCheck, color: "#DC2626" },
    { title: "Growth Scaling", desc: "Data-driven ROI and performance optimization.", icon: TrendingUp, color: "#06B6D4" }
  ];

  return (
    <section ref={sectionRef} className="py-10 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <span className="px-4 py-1.5 rounded-full bg-[#FC6600]/10 border border-[#FC6600]/20 text-[#FC6600] text-[10px] font-black uppercase tracking-[0.3em] mb-6 inline-block">
            Working Process
          </span>
          <h2 className="text-5xl md:text-7xl font-black text-gray-900 mb-8 tracking-tighter uppercase leading-[0.9]">
            Powerful systems to keep <br />
            <span className="text-[#FC6600] italic font-light lowercase font-serif">your projects on track</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto font-sans">
            Explore the methodologies that make A2V the complete solution for streamlined digital transformation.
          </p>
        </div>

        {/* Mobile & Tablet Version */}
        <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16 pb-20">
          {mobileItems.map((item, i) => (
            <div key={i} className={`flex items-start gap-6 group ${i % 2 !== 0 && 'md:flex-row-reverse md:text-right'}`}>
              <div
                className="w-20 h-20 shrink-0 rounded-3xl flex items-center justify-center shadow-xl transition-transform duration-500 group-hover:scale-110"
                style={{ backgroundColor: item.color }}
              >
                <item.icon className="w-10 h-10 text-white" />
              </div>
              <div className="flex flex-col justify-center min-h-[80px]">
                <h4 className="text-xl font-black text-gray-900 mb-2 uppercase tracking-tight leading-none">{item.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed font-sans">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Version */}
        <div className="hidden lg:grid grid-cols-12 gap-16 lg:gap-24">
          {/* Left Timeline + Text Content */}
          <div className="lg:col-span-7 flex gap-6 md:gap-16">
            {/* Timeline Bar */}
            <div className="flex w-1 relative shrink-0">
              <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-gray-100 rounded-xl">
                <div
                  className="absolute top-0 left-0 w-full bg-[#FC6600] shadow-[0_0_20px_rgba(252,102,0,0.5)] transition-all duration-100 ease-out rounded-xl"
                  style={{ height: `${progress}%` }}
                />
              </div>
              <div className="absolute inset-0 flex flex-col justify-between py-10">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`w-4 h-4 rounded-xl border-2 mx-auto transition-all duration-500 z-20 ${progress >= (i / (steps.length - 1)) * 100
                        ? 'bg-[#FC6600] border-[#FC6600] scale-125 shadow-[0_0_15px_rgba(252,102,0,0.8)]'
                        : 'bg-white border-gray-200'
                      }`}
                  />
                ))}
              </div>
            </div>

            {/* Steps Content */}
            <div className="flex-1 space-y-24 md:space-y-48">
              {steps.map((step, i) => (
                <div key={i} className="relative pt-10">
                  <div className="flex items-center gap-6 mb-8">
                    <span className="w-12 h-12 flex items-center justify-center bg-[#FC6600] text-white font-black rounded-xl shadow-lg shadow-[#FC6600]/20 shrink-0">
                      {step.num}
                    </span>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black text-[#FC6600] uppercase tracking-[0.3em] mb-1">Phase 0{step.num}</span>
                      <h3 className="text-3xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-none">
                        {step.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-gray-600 text-xl leading-relaxed mb-10 font-sans max-w-2xl">
                    {step.desc}
                  </p>
                  <ul className="space-y-4">
                    {step.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <div className="mt-1.5 w-5 h-5 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0">
                          <CheckCircle2 className="w-3 h-3 text-[#FC6600]" />
                        </div>
                        <span className="text-gray-700 font-medium font-sans">{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Mobile Only Image */}
                  <div className="mt-8 lg:hidden relative rounded-2xl overflow-hidden shadow-lg aspect-[16/10] border border-gray-100 bg-gray-50">
                    <Image src={step.image} alt={step.title} fill className="object-cover" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Dense Collage Stream (Continuous) */}
          <div className="lg:col-span-5 space-y-8 pt-10">
            {/* Cluster 1: Initial Feature */}
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-2xl border border-gray-100 group">
              <Image src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80" alt="Laptop Workspace" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* Cluster 2: Masonry Mix */}
            <div className="grid grid-cols-2 gap-2 h-[700px]">
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-100 group">
                <Image src="https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&w=800&q=80" alt="Digital Strategy" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/5" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="relative flex-1 rounded-xl overflow-hidden shadow-2xl border border-gray-100 group">
                  <Image src="https://images.unsplash.com/photo-1544256718-3bcf237f3974?auto=format&fit=crop&w=800&q=80" alt="Creative Design" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/5" />
                </div>
                <div className="relative flex-1 rounded-xl overflow-hidden shadow-2xl border border-gray-100 group">
                  <Image src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" alt="Engineering" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/5" />
                </div>
              </div>
            </div>

            {/* Cluster 3: Wide Focal Point */}
            <div className="relative aspect-square rounded-xl overflow-hidden shadow-2xl border border-gray-100 group">
              <Image src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Growth & Analytics" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/5" />
            </div>

            {/* Cluster 4: Reversed Masonry */}
            <div className="grid grid-cols-2 gap-2 h-[700px]">
              <div className="flex flex-col gap-2">
                <div className="relative flex-1 rounded-xl overflow-hidden shadow-2xl border border-gray-100 group">
                  <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Collaboration" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/5" />
                </div>
                <div className="relative flex-1 rounded-xl overflow-hidden shadow-2xl border border-gray-100 group">
                  <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Marketing Data" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/5" />
                </div>
              </div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl border border-gray-100 group">
                <Image src="https://images.unsplash.com/photo-1633167606207-d840b5070fc2?auto=format&fit=crop&w=800&q=80" alt="Advanced Tech" fill className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/5" />
              </div>
            </div>





          </div>
        </div>
      </div>
    </section>
  );
};

export default function ServicesPage() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeProcessStep, setActiveProcessStep] = useState(5);
  const [activeDevTab, setActiveDevTab] = useState(4);
  const [activeGraphicTab, setActiveGraphicTab] = useState(0);
  const [activeMarketingTab, setActiveMarketingTab] = useState(0);
  const [activeAiTab, setActiveAiTab] = useState(0);
  const [processModalContent, setProcessModalContent] = useState(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-white overflow-hidden font-sans">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6  overflow-hidden min-h-[85vh] flex items-center">
        {/* Background Graphic (Infinity style) */}
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 500 500" className="w-full h-full text-gray-400">
            <path d="M100 250 C 100 150, 200 150, 250 250 C 300 350, 400 350, 400 250 C 400 150, 300 150, 250 250 C 200 350, 100 350, 100 250" fill="none" stroke="currentColor" strokeWidth="20" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
          {/* Left Content */}
          <div className="lg:col-span-7">
            <h1 className="text-5xl md:text-8xl font-black mb-6 leading-[0.9] tracking-tighter uppercase">
              <span className="text-[#FC6600] block mb-2">AI-Perfected</span>
              <span className="text-gray-900 min-h-[1.1em] block">
                <Typewriter words={["Next.js Apps", "Custom Portals", "E-Commerce", "SaaS Solutions"]} />
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-xl mb-10 leading-relaxed font-sans">
              For ambitious companies who want more than standard websites. A2V is a premier AI-Perfected Web Development studio that designs, engineers, and delivers.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center mb-16">
              <Link href="/contact" className="px-10 py-5 bg-[#FC6600] text-white font-black rounded-2xl hover:bg-[#e55c00] transition-all uppercase tracking-widest text-sm shadow-2xl shadow-[#FC6600]/30 hover:-translate-y-1">
                Get Connective Solutions
              </Link>
            </div>

            {/* Trust Logos */}
            <div className="flex flex-wrap items-center gap-12 pt-10 border-t border-gray-200">
              <div className="flex items-center gap-3">
                <span className="text-gray-400 font-bold text-2xl">Google</span>
                <div className="text-xs">
                  <div className="text-[#FC6600] font-black">4.9</div>
                  <div className="text-gray-400 uppercase tracking-tighter font-bold">Stars</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 font-bold text-2xl">DESIGNRUSH</span>
                <div className="text-xs">
                  <div className="text-[#FC6600] font-black">4.9</div>
                  <div className="text-gray-400 uppercase tracking-tighter font-bold">Stars</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-400 font-bold text-2xl">yelp</span>
                <div className="text-xs">
                  <div className="text-[#FC6600] font-black">5</div>
                  <div className="text-gray-400 uppercase tracking-tighter font-bold">Stars</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Content: Contact Form */}
          <div className="xl:col-span-5 relative w-full max-w-2xl mx-auto xl:mx-0">
            <div className="absolute -inset-10 bg-[#FC6600]/5 rounded-full blur-3xl" />
            <div className="relative z-20 bg-white rounded-[3rem] shadow-2xl border border-gray-100 overflow-hidden p-2">
              <div className="p-4 bg-gray-50/50 rounded-[2.5rem]">
                <h3 className="text-2xl font-black text-gray-900 mb-6 px-4">Start Your Project</h3>
                <ContactForm source="services_hero" />
              </div>
            </div>

            {/* People Overlay */}
            <div className="absolute -bottom-10 -right-20 w-[400px] h-[400px] pointer-events-none opacity-20 hidden xl:block -z-10">
              <Image src="/images/agency-hero-people.png" alt="Our Team" fill className="object-contain" />
            </div>
          </div>
        </div>
      </section>
      <WorkingProcess />
      {/* Services Main Grid */}
      <section className="pb-15 pt-10 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row h-[800px] md:h-[600px] gap-2 md:gap-3">
          {services.map((service, i) => {
            const isActive = activeIndex === i;
            return (
              <div
                key={i}
                style={{ flex: isActive ? "8 8 0%" : "1 1 0%" }}
                className={`group relative overflow-hidden rounded-4xl transition-all duration-800 ease-[cubic-bezier(0.25,1,0.5,1)] cursor-pointer shadow-xl`}
                onClick={() => setActiveIndex(i)}
                onMouseEnter={() => setActiveIndex(i)}
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className={`object-cover transition-all duration-1200 ${isActive ? 'scale-100 opacity-90' : 'scale-110 opacity-40 grayscale-80'}`}
                />

                {/* Subtle gradient overlays */}
                <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'bg-slate-900/40' : 'bg-slate-900/60'}`} />
                <div className={`absolute inset-0 transition-opacity duration-700 ${isActive ? 'bg-linear-to-r from-slate-900/90 via-slate-900/50 to-transparent' : 'bg-linear-to-b from-slate-900/80 via-transparent to-slate-900/80'}`} />

                {/* Expanded Content */}
                <div className={`absolute inset-0 flex flex-col justify-between p-8 md:p-12 lg:p-16 transition-all duration-700 delay-100 ${isActive ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>

                  {/* Top Right Label */}
                  <div className="flex justify-end w-full">
                    <div className="flex items-center gap-3 text-white/90">
                      <span className="text-sm font-medium tracking-wide">{service.title}</span>
                      <Circle className="w-2.5 h-2.5 opacity-80" />
                    </div>
                  </div>

                  {/* Center Content (Left Aligned) */}
                  <div className="w-full max-w-3xl mt-auto mb-auto">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-sans font-bold mb-6 leading-[1.1] tracking-tight">
                      {service.title === "Custom Web Solutions" ? "WE BUILD AI-PERFECTED DIGITAL FLAGSHIPS" :
                        service.title === "E-Commerce Platforms" ? "HIGH-CONVERSION ENGINES FOR YOUR STOREFRONT" :
                          service.title === "Headless CMS & Blogs" ? "INTUITIVE CONTENT SYSTEMS WITH ZERO CODE" :
                            "PERFORMANCE TUNING FOR 95+ PAGESPEED SCORES"}
                    </h2>
                    <p className="text-gray-100 text-sm md:text-base max-w-xl font-medium leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  {/* Bottom Section */}
                  <div className="w-full mt-auto relative z-10">
                    <div className="h-px w-full bg-white/30 mb-6" />
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 md:gap-0">

                      {/* Explore Button replaces Clients */}
                      {/* Original Link: {service.href} */}
                      <Link
                        href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=Hi, I'm interested in your ${service.title} services.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-all shadow-xl text-sm"
                      >
                        Explore industry solutions <ArrowUpRight className="w-4 h-4" />
                      </Link>

                      {/* Navigation Arrows */}
                      <div className="flex gap-3">
                        <button
                          className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                          onClick={(e) => { e.stopPropagation(); setActiveIndex((i - 1 + services.length) % services.length); }}
                        >
                          <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button
                          className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                          onClick={(e) => { e.stopPropagation(); setActiveIndex((i + 1) % services.length); }}
                        >
                          <ChevronRight className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Floating consultation card */}
                  {i === activeIndex && (
                    <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/3 w-64 bg-white rounded-4xl p-4 shadow-2xl z-30 transition-all duration-700 animate-in slide-in-from-right-8 fade-in ">
                      <div className="relative w-full h-24 rounded-2xl overflow-hidden mb-3">
                        <Image src={service.image} alt="Consultation" fill className="object-cover" />
                      </div>
                      <p className="text-[13px] font-semibold text-gray-900 leading-snug mb-3 pr-2">
                        Receive a complimentary consultation
                      </p>
                      <Link href="/contact" className="text-[14px] font-bold text-[white] no-underline flex items-center gap-1  uppercase tracking-wide pl-9 bg-[#FC6600] hover:bg-[#FC6600]/80 rounded-lg p-2">
                        Book now <ArrowUpRight className="w-3 h-3" />
                      </Link>
                    </div>
                  )}
                </div>

                {/* Collapsed Content */}
                <div className={`absolute inset-0 flex md:flex-col items-center justify-between p-6 transition-all duration-500 ${isActive ? 'opacity-0 pointer-events-none' : 'opacity-100 delay-300'}`}>
                  {/* Top Circle */}
                  <div className="hidden md:flex mt-2">
                    <Circle className="w-3 h-3 text-white/60" />
                  </div>

                  {/* Title for Desktop (Vertical) */}
                  <div className="hidden md:flex flex-1 items-start justify-center w-full mt-10">
                    <h3 className="text-white/90 font-bold tracking-wide text-xl whitespace-nowrap group-hover:text-white transition-colors" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
                      {service.title}
                    </h3>
                  </div>

                  {/* Title for Mobile (Horizontal) */}
                  <div className="flex md:hidden flex-1 items-center justify-start w-full">
                    <h3 className="text-white/90 font-medium tracking-wide text-sm">
                      {service.title}
                    </h3>
                  </div>

                  {/* Plus Icon */}
                  <div className="w-10 h-10 shrink-0 rounded-full border border-white/30 flex items-center justify-center text-white/70 group-hover:text-white group-hover:border-white/80 group-hover:bg-white/10 transition-all duration-300 md:mb-2">
                    <Plus className="w-5 h-5 font-light" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}

// ─── DATA ────────────────────────────────────────────────────────────────────

const webSteps = [
  {
    num: 1,
    title: "PROJECT LAUNCH",
    desc: "We start by learning what has and hasn't worked. We take time to learn about your company, your business strategy, and the goods or services you provide.",
    img: "/images/process/web-1.jpg",
  },
  {
    num: 2,
    title: "REFRESHING BRAND",
    desc: "Whether your brand is just being developed or well-established, our team can help you in defining your strategy because we know that it drives the entire design process.",
    img: "/images/process/web-2.jpg",
  },
  {
    num: 3,
    title: "WIREFRAMING & PROTOTYPING",
    desc: "The design team at A2V develops the site layout and sitectures while the graphics design process is in full swing in order to give the project structure and a clear path for its development.",
    img: "/images/process/web-3.jpg",
  },
  {
    num: 4,
    title: "DESIGN CREATION",
    desc: "Working alongside the design plan, our development team constructs the components that will give functionality to your website and creates applications to the site.",
    img: "/images/process/web-4.jpg",
  },
  {
    num: 5,
    title: "CONTENT CREATION",
    desc: "Content is developed using your brand voice to describe your goods or services and take users through your new website. Every piece of copy is keyword-based and SEO-optimised.",
    img: "/images/process/web-5.jpg",
  },
  {
    num: 6,
    title: "DEVELOPMENT",
    desc: "Our engineering team builds the product leveraging the latest technologies including Next.js, Node.js, and headless CMS solutions for a performant, scalable digital experience.",
    img: "/images/process/web-6.jpg",
  },
  {
    num: 7,
    title: "TESTING",
    desc: "We rigorously test across browsers, devices, and screen sizes. Speed optimisation and quality assurance are conducted before any asset is handed off or launched.",
    img: "/images/process/web-7.jpg",
  },
  {
    num: 8,
    title: "LAUNCH",
    desc: "Go live with confidence. Our team manages the full deployment, monitors performance post-launch, and ensures everything runs flawlessly from day one.",
    img: "/images/process/web-8.jpg",
  },
];

const graphicSteps = [
  {
    num: 1,
    title: "BRAND DISCOVERY",
    desc: "We dive deep into your brand values, audience, and competitive landscape to understand what makes your business unique and what your visual identity needs to communicate.",
    img: "/images/process/graphic-1.jpg",
  },
  {
    num: 2,
    title: "MOOD BOARDING",
    desc: "We curate visual references, colour palettes, and typographic directions, collaborating with you to establish a clear creative direction before any design work begins.",
    img: "/images/process/graphic-2.jpg",
  },
  {
    num: 3,
    title: "CONCEPT DEVELOPMENT",
    desc: "Our designers develop multiple distinct concepts, exploring different visual languages and approaches that align with your brand strategy and communication goals.",
    img: "/images/process/graphic-3.jpg",
  },
  {
    num: 4,
    title: "DESIGN REFINEMENT",
    desc: "Based on your feedback, we refine the chosen direction — perfecting proportions, colour relationships, and typography until every element works in harmony.",
    img: "/images/process/graphic-4.jpg",
  },
  {
    num: 5,
    title: "ASSET PRODUCTION",
    desc: "We produce a comprehensive suite of assets — logos, icons, illustrations, and templates — delivered in every format you need for digital and print use.",
    img: "/images/process/graphic-5.jpg",
  },
  {
    num: 6,
    title: "BRAND GUIDELINES",
    desc: "A complete brand guidelines document is produced, giving your team a clear rulebook to maintain visual consistency across every touchpoint.",
    img: "/images/process/graphic-6.jpg",
  },
];

const marketingSteps = [
  {
    num: 1,
    title: "AUDIT & ANALYSIS",
    desc: "We analyse your current digital footprint — SEO rankings, ad performance, social engagement, and conversion funnels — to identify exactly where the biggest opportunities lie.",
    img: "/images/process/marketing-1.jpg",
  },
  {
    num: 2,
    title: "STRATEGY BUILD",
    desc: "Using data from the audit, we build a tailored marketing strategy defining your channels, messaging, budget allocation, and KPIs for measurable growth.",
    img: "/images/process/marketing-2.jpg",
  },
  {
    num: 3,
    title: "CAMPAIGN CREATION",
    desc: "Our creative and media teams develop compelling campaigns — from ad copy and creatives to landing pages — all optimised for maximum performance.",
    img: "/images/process/marketing-3.jpg",
  },
  {
    num: 4,
    title: "LAUNCH & ACTIVATE",
    desc: "Campaigns go live across your chosen channels. We manage every detail of the launch, ensuring targeting, bidding, and scheduling are set up for peak performance.",
    img: "/images/process/marketing-4.jpg",
  },
  {
    num: 5,
    title: "OPTIMISE & SCALE",
    desc: "We monitor performance in real time, running continuous A/B tests, refining targeting, and reallocating budget to the highest-performing channels and creatives.",
    img: "/images/process/marketing-5.jpg",
  },
  {
    num: 6,
    title: "REPORT & GROW",
    desc: "Monthly performance reports keep you fully informed. We translate data into clear insights and recommendations, using every cycle to compound growth.",
    img: "/images/process/marketing-6.jpg",
  },
];

const aiSteps = [
  { num: 1, title: "AI STRATEGY", desc: "We begin by understanding your business goals and identifying high-impact AI opportunities within your organization.", img: "/images/process/ai-1.jpg" },
  { num: 2, title: "DATA PREPARATION", desc: "Our team audits and prepares your data, ensuring it's structured and ready for training advanced machine learning models.", img: "/images/process/ai-2.jpg" },
  { num: 3, title: "MODEL DEVELOPMENT", desc: "We build and train custom AI models using state-of-the-art frameworks tailored to your specific requirements.", img: "/images/process/ai-3.jpg" },
  { num: 4, title: "INTEGRATION & TESTING", desc: "The AI solutions are seamlessly integrated into your workflow and rigorously tested for accuracy and performance.", img: "/images/process/ai-4.jpg" },
  { num: 5, title: "DEPLOY & OPTIMISE", desc: "We deploy the solution and continuously monitor performance, refining the models to deliver ongoing value and growth.", img: "/images/process/ai-5.jpg" }
];

// ─── STEP ITEM ────────────────────────────────────────────────────────────────

function StepItem({ step, isLast }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="relative flex items-start gap-0"
      style={{ minHeight: 280 }}
    >
      {/* Left: tube + circle track */}
      <div className="relative flex flex-col items-center" style={{ width: 140, flexShrink: 0 }}>
        {/* Top connector tube */}
        <div
          style={{
            width: 36,
            background: "rgba(0,0,0,0.1)",
            height: 40,
            flexShrink: 0,
          }}
        />

        {/* Concentric ring frame */}
        <div
          style={{
            position: "relative",
            width: 140,
            height: 140,
            flexShrink: 0,
            transition: "transform 0.8s cubic-bezier(0.16,1,0.3,1), opacity 0.8s",
            opacity: visible ? 1 : 0,
            transform: visible ? "scale(1)" : "scale(0.85)",
          }}
        >
          {/* Outer ring */}
          <div style={{
            position: "absolute", inset: 0,
            borderRadius: "50%",
            background: "rgba(0,0,0,0.05)",
          }} />
          {/* Middle ring */}
          <div style={{
            position: "absolute", inset: 10,
            borderRadius: "50%",
            background: "#FC6600",
            boxShadow: "inset 0 4px 15px rgba(0,0,0,0.15)",
          }} />
          {/* Inner ring */}
          <div style={{
            position: "absolute", inset: 20,
            borderRadius: "50%",
            background: "rgba(0,0,0,0.1)",
          }} />
          {/* Photo */}
          <div style={{
            position: "absolute", inset: 26,
            borderRadius: "50%",
            overflow: "hidden",
            background: "rgba(0,0,0,0.4)",
          }}>
            <img
              src={step.img}
              alt={step.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={(e) => {
                e.target.style.display = "none";
                e.target.parentElement.style.background = "linear-gradient(135deg, #eee, #ccc)";
              }}
            />
          </div>
          {/* Step number badge */}
          <div style={{
            position: "absolute",
            right: 0,
            bottom: 10,
            width: 32,
            height: 32,
            borderRadius: "50%",
            background: "#111",
            color: "#fff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 800,
            fontSize: 12,
            border: "2px solid #FC6600",
            zIndex: 5,
            fontFamily: "var(--font-public-sans), sans-serif",
          }}>{step.num}</div>
        </div>

        {/* Bottom connector tube */}
        {!isLast && (
          <div style={{
            width: 36,
            background: "rgba(0,0,0,0.1)",
            flexGrow: 1,
            minHeight: 80,
          }} />
        )}
      </div>

      {/* Right: text content */}
      <div
        style={{
          paddingTop: 45,
          paddingLeft: 20,
          transition: "opacity 0.8s 0.2s, transform 0.8s 0.2s cubic-bezier(0.16,1,0.3,1)",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateX(0)" : "translateX(30px)",
        }}
      >
        <h3 style={{
          fontWeight: 800,
          fontSize: 22,
          color: "#111",
          letterSpacing: "-0.5px",
          marginBottom: 10,
          lineHeight: 1.1,
          fontFamily: "var(--font-public-sans), sans-serif",
        }}>{step.title}</h3>
        <p style={{
          fontSize: 14,
          color: "rgba(0,0,0,0.6)",
          lineHeight: 1.7,
          maxWidth: 380,
          fontFamily: "var(--font-public-sans), sans-serif",
        }}>{step.desc}</p>
      </div>
    </div>
  );
}

// ─── PROCESS SECTION ─────────────────────────────────────────────────────────

function ProcessSection({ title, subtitle, desc, steps, ctaLabel, ctaHref }) {
  return (
    <section style={{ background: "#ffffff", position: "relative" }} className="pb-20">
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(circle at 70% 50%, rgba(252,102,0,0.03) 0%, transparent 60%)",
        pointerEvents: "none",
      }} />

      <div style={{
        maxWidth: 580,
        margin: "0 auto",
        padding: "0 32px",
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        gap: 0,
        position: "relative",
        zIndex: 1,
      }}
        className="flex-col md:flex-row"
      >
        {/* ── LEFT: sticky panel ── */}
        <div style={{
          width: "100%",
          flexShrink: 0,
          position: "sticky",
          top: 100,
          alignSelf: "flex-start",
          paddingTop: 80,
          paddingBottom: 40,
          paddingRight: 40,
        }}
          className="md:w-[320px]"
        >
          <p style={{
            fontSize: 11,
            fontWeight: 700,
            letterSpacing: 3,
            textTransform: "uppercase",
            color: "#FC6600",
            marginBottom: 16,
            fontFamily: "var(--font-public-sans), sans-serif",
          }}>{subtitle}</p>

          <h2 style={{
            fontWeight: 900,
            fontSize: 42,
            lineHeight: 1.0,
            color: "#111",
            letterSpacing: "-1.5px",
            textTransform: "uppercase",
            marginBottom: 24,
            whiteSpace: "pre-line",
            fontFamily: "var(--font-public-sans), sans-serif",
          }}>{title}</h2>

          <p style={{
            fontSize: 14,
            color: "rgba(0,0,0,0.6)",
            lineHeight: 1.7,
            marginBottom: 36,
            maxWidth: 260,
            fontFamily: "var(--font-public-sans), sans-serif",
          }}>{desc}</p>

          <a
            href={ctaHref || "/contact"}
            style={{
              display: "inline-block",
              padding: "12px 28px",
              border: "2px solid #111",
              color: "#111",
              fontWeight: 800,
              fontSize: 11,
              letterSpacing: 2,
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "all 0.3s",
              fontFamily: "var(--font-public-sans), sans-serif",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#111";
              e.currentTarget.style.color = "#ffffff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#111";
            }}
          >{ctaLabel || "LET'S GET STARTED"}</a>
        </div>

        {/* ── RIGHT: scrolling steps ── */}
        <div style={{
          flex: 1,
          paddingTop: 60,
          paddingBottom: 80,
          paddingLeft: 20,
          borderLeft: "2px solid rgba(0,0,0,0.05)",
        }}>
          {steps.map((step, i) => (
            <StepItem key={step.num} step={step} isLast={i === steps.length - 1} />
          ))}
        </div>
      </div>
    </section>
  );
}

function WebDevProcess() {
  return (
    <ProcessSection
      subtitle="Our Approach"
      title="WEB DEVELOPMENT PROCESS"
      desc="As a premier website development IT solution company, our team uses a multi-prong approach with the development team involved from the start."
      steps={webSteps}
      ctaLabel="LET'S GET STARTED"
      ctaHref="/contact"
    />
  );
}

function GraphicDesignProcess() {
  return (
    <ProcessSection
      subtitle="Our Creative Process"
      title="GRAPHIC DESIGN PROCESS"
      desc="Great design starts with deep understanding. Our graphic design process is collaborative, strategic, and built to create visual identities."
      steps={graphicSteps}
      ctaLabel="LET'S GET STARTED"
      ctaHref="/contact"
    />
  );
}

function DigitalMarketingProcess() {
  return (
    <ProcessSection
      subtitle="Our Growth Process"
      title="DIGITAL MARKETING PROCESS"
      desc="Data-driven from day one. Our marketing process is built around measurable results — every strategy is guided by real performance data."
      steps={marketingSteps}
      ctaLabel="LET'S GET STARTED"
      ctaHref="/contact"
    />
  );
}

function AiConsultancyProcess() {
  return (
    <ProcessSection
      subtitle="Our Innovation Process"
      title="AI CONSULTANCY PROCESS"
      desc="From strategy to deployment, our AI consultancy process ensures that intelligent solutions are built on a foundation of data and business value."
      steps={aiSteps}
      ctaLabel="LET'S GET STARTED"
      ctaHref="/contact"
    />
  );
}