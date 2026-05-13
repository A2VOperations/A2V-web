"use client";

import React from 'react';
import { Check, ArrowRight, Play } from 'lucide-react';

const contentMap = {
  "seo-optimization": {
    title: "TRANSFORM YOUR SEARCH VISIBILITY INTO MEASURABLE REVENUE!!",
    subtitle: "We are search specialists dedicated to building technical authority and sustainable organic growth for global brands.",
    description: "In an ever-changing search landscape, those who adapt survive, but those who innovate thrive. We help you dominate the search engine result pages by aligning your technical infrastructure with user intent and search engine algorithms.",
    bullets: [
      "Technical SEO Audits & Implementation",
      "Strategic Keyword & Competitor Research",
      "High-Authority Link Building Systems"
    ],
    image1: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
  },
  "social-media-marketing": {
    title: "BUILD A BRAND THAT PEOPLE TALK ABOUT, EVERY SINGLE DAY!!",
    subtitle: "Strategic social media presence that turns followers into a loyal community and advocates for your brand.",
    description: "Social media is no longer just about posting; it's about participation. We craft platform-native strategies that resonate with your audience's psychology, driving engagement that translates into real business value.",
    bullets: [
      "Platform-Native Content Production",
      "Active Community Management & Growth",
      "Influencer & Creator Partnerships"
    ],
    image1: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1974&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1557838923-2985c318be48?q=80&w=2031&auto=format&fit=crop"
  },
  "ppc-paid-ads": {
    title: "SCALE YOUR BUSINESS WITH PRECISION-TARGETED ADVERTISING!!",
    subtitle: "Performance-driven paid media strategies focused on maximizing ROAS and minimizing customer acquisition costs.",
    description: "Stop guessing and start growing. Our data-obsessed approach to PPC ensures every dollar of your ad spend is working toward a specific conversion goal, using advanced targeting and high-converting creatives.",
    bullets: [
      "Google & Bing Search Dominance",
      "Multi-Platform Paid Social Scaling",
      "Advanced Retargeting & Funnel Setup"
    ],
    image1: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?q=80&w=2070&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop"
  },
  "brand-identity": {
    title: "CRAFT AN IDENTITY THAT DEFINES YOUR BUSINESS CATEGORY!!",
    subtitle: "Strategic branding that communicates your values, builds trust, and makes you impossible to ignore in a crowded market.",
    description: "Your brand is the emotional bridge between your business and your customer. We design visual ecosystems that tell your story with clarity and impact, ensuring consistency across every touchpoint of your brand journey.",
    bullets: [
      "Iconic Logo & Mark Development",
      "Comprehensive Brand Style Guides",
      "Strategic Market Positioning"
    ],
    image1: "https://images.unsplash.com/photo-1626785774573-4b799315345d?q=80&w=2071&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1572044162444-ad60f128bdea?q=80&w=2070&auto=format&fit=crop"
  },
  "ui-ux-design": {
    title: "ENGINEERING DIGITAL EXPERIENCES THAT USERS TRULY LOVE!!",
    subtitle: "User-centric design focused on psychology, accessibility, and high-performance interaction patterns.",
    description: "Design is not just how it looks; it's how it works. We combine deep user research with creative intuition to build interfaces that eliminate friction, increase conversion, and provide a seamless journey for your users.",
    bullets: [
      "High-Fidelity Interactive Prototyping",
      "Atomic Design Systems & Libraries",
      "User Research & Data Validation"
    ],
    image1: "https://images.unsplash.com/photo-1586717791821-3f44a563eb4c?q=80&w=2070&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1559028012-481c04fa702d?q=80&w=1936&auto=format&fit=crop"
  },
  "print-social-media": {
    title: "OMNICHANNEL DESIGN THAT COMMANDS ATTENTION EVERYWHERE!!",
    subtitle: "Premium visual assets designed for the screen, the shelf, and the physical world with absolute consistency.",
    description: "Whether it's a social media kit or premium product packaging, we ensure your visual language is translated perfectly across every medium. High-impact designs that drive engagement and build brand recognition.",
    bullets: [
      "Social Media Kits & Ad Creatives",
      "Premium Packaging & Print Assets",
      "Environmental & Event Graphics"
    ],
    image1: "https://images.unsplash.com/photo-1605152276897-4f618f831968?q=80&w=2070&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1541462608141-ad603aae355a?q=80&w=2070&auto=format&fit=crop"
  },
  "cms-development": {
    title: "EMPOWER YOUR TEAM WITH SEAMLESS CONTENT CONTROL!!",
    subtitle: "Intuitive, fast, and secure content management systems tailored to your specific publishing and editorial workflows.",
    description: "Stop struggling with outdated tools. We build CMS platforms that give you the power to manage your digital presence with ease, featuring high-speed frontends and robust, customizable backends that scale with you.",
    bullets: [
      "Headless CMS Architectures",
      "Custom WordPress Development",
      "Internal Publishing Workflows"
    ],
    image1: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2069&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?q=80&w=1974&auto=format&fit=crop"
  },
  "custom-web-solutions": {
    title: "BUILDING THE ARCHITECTURE OF YOUR DIGITAL FUTURE!!",
    subtitle: "Elite engineering for complex business problems, SaaS platforms, and enterprise-grade web applications.",
    description: "When off-the-shelf solutions aren't enough, we build the engine that drives your business forward. Scalable, secure, and performant web architecture designed to handle massive growth and complex data interactions.",
    bullets: [
      "Custom Framework Development",
      "Scalable Backend Engineering",
      "Cloud-Native Deployments"
    ],
    image1: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  "ecommerce-development": {
    title: "HIGH-CONVERSION ENGINES FOR YOUR DIGITAL STOREFRONT!!",
    subtitle: "Building fast, secure, and intuitive e-commerce stores that maximize average order value and customer lifetime value.",
    description: "E-commerce is more than just a cart; it's an experience. We engineer every touchpoint of the shopping journey to reduce friction and build trust, ensuring your storefront is optimized for both speed and conversion.",
    bullets: [
      "Custom Checkout & Cart UX",
      "Omnichannel Inventory Sync",
      "Payment Gateway Integrations"
    ],
    image1: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=2089&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
  },
  "consulting": {
    title: "STRATEGIC AI ROADMAPS FOR ENTERPRISE SCALE!!",
    subtitle: "Expert guidance to help you navigate the complex landscape of artificial intelligence and identify high-impact opportunities.",
    description: "AI is not a one-size-fits-all solution. We help you define a clear AI strategy that aligns with your business goals, ensuring you invest in technologies that deliver real competitive advantage and ROI.",
    bullets: [
      "AI Readiness Assessments",
      "Strategic Implementation Roadmaps",
      "Ethics & Compliance Frameworks"
    ],
    image1: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=2070&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2070&auto=format&fit=crop"
  },
  "development": {
    title: "BUILDING CUSTOM AI SOLUTIONS FROM THE GROUND UP!!",
    subtitle: "End-to-end development of proprietary AI applications, models, and integrated systems for your business.",
    description: "We don't just use AI; we build it. Our engineering team develops custom neural networks and integrated platforms that solve your specific operational challenges and open new revenue streams.",
    bullets: [
      "Custom Neural Network Design",
      "Proprietary Model Training",
      "Seamless API Integrations"
    ],
    image1: "https://images.unsplash.com/photo-1620712943543-bcc4628c6750?q=80&w=2070&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=2070&auto=format&fit=crop"
  },
  "machine-learning": {
    title: "DATA-DRIVEN ALGORITHMS THAT LEARN AND ADAPT!!",
    subtitle: "Sophisticated machine learning models that extract patterns from your data to drive smarter business decisions.",
    description: "Transform your raw data into a predictive engine. We build ML models that continuously improve over time, providing you with the insights needed to optimize operations and personalize user experiences.",
    bullets: [
      "Supervised & Unsupervised Learning",
      "Deep Learning Architectures",
      "Model Optimization & Scaling"
    ],
    image1: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=2070&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=2070&auto=format&fit=crop"
  },
  "nlp": {
    title: "UNDERSTANDING THE LANGUAGE OF YOUR BUSINESS!!",
    subtitle: "Advanced Natural Language Processing to analyze sentiment, automate document processing, and improve communication.",
    description: "Unlock the value hidden in your text data. Our NLP solutions help you understand customer feedback at scale, automate complex document workflows, and build intuitive language-based interfaces.",
    bullets: [
      "Sentiment Analysis Systems",
      "Automated Document Extraction",
      "Custom Translation & Summarization"
    ],
    image1: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?q=80&w=2071&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop"
  },
  "computer-vision": {
    title: "GIVING YOUR MACHINES THE POWER OF SIGHT!!",
    subtitle: "Cutting-edge computer vision systems for automated inspection, security monitoring, and visual data analysis.",
    description: "Automate visual tasks with superhuman accuracy. We develop computer vision models that can identify objects, track movements, and detect anomalies in real-time, enhancing safety and efficiency.",
    bullets: [
      "Object Detection & Tracking",
      "Facial Recognition Systems",
      "Visual Quality Inspection"
    ],
    image1: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=2070&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1531746790731-6c087fdec0ed?q=80&w=2070&auto=format&fit=crop"
  },
  "automation": {
    title: "INTELLIGENT AUTOMATION THAT SCALES PRODUCTION!!",
    subtitle: "Combining AI with RPA to create hyper-efficient workflows that eliminate manual bottlenecks and reduce errors.",
    description: "Move beyond simple scripts. Our intelligent automation solutions learn from your processes, handling complex decision-making tasks and freeing your team for higher-value strategic work.",
    bullets: [
      "Cognitive Process Automation",
      "Workflow Optimization Systems",
      "Intelligent Data Entry"
    ],
    image1: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
  },
  "chatbots": {
    title: "CONVERSATIONAL AI THAT BUILDS RELATIONSHIPS!!",
    subtitle: "Advanced chatbots and virtual assistants that provide 24/7 support, lead generation, and personalized engagement.",
    description: "Deliver instant support without the overhead. Our AI-powered conversational agents use natural language understanding to resolve queries, qualify leads, and provide a seamless customer experience.",
    bullets: [
      "Custom LLM-Powered Chatbots",
      "Omnichannel Support Integration",
      "Lead Qualification Workflows"
    ],
    image1: "https://images.unsplash.com/photo-1531746790731-6c087fdec0ed?q=80&w=2070&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=2078&auto=format&fit=crop"
  },
  "data-science": {
    title: "UNCOVERING HIDDEN PATTERNS IN BIG DATA!!",
    subtitle: "Scientific analysis of complex data structures to extract actionable insights and drive innovation.",
    description: "Data is only valuable if you can understand it. Our data scientists use advanced statistical methods and visualization tools to help you uncover trends that inform your most critical business decisions.",
    bullets: [
      "Advanced Statistical Modeling",
      "Interactive Data Visualizations",
      "Big Data Processing Systems"
    ],
    image1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop"
  },
  "predictive-analytics": {
    title: "FORECASTING THE FUTURE OF YOUR BUSINESS!!",
    subtitle: "Using historical data and machine learning to predict future outcomes and optimize your long-term strategy.",
    description: "Don't just react to the market; anticipate it. Our predictive analytics models help you forecast demand, identify potential risks, and optimize pricing before your competitors even see the change coming.",
    bullets: [
      "Demand & Sales Forecasting",
      "Customer Churn Prediction",
      "Risk Mitigation Analytics"
    ],
    image1: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1518186239717-2e9098d6966c?q=80&w=2070&auto=format&fit=crop"
  },
  "modernization": {
    title: "FUTURE-PROOFING YOUR LEGACY INFRASTRUCTURE!!",
    subtitle: "Upgrading your existing systems with AI capabilities to improve performance, security, and scalability.",
    description: "Your legacy systems don't have to be a burden. We help you integrate modern AI layers into your existing stack, breathing new life into old applications and ensuring you stay ahead of the digital curve.",
    bullets: [
      "Legacy System AI Integration",
      "Cloud Migration & Scaling",
      "Performance Optimization"
    ],
    image1: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    image2: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
  }
};

const ServiceAbout = ({
  source,
  title: titleProp,
  subtitle: subtitleProp,
  description: descriptionProp,
  bullets: bulletsProp,
  buttonText = "Schedule An Appointment",
  image1: image1Prop,
  image2: image2Prop,
  videoUrl = "#",
  onButtonClick = () => {}
}) => {
  const resolved = source ? contentMap[source] : null;
  
  const title = titleProp ?? resolved?.title ?? "Ready To Bring Bigger, Better, Faster & Stronger Projects Than Ever!!";
  const subtitle = subtitleProp ?? resolved?.subtitle ?? "We are a representative operator providing full range of service in the sphere of Digital, Graphics & AI solutions worldwide.";
  const description = descriptionProp ?? resolved?.description ?? "Yet those that embrace change are thriving, building bigger, better, faster, and stronger products than ever before. You are helping lead the charge; we can help you build on your past and prepare future changing faster than ever before.";
  const bullets = bulletsProp ?? resolved?.bullets ?? [
    "Quality Control System, 100% Satisfaction Guarantee",
    "Highly Professional Staff, Accurate Testing Processes",
    "Unrivalled workmanship, Professional and Qualified"
  ];
  const image1 = image1Prop ?? resolved?.image1 ?? "https://plus.unsplash.com/premium_photo-1723600994013-efd5df7ca908?q=80&w=1170&auto=format&fit=crop";
  const image2 = image2Prop ?? resolved?.image2 ?? "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop";

  return (
    <section className="py-24 px-6 md:px-12 lg:px-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Overlapping Images */}
        <div className="relative group">
          <div className="relative w-full aspect-[1/1.1]">
            
            {/* Background Image (Large, Left) */}
            <div className="absolute left-0 bottom-0 w-[85%] h-[85%] rounded-2xl overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img 
                src={image1} 
                alt="Service Experience" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            
            {/* Foreground Image (Medium, Right) */}
            <div className="absolute right-0 top-0 w-[75%] h-[80%] rounded-2xl overflow-hidden shadow-2xl z-10 border-[12px] border-white transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2">
              <img 
                src={image2} 
                alt="Service Detail" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>

            {/* Play Button Card (Top Left of main image) */}
            <div className="absolute top-[10%] left-[5%] w-32 h-32 bg-[#FC6600] z-20 flex items-center justify-center shadow-xl rounded-lg animate-pulse-slow">
              <a 
                href={videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-16 h-16 bg-white rounded-full flex items-center justify-center cursor-pointer hover:scale-125 transition-all duration-300 shadow-lg group/play"
              >
                <Play className="w-6 h-6 text-[#FC6600] fill-[#FC6600] ml-1 group-hover/play:scale-110 transition-transform" />
              </a>
            </div>

            {/* Accent Orange Block (Bottom Center) */}
            <div className="absolute -bottom-6 left-[30%] w-40 h-28 bg-[#FC6600] z-20 shadow-2xl rounded-lg hidden md:block"></div>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="flex flex-col gap-8">
          <div className="space-y-4">
            <div className="text-xl md:text-4xl xl:text-5xl font-extrabold text-[#1A1A1A] leading-[1.1] tracking-tight">
              {title}
            </div>
          </div>
          
          <div className="space-y-6">
            <p className="text-xl font-bold text-gray-900 border-l-4 border-[#FC6600] pl-6 py-2">
              {subtitle}
            </p>
            
            <p className="text-gray-500 text-lg leading-relaxed">
              {description}
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-5 pt-4">
            {bullets.map((bullet, index) => (
              <div key={index} className="flex items-start gap-4 group/item">
                <div className="mt-1 w-7 h-7 rounded-full border-2 border-[#FC6600] flex items-center justify-center shrink-0 group-hover/item:bg-[#FC6600] transition-colors duration-300">
                  <Check className="w-4 h-4 text-[#FC6600] group-hover/item:text-white transition-colors duration-300" />
                </div>
                <span className="text-gray-800 font-bold text-base md:text-lg tracking-wide uppercase">
                  {bullet}
                </span>
              </div>
            ))}
          </div>
          
          <div className="pt-8">
            <button 
              onClick={onButtonClick}
              className="group relative flex items-center gap-6 bg-[#1A1A1A] text-white pr-10 pl-4 py-4 rounded-lg font-bold text-lg overflow-hidden transition-all duration-300 hover:shadow-[0_10px_20px_rgba(252,102,0,0.3)] hover:-translate-y-1 active:translate-y-0"
            >
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:rotate-[360deg] group-hover:bg-[#FC6600]">
                <ArrowRight className="w-6 h-6 text-[#1A1A1A] group-hover:text-white" />
              </div>
              <span className="relative z-10">{buttonText}</span>
              <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAbout;
