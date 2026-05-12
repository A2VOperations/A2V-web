"use client";

import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const contentMap = {
  "seo-optimization": {
    title: "ORGANIC <span class='text-[#FC6600]'>DOMINANCE</span>",
    subtitle: "Proven methodologies to climb the search rankings and stay there.",
    features: [
      { title: "Technical SEO", desc: "Optimizing site speed, crawlability, and schema markup for search engines.", icon: "⚙️" },
      { title: "Keyword Intelligence", desc: "In-depth research to target high-intent search queries that convert.", icon: "🎯" },
      { title: "Content Strategy", desc: "Creating and refining content to rank for the most competitive keywords.", icon: "✍️" },
      { title: "Authority Building", desc: "High-quality backlink strategies from trusted publications and partners.", icon: "🔗" },
      { title: "Rank Tracking", desc: "Daily monitoring of your keyword positions and visibility across all regions.", icon: "📊" },
      { title: "Conversion Focus", desc: "Turning your organic traffic into real customers through UX optimization.", icon: "💰" }
    ]
  },
  "social-media-marketing": {
    title: "COMMUNITY <span class='text-[#FC6600]'>FIRST</span>",
    subtitle: "Strategic presence across all major platforms where your customers live.",
    features: [
      { title: "Community Management", desc: "Engaging with your audience in real-time to build deep brand loyalty.", icon: "💬" },
      { title: "Content Strategy", desc: "Viral-worthy content tailored for Instagram Reels, TikTok, and LinkedIn.", icon: "🎬" },
      { title: "Social Growth", desc: "Data-backed tactics to increase your follower base organically and rapidly.", icon: "📈" },
      { title: "Influencer Outreach", desc: "Connecting your brand with creators who share your values and audience.", icon: "📣" },
      { title: "Social Listening", desc: "Monitoring trends and mentions to stay ahead of the conversation.", icon: "👂" },
      { title: "Paid Social Boost", desc: "Strategic ad spend to amplify your best performing organic content.", icon: "🚀" }
    ]
  },
  "ppc-paid-ads": {
    title: "PRECISION <span class='text-[#FC6600]'>TARGETING</span>",
    subtitle: "Stop wasting budget. Start capturing intent and scaling revenue.",
    features: [
      { title: "Search Ads (Google/Bing)", desc: "Capturing customers right when they search for your products or services.", icon: "🔍" },
      { title: "Social Ads (Meta/LinkedIn)", desc: "Disruptive creative and laser-focused audience targeting to build leads.", icon: "👥" },
      { title: "Retargeting Systems", desc: "Smart follow-up campaigns that bring back lost visitors and close the sale.", icon: "🔄" },
      { title: "Shopping & E-comm Ads", desc: "Optimized product feeds and high-performance Shopping campaigns.", icon: "🛍️" },
      { title: "Conversion Tracking", desc: "Deep technical implementation of pixels and GTM to track every cent.", icon: "🎯" },
      { title: "Performance Reports", desc: "Monthly deep-dives into ROAS, CPA, and attribution to guide strategy.", icon: "📊" }
    ]
  },
  "brand-identity": {
    title: "BEYOND THE <span class='text-[#FC6600]'>LOGO</span>",
    subtitle: "A brand is an emotional connection. We build the visual bridge.",
    features: [
      { title: "Iconic Logo Design", desc: "Timeless symbols that encapsulate your brand's essence in a single mark.", icon: "✒️" },
      { title: "Color Psychology", desc: "Strategic palettes designed to evoke specific emotions and trust.", icon: "🎨" },
      { title: "Typography Systems", desc: "Custom font pairings that give your brand a unique and legible voice.", icon: "Aa" },
      { title: "Brand Guidelines", desc: "Comprehensive rules ensuring your brand looks perfect everywhere.", icon: "📘" },
      { title: "Visual Assets", desc: "Ready-to-use patterns, icons, and textures for your marketing material.", icon: "🖼️" },
      { title: "Brand Storytelling", desc: "Defining the tone and message that resonates with your core audience.", icon: "📖" }
    ]
  },
  "ui-ux-design": {
    title: "EXPERIENCE <span class='text-[#FC6600]'>ENGINEERING</span>",
    subtitle: "Designing for psychology, performance, and pure joy.",
    features: [
      { title: "User Research", desc: "Deep diving into user behavior, heatmaps, and data to understand the 'why'.", icon: "🔬" },
      { title: "Interactive Prototypes", desc: "High-fidelity clickable mockups that feel like the final product.", icon: "🖱️" },
      { title: "Design Systems", desc: "Scalable component libraries (Atomic Design) for consistent UI.", icon: "🧩" },
      { title: "Mobile-First Design", desc: "Interfaces that perform flawlessly on every screen size and device.", icon: "📱" },
      { title: "User Testing", desc: "Validating designs with real users to eliminate friction and hurdles.", icon: "🧪" },
      { title: "Interface Animation", desc: "Subtle micro-interactions that make the experience feel alive.", icon: "✨" }
    ]
  },
  "print-social-media": {
    title: "OMNICHANNEL <span class='text-[#FC6600]'>CREATIVITY</span>",
    subtitle: "Consistent quality from the screen to the physical world.",
    features: [
      { title: "Social Media Kits", desc: "Optimized templates for Instagram, LinkedIn, and Facebook feeds.", icon: "📱" },
      { title: "Packaging Design", desc: "Premium product packaging that stands out on the shelf.", icon: "📦" },
      { title: "Business Stationery", desc: "High-end business cards and letterheads that command respect.", icon: "💼" },
      { title: "Marketing Collateral", desc: "Brochures, flyers, and catalogs that drive real offline interest.", icon: "📄" },
      { title: "Event Signage", desc: "Large-format graphics and booth designs for trade shows and events.", icon: "🎪" },
      { title: "Digital Ad Creatives", desc: "High-CTR banners for Google Display and social media campaigns.", icon: "🖼️" }
    ]
  },
  "consulting": {
    title: "AI STRATEGY <span class='text-[#FC6600]'>ADVISORY</span>",
    subtitle: "Strategic roadmaps to integrate AI into your business DNA.",
    features: [
      { title: "Opportunity Mapping", desc: "Identifying the highest impact areas for AI integration in your company.", icon: "🗺️" },
      { title: "Tech Stack Audit", desc: "Evaluating your current infrastructure for AI readiness and scaling.", icon: "🏗️" },
      { title: "Ethical Frameworks", desc: "Building transparent and fair AI policies for your organization.", icon: "⚖️" },
      { title: "ROI Projection", desc: "Detailed financial modeling of AI investments and efficiency gains.", icon: "📈" },
      { title: "Governance Models", desc: "Setting up internal teams and processes to manage AI long-term.", icon: "👥" },
      { title: "Risk Mitigation", desc: "Identifying and solving for data privacy and security in AI systems.", icon: "🛡️" }
    ]
  },
  "development": {
    title: "CUSTOM AI <span class='text-[#FC6600]'>ENGINEERING</span>",
    subtitle: "Proprietary models and systems built for your specific data.",
    features: [
      { title: "Model Training", desc: "Developing custom neural networks trained on your industry data.", icon: "🧠" },
      { title: "API Development", desc: "Building robust interfaces to connect AI capabilities to your apps.", icon: "🔌" },
      { title: "Edge Deployment", desc: "Running complex AI models locally on devices for instant response.", icon: "📱" },
      { title: "MLOps Pipelines", desc: "Automated systems for deploying and monitoring AI at scale.", icon: "🚀" },
      { title: "Data Engineering", desc: "Preparing and cleaning massive datasets for model training.", icon: "🏗️" },
      { title: "UI Integration", desc: "Designing intuitive interfaces for interacting with complex AI outputs.", icon: "🖱️" }
    ]
  },
  "machine-learning": {
    title: "ADAPTIVE <span class='text-[#FC6600]'>ALGORITHMS</span>",
    subtitle: "Systems that learn from every data point to drive innovation.",
    features: [
      { title: "Supervised Learning", desc: "Training models to predict outcomes based on historical patterns.", icon: "📚" },
      { title: "Unsupervised Lab", desc: "Discovering hidden structures and segments in your raw data.", icon: "🧪" },
      { title: "Deep Learning", desc: "Multi-layered neural networks for complex pattern recognition.", icon: "🕸️" },
      { title: "Model Tuning", desc: "Optimizing hyperparameters to squeeze every bit of accuracy out.", icon: "🎯" },
      { title: "Anomaly Detection", desc: "Identifying outliers and potential issues in real-time streams.", icon: "🚨" },
      { title: "Reinforcement Hub", desc: "Systems that learn through trial and error to optimize tasks.", icon: "🎮" }
    ]
  },
  "nlp": {
    title: "COGNITIVE <span class='text-[#FC6600]'>LANGUAGE</span>",
    subtitle: "Breaking the barrier between human speech and machine logic.",
    features: [
      { title: "Text Analysis", desc: "Extracting meaning and intent from unstructured business text.", icon: "📖" },
      { title: "Sentiment Engine", desc: "Understanding the emotional tone of customer feedback at scale.", icon: "❤️" },
      { title: "Entity Recognition", desc: "Automatically identifying names, dates, and places in documents.", icon: "🏷️" },
      { title: "Custom Translation", desc: "Platform-specific translation models that understand your jargon.", icon: "🌐" },
      { title: "Voice-to-Text", desc: "High-accuracy transcription services for meetings and support.", icon: "🎙️" },
      { title: "Text Generation", desc: "Automated content creation using tuned large language models.", icon: "✍️" }
    ]
  },
  "computer-vision": {
    title: "VISUAL <span class='text-[#FC6600]'>INTELLIGENCE</span>",
    subtitle: "Automated perception for a safer and more efficient business.",
    features: [
      { title: "Object Detection", desc: "Identifying and counting items in real-time video or images.", icon: "📦" },
      { title: "Visual Inspection", desc: "High-speed quality control that never blinks or gets tired.", icon: "👁️" },
      { title: "Motion Tracking", desc: "Analyzing movement patterns in physical retail or industrial spaces.", icon: "🏃" },
      { title: "Facial Recognition", desc: "Secure and fast identification for access and personalization.", icon: "👤" },
      { title: "OCR Automation", desc: "Converting images of text and handwriting into digital data.", icon: "📄" },
      { title: "Scene Analysis", desc: "Understanding the context and environment of a visual input.", icon: "🏙️" }
    ]
  },
  "automation": {
    title: "HYPER <span class='text-[#FC6600]'>AUTOMATION</span>",
    subtitle: "Intelligent workflows that work while you sleep.",
    features: [
      { title: "Intelligent RPA", desc: "Robotic process automation enhanced with cognitive AI decision-making.", icon: "🤖" },
      { title: "Zero-Touch Ops", desc: "Building business processes that require zero manual intervention.", icon: "⚡" },
      { title: "Error Correction", desc: "Self-healing workflows that detect and fix mistakes automatically.", icon: "🛠️" },
      { title: "Scalable Logic", desc: "Automation that can handle 10x the volume without 10x the staff.", icon: "📊" },
      { title: "Legacy Bridging", desc: "Connecting old software to modern AI automation systems.", icon: "🌉" },
      { title: "Document AI", desc: "Automating the processing of invoices, forms, and contracts.", icon: "📑" }
    ]
  },
  "chatbots": {
    title: "CONVERSATIONAL <span class='text-[#FC6600]'>SUPPORT</span>",
    subtitle: "24/7 engagement that feels like a real conversation.",
    features: [
      { title: "Knowledge Retrieval", desc: "Chatbots that answer questions based on your internal docs.", icon: "📚" },
      { title: "Human Handoff", desc: "Seamless transition from AI to human agents for complex issues.", icon: "🤝" },
      { title: "Lead Qualification", desc: "Asking the right questions to find your best potential customers.", icon: "🎯" },
      { title: "Multi-modal Chat", desc: "Assistants that can process images and voice in the chat.", icon: "🎤" },
      { title: "Sentiment Routing", desc: "Detecting frustrated users and prioritizing them for help.", icon: "⚠️" },
      { title: "Auto-Appointment", desc: "Booking meetings directly into calendars via the chat interface.", icon: "📅" }
    ]
  },
  "data-science": {
    title: "SCIENTIFIC <span class='text-[#FC6600]'>DISCOVERY</span>",
    subtitle: "Mining your data for gold and competitive advantages.",
    features: [
      { title: "Big Data Processing", desc: "Managing and analyzing datasets too large for standard tools.", icon: "💾" },
      { title: "Statistical Modeling", desc: "Proving your business hypotheses with mathematical rigor.", icon: "📐" },
      { title: "Feature Extraction", desc: "Building the key variables that drive your business success.", icon: "🏗️" },
      { title: "Cluster Analysis", desc: "Finding natural groupings in your customer or product data.", icon: "🗂️" },
      { title: "A/B Testing Lab", desc: "Scientific validation of new features and marketing ideas.", icon: "🧪" },
      { title: "Trend Projection", desc: "Identifying macro-shifts in your market before they happen.", icon: "🔭" }
    ]
  },
  "predictive-analytics": {
    title: "FUTURE <span class='text-[#FC6600]'>FORECASTING</span>",
    subtitle: "Stay three steps ahead of the market and your competition.",
    features: [
      { title: "Demand Prediction", desc: "Forecasting future sales to optimize inventory and staffing.", icon: "📉" },
      { title: "Churn Analysis", desc: "Identifying customers likely to leave before they actually do.", icon: "🏃" },
      { title: "Lifetime Value", desc: "Predicting the long-term profitability of every new lead.", icon: "💎" },
      { title: "Risk Scoring", desc: "Quantifying the probability of financial or operational issues.", icon: "🎲" },
      { title: "Propensity Models", desc: "Predicting which customers are most likely to buy which product.", icon: "🛒" },
      { title: "Market Simulation", desc: "Testing 'what-if' scenarios in a safe digital environment.", icon: "🎮" }
    ]
  },
  "modernization": {
    title: "LEGACY <span class='text-[#FC6600]'>UPGRADE</span>",
    subtitle: "Modern intelligence for your established systems.",
    features: [
      { title: "AI Layering", desc: "Injecting intelligence into your current ERP or CRM system.", icon: "💉" },
      { title: "Cloud Migration", desc: "Moving legacy logic to modern, AI-ready cloud platforms.", icon: "☁️" },
      { title: "Architecture Redesign", desc: "Refactoring old code to support modern ML and AI pipelines.", icon: "🏗️" },
      { title: "Security Hardening", desc: "Using AI to detect threats in your older software systems.", icon: "🛡️" },
      { title: "API Facades", desc: "Creating modern interfaces for your old mainframe or database.", icon: "🔌" },
      { title: "Performance Boost", desc: "Optimizing old bottlenecks with modern AI-driven logic.", icon: "⚡" }
    ]
  }
};

const ServiceFeatureGrid = ({ source }) => {
  const data = contentMap[source] || contentMap["seo-optimization"];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="py-24 px-6 bg-[#fcfcfc]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter"
            dangerouslySetInnerHTML={{ __html: data.title }}
          />
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            {data.subtitle}
          </p>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-gray-100">
          {data.features.map((feature, i) => (
            <div 
              key={i}
              className="bg-white p-12 border-r border-b border-gray-100 flex flex-col items-start text-left hover:shadow-2xl hover:z-10 transition-all duration-300 group"
            >
              {/* Number Circle */}
              <div className="w-16 h-16 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center text-xl font-bold mb-10 group-hover:bg-[#FC6600] transition-colors duration-300">
                {`0${i + 1}`}
              </div>

              {/* Title */}
              <h3 className="text-xl font-black text-[#1A1A1A] mb-5 uppercase tracking-tighter leading-tight group-hover:text-[#FC6600] transition-colors">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-500 leading-relaxed text-[15px] mb-10 flex-1">
                {feature.desc}
              </p>

              {/* Read More Button */}
              <a
                href="#"
                className="inline-flex items-center justify-center px-8 py-3 text-xs font-black uppercase tracking-widest border border-gray-400 text-[#1A1A1A] hover:bg-[#FC6600] hover:text-white hover:border-[#FC6600] transition-all duration-300"
              >
                Read More
              </a>
            </div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="block md:hidden pb-10 mt-8">
          <Slider {...sliderSettings}>
            {data.features.map((feature, i) => (
              <div key={i} className="px-2">
                <div className="bg-white p-10 flex flex-col items-start text-left shadow-lg border border-gray-100 h-full min-h-[380px]">
                  {/* Number Circle */}
                  <div className="w-16 h-16 rounded-full bg-[#1A1A1A] text-white flex items-center justify-center text-xl font-bold mb-8">
                    {`0${i + 1}`}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-black text-[#1A1A1A] mb-4 uppercase tracking-tighter leading-tight">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 leading-relaxed text-sm mb-8 flex-1">
                    {feature.desc}
                  </p>

                  {/* Read More Button */}
                  <a
                    href="#"
                    className="inline-flex mt-auto items-center justify-center px-6 py-3 text-xs font-black uppercase tracking-widest bg-[#FC6600] text-white"
                  >
                    Read More
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default ServiceFeatureGrid;
