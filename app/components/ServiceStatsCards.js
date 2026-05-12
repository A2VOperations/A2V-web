"use client";

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowRight } from 'lucide-react';

// ─── All content lives here — one place to update ───────────────────────────
const contentMap = {
  "seo-optimization": {
    cards: [
      {
        title: "Data-Driven Strategy",
        description: "Every recommendation is backed by real search data, competitor analysis, and technical audits — not guesswork.",
        href: "#"
      },
      {
        title: "Page-One Results",
        description: "Our proven on-page and off-page methodology consistently delivers first-page rankings for competitive keywords.",
        href: "#"
      },
      {
        title: "Transparent Reporting",
        description: "Monthly rank tracking reports with clear metrics so you always know exactly how your investment is performing.",
        href: "#"
      }
    ],
    stat: {
      number: "350%",
      label: "Avg. Traffic Boost",
      description: "Our clients see an average 350% organic traffic increase within the first 6 months of our SEO campaigns."
    }
  },

  "social-media-marketing": {
    cards: [
      {
        title: "Community First",
        description: "We build genuine relationships between your brand and audience through authentic content and real-time engagement.",
        href: "#"
      },
      {
        title: "Viral Content Engine",
        description: "Platform-native Reels, TikToks, and carousels engineered to maximise reach, shares, and organic growth.",
        href: "#"
      },
      {
        title: "Performance Analytics",
        description: "Deep monthly reports on engagement rate, follower growth, and sentiment to continuously refine your strategy.",
        href: "#"
      }
    ],
    stat: {
      number: "8.5x",
      label: "Engagement Boost",
      description: "Our clients achieve an average 8.5x increase in engagement rate within the first quarter of social media management."
    }
  },

  "ppc-paid-ads": {
    cards: [
      {
        title: "Precision Targeting",
        description: "Advanced audience layering and intent signals ensure your ads reach customers at the exact moment they're ready to buy.",
        href: "#"
      },
      {
        title: "ROI-Obsessed Management",
        description: "We optimise bids, creatives, and audiences daily — every decision is measured against your ROAS and CPA targets.",
        href: "#"
      },
      {
        title: "Full Funnel Coverage",
        description: "From top-of-funnel awareness to high-intent retargeting, we cover every stage of the customer journey.",
        href: "#"
      }
    ],
    stat: {
      number: "5.2x",
      label: "Average ROAS",
      description: "Our clients consistently achieve a 5.2x return on ad spend across Google, Meta, and LinkedIn campaigns."
    }
  },

  "brand-identity": {
    cards: [
      {
        title: "Strategic Branding",
        description: "We begin with deep brand discovery sessions to ensure every visual decision aligns with your business goals and audience.",
        href: "#"
      },
      {
        title: "Award-Winning Design",
        description: "Our designers craft iconic logos and visual systems that have won international recognition and dominated competitive markets.",
        href: "#"
      },
      {
        title: "100% Original Work",
        description: "Every concept is created from scratch — no templates, no stock, no shortcuts. Your brand identity is truly yours.",
        href: "#"
      }
    ],
    stat: {
      number: "500+",
      label: "Brands Created",
      description: "Over 500 global brands trust us to craft their visual identity from scratch, across 25+ countries worldwide."
    }
  },

  "ui-ux-design": {
    cards: [
      {
        title: "User-Centric Process",
        description: "Every design decision is backed by user research, heatmaps, and real behavioral data — not assumptions or trends.",
        href: "#"
      },
      {
        title: "High-Fidelity Prototypes",
        description: "Clickable prototypes that feel like the final product, validated with real users before a single line of code is written.",
        href: "#"
      },
      {
        title: "Accessible By Default",
        description: "All our interfaces meet WCAG 2.1 AA standards, ensuring your product is usable by every member of your audience.",
        href: "#"
      }
    ],
    stat: {
      number: "85%",
      label: "Engagement Lift",
      description: "Our clients see an average 85% increase in user engagement and 40% reduction in bounce rate after our UX redesigns."
    }
  },

  "custom-web-solutions": {
    cards: [
      {
        title: "Tailored Architecture",
        description: "We build custom-tailored web applications designed to solve complex business problems and scale with your growth.",
        href: "#"
      },
      {
        title: "99.9% Uptime",
        description: "Enterprise-grade hosting and architecture ensure your platform stays online during peak traffic and high demand.",
        href: "#"
      },
      {
        title: "Pure Engineering",
        description: "No templates, no shortcuts. Every line of code is optimized for performance, security, and long-term maintainability.",
        href: "#"
      }
    ],
    stat: {
      number: "15ms",
      label: "Latency Average",
      description: "Our custom backend architectures achieve industry-leading response times for the most demanding global applications."
    }
  },

  "cms-development": {
    cards: [
      {
        title: "Headless Content",
        description: "Publish once, distribute everywhere. Our headless CMS solutions give you ultimate frontend flexibility.",
        href: "#"
      },
      {
        title: "Enterprise WordPress",
        description: "Optimized, secure, and custom-built WordPress themes and plugins for high-performance marketing teams.",
        href: "#"
      },
      {
        title: "Automated SEO",
        description: "Built-in tools for automated meta-data, schema markup, and sitemap generation right inside your dashboard.",
        href: "#"
      }
    ],
    stat: {
      number: "4x",
      label: "Faster Publishing",
      description: "Our clients report a 4x increase in content publishing speed after switching to our optimized CMS workflows."
    }
  },

  "ecommerce-development": {
    cards: [
      {
        title: "Conversion First",
        description: "Every pixel and click is engineered to reduce friction and guide your customers toward a successful purchase.",
        href: "#"
      },
      {
        title: "Omnichannel Sync",
        description: "Real-time inventory and order synchronization across your physical stores, website, and marketplaces.",
        href: "#"
      },
      {
        title: "Secure Payments",
        description: "PCI-compliant payment architectures that support every major gateway and cryptocurrency globally.",
        href: "#"
      }
    ],
    stat: {
      number: "120%",
      label: "Revenue Growth",
      description: "Our e-commerce clients see an average 120% increase in revenue within the first year of launching our stores."
    }
  },

  "web-application": {
    cards: [
      {
        title: "SaaS Expertise",
        description: "We specialize in building multi-tenant SaaS platforms with robust subscription management and user partitioning.",
        href: "#"
      },
      {
        title: "Real-time Dashboards",
        description: "Reactive interfaces that update instantly with live data from your IoT devices, servers, or user interactions.",
        href: "#"
      },
      {
        title: "Cloud Infrastructure",
        description: "Scalable deployments on AWS, Azure, or Google Cloud with automated auto-scaling and load balancing.",
        href: "#"
      }
    ],
    stat: {
      number: "10M+",
      label: "Monthly Requests",
      description: "Our enterprise web applications handle over 10 million monthly API requests with 99.99% technical reliability."
    }
  },

  "api-integration": {
    cards: [
      {
        title: "Custom Middleware",
        description: "We build the invisible bridge between your systems, ensuring data flows perfectly and securely between every app.",
        href: "#"
      },
      {
        title: "Third-party Logic",
        description: "Deep integrations with Salesforce, SAP, HubSpot, and thousands of other SaaS tools using custom connectors.",
        href: "#"
      },
      {
        title: "Webhook Engines",
        description: "High-performance event-driven systems that trigger actions across your tech stack in milliseconds.",
        href: "#"
      }
    ],
    stat: {
      number: "50+",
      label: "Systems Integrated",
      description: "We've successfully integrated over 50 different enterprise platforms into single, cohesive business ecosystems."
    }
  },

  "maintenance-support": {
    cards: [
      {
        title: "24/7 Monitoring",
        description: "Proactive uptime and performance monitoring that alerts our engineers to potential issues before they become outages.",
        href: "#"
      },
      {
        title: "Security Patching",
        description: "Immediate deployment of security patches and OS updates to protect your platform from the latest digital threats.",
        href: "#"
      },
      {
        title: "Emergency Response",
        description: "Guaranteed response times and dedicated emergency support lines for your mission-critical digital assets.",
        href: "#"
      }
    ],
    stat: {
      number: "99.99%",
      label: "Platform Uptime",
      description: "Our managed support clients enjoy industry-leading uptime through proactive optimization and monitoring."
    }
  },
  "print-social-media": {
    cards: [
      {
        title: "Visual Impact",
        description: "Every asset we design is crafted to stop the scroll, command attention, and communicate your brand's value instantly.",
        href: "#"
      },
      {
        title: "Print-Ready Quality",
        description: "All print files are delivered at professional resolution with full bleed, crop marks, and CMYK colour profiles ready for production.",
        href: "#"
      },
      {
        title: "Multi-Platform Export",
        description: "Every design is exported optimised for every format — from Instagram Stories to billboard prints to digital ad banners.",
        href: "#"
      }
    ],
    stat: {
      number: "1,200+",
      label: "Assets Delivered",
      description: "We've delivered over 1,200 premium print and digital assets to brands across retail, hospitality, and technology sectors."
    }
  },
  "consulting": {
    cards: [
      {
        title: "Strategic Advisory",
        description: "Align your business goals with cutting-edge AI capabilities through our expert consulting frameworks.",
        href: "#"
      },
      {
        title: "Readiness Audits",
        description: "Comprehensive evaluation of your data infrastructure and organizational readiness for AI adoption.",
        href: "#"
      },
      {
        title: "Ethical AI Governance",
        description: "Implementing robust frameworks to ensure your AI solutions are transparent, fair, and compliant.",
        href: "#"
      }
    ],
    stat: {
      number: "40%",
      label: "Efficiency Gain",
      description: "Our consulting clients identify an average of 40% operational efficiency gains through strategic AI integration."
    }
  },
  "development": {
    cards: [
      {
        title: "Custom AI Engines",
        description: "Proprietary AI models built from scratch to solve your unique business challenges and data needs.",
        href: "#"
      },
      {
        title: "Full-Stack Integration",
        description: "Seamlessly embedding AI capabilities into your existing software ecosystem for immediate impact.",
        href: "#"
      },
      {
        title: "Scalable Deployment",
        description: "Enterprise-grade deployment pipelines ensuring your AI solutions perform at scale without latency.",
        href: "#"
      }
    ],
    stat: {
      number: "12wk",
      label: "Avg. Build Time",
      description: "From concept to production-ready AI application in an average of just 12 weeks with our agile process."
    }
  },
  "machine-learning": {
    cards: [
      {
        title: "Adaptive Learning",
        description: "Models that improve continuously as they process more data, ensuring long-term accuracy and value.",
        href: "#"
      },
      {
        title: "Deep Learning Ops",
        description: "Sophisticated neural networks managed by robust MLOps practices for maximum reliability.",
        href: "#"
      },
      {
        title: "Pattern Recognition",
        description: "Uncovering complex relationships in your data that human analysis would never find.",
        href: "#"
      }
    ],
    stat: {
      number: "98%",
      label: "Model Accuracy",
      description: "Our custom machine learning models achieve an average of 98% prediction accuracy for industry-specific tasks."
    }
  },
  "nlp": {
    cards: [
      {
        title: "Contextual NLU",
        description: "Natural Language Understanding that goes beyond keywords to grasp the true intent of your customers.",
        href: "#"
      },
      {
        title: "Semantic Analysis",
        description: "Deep analysis of unstructured text data to identify trends, sentiment, and actionable insights.",
        href: "#"
      },
      {
        title: "Automated Extraction",
        description: "Turning thousands of documents into structured, searchable data points in seconds.",
        href: "#"
      }
    ],
    stat: {
      number: "1M+",
      label: "Words Processed",
      description: "Our NLP engines process over 1 million words daily for global brands in legal, finance, and healthcare."
    }
  },
  "computer-vision": {
    cards: [
      {
        title: "Real-time Detection",
        description: "Identifying objects and events in live video streams with millisecond latency for instant action.",
        href: "#"
      },
      {
        title: "Spatial Intelligence",
        description: "Analyzing physical spaces to optimize retail layouts, traffic flow, and warehouse efficiency.",
        href: "#"
      },
      {
        title: "Visual Quality Control",
        description: "Automated inspection systems that catch defects invisible to the human eye on production lines.",
        href: "#"
      }
    ],
    stat: {
      number: "0.1mm",
      label: "Detection Precision",
      description: "Our visual inspection systems detect manufacturing defects as small as 0.1mm with perfect consistency."
    }
  },
  "automation": {
    cards: [
      {
        title: "Cognitive Workflows",
        description: "Moving beyond RPA to automation that makes decisions and handles exceptions intelligently.",
        href: "#"
      },
      {
        title: "Hyper-Efficiency",
        description: "Redesigning business processes from the ground up to leverage AI-native automation capabilities.",
        href: "#"
      },
      {
        title: "Error Elimination",
        description: "Replacing manual data handling with AI engines that provide 100% accuracy and auditability.",
        href: "#"
      }
    ],
    stat: {
      number: "65%",
      label: "OpEx Reduction",
      description: "Our automation solutions deliver an average 65% reduction in operational expenditure for core back-office tasks."
    }
  },
  "chatbots": {
    cards: [
      {
        title: "LLM-Powered Chat",
        description: "Conversational agents that provide human-like support using your private enterprise knowledge base.",
        href: "#"
      },
      {
        title: "Lead Capture Bots",
        description: "24/7 sales assistants that qualify leads and book meetings directly into your team's calendars.",
        href: "#"
      },
      {
        title: "Multi-modal Support",
        description: "AI assistants that can understand text, voice, and images to provide a truly helpful experience.",
        href: "#"
      }
    ],
    stat: {
      number: "70%",
      label: "Query Deflection",
      description: "Our intelligent chatbots successfully resolve 70% of customer queries without any human intervention."
    }
  },
  "data-science": {
    cards: [
      {
        title: "Discovery Lab",
        description: "Exploring your data to find new revenue streams and opportunities for innovation.",
        href: "#"
      },
      {
        title: "Statistical Rigor",
        description: "Applying advanced mathematical models to ensure your insights are statistically significant and reliable.",
        href: "#"
      },
      {
        title: "Feature Engineering",
        description: "Building the perfect data inputs to power your most critical AI and machine learning models.",
        href: "#"
      }
    ],
    stat: {
      number: "5TB+",
      label: "Data Analyzed",
      description: "We process and analyze over 5 terabytes of raw business data daily to uncover competitive advantages."
    }
  },
  "predictive-analytics": {
    cards: [
      {
        title: "Future Modeling",
        description: "Building scenarios for the next 12-36 months based on deep historical and market data trends.",
        href: "#"
      },
      {
        title: "Risk Forecasting",
        description: "Identifying potential supply chain, financial, or market risks before they impact your bottom line.",
        href: "#"
      },
      {
        title: "Dynamic Pricing",
        description: "AI models that adjust pricing in real-time based on demand, competition, and user behavior.",
        href: "#"
      }
    ],
    stat: {
      number: "22%",
      label: "Margin Increase",
      description: "Predictive pricing and inventory models deliver an average 22% increase in net profit margins."
    }
  },
  "modernization": {
    cards: [
      {
        title: "AI Layering",
        description: "Adding intelligence to legacy ERP and CRM systems without the need for a full rip-and-replace.",
        href: "#"
      },
      {
        title: "Cloud-Native AI",
        description: "Migrating legacy logic to scalable cloud AI services for better performance and lower costs.",
        href: "#"
      },
      {
        title: "Tech Stack Audit",
        description: "Identifying where legacy technical debt is holding back your AI innovation and how to fix it.",
        href: "#"
      }
    ],
    stat: {
      number: "3x",
      label: "System Lifespan",
      description: "We extend the useful life of legacy core systems by 3x through intelligent AI modernization layers."
    }
  }
};

// ─── Component ────────────────────────────────────────────────────────────────
const ServiceStatsCards = ({
  // Pass a `source` key (e.g. "seo-optimization") to auto-populate content,
  // OR pass `cards` + `stat` directly to override/extend.
  source,
  cards: cardsProp,
  stat: statProp
}) => {
  const resolved = source ? contentMap[source] : null;
  const cards = cardsProp ?? resolved?.cards ?? [];
  const stat  = statProp  ?? resolved?.stat  ?? {};

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
    /* -mt-16 pulls the bar up so it overlaps the bottom of the hero */
    <div className="relative z-30 -mt-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 shadow-2xl">

        {/* Desktop Feature Cards */}
        <div className="hidden md:contents">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group bg-white border-r border-gray-100 last:border-r-0 p-8 flex flex-col gap-5 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <h3 className="text-xl font-extrabold text-[#1A1A1A] leading-tight">
                {card.title}
              </h3>
              <p className="text-gray-500 text-sm leading-relaxed flex-1">
                {card.description}
              </p>
              <a
                href={card.href || "#"}
                className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center mt-auto shrink-0 group-hover:bg-[#FC6600] transition-colors duration-300"
              >
                <ArrowRight className="w-4 h-4 text-white" />
              </a>
            </div>
          ))}
        </div>

        {/* Mobile Slider Feature Cards */}
        <div className="block md:hidden col-span-1 bg-white pb-10">
          <Slider {...sliderSettings}>
            {cards.map((card, index) => (
              <div key={index} className="px-2 pt-4">
                <div className="bg-white p-8 flex flex-col gap-5 border border-gray-100 shadow-sm min-h-[250px]">
                  <h3 className="text-xl font-extrabold text-[#1A1A1A] leading-tight">
                    {card.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {card.description}
                  </p>
                  <a
                    href={card.href || "#"}
                    className="w-10 h-10 rounded-full bg-[#1A1A1A] flex items-center justify-center mt-auto shrink-0 transition-colors duration-300"
                  >
                    <ArrowRight className="w-4 h-4 text-white" />
                  </a>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        {/* Orange Stat Card */}
        <div className="bg-[#FC6600] p-8 flex flex-col justify-between relative overflow-hidden">
          {/* Decorative dots */}
          <div className="flex justify-end gap-2 mb-4">
            <span className="w-3 h-3 rounded-full border-2 border-white/50" />
            <span className="w-3 h-3 rounded-full bg-white/80" />
          </div>

          <div className="space-y-3">
            <div className="flex items-baseline gap-3 flex-wrap">
              <span className="text-5xl font-black text-white leading-none">
                {stat.number}
              </span>
              <span className="text-xl font-bold text-white/90">
                {stat.label}
              </span>
            </div>
            <p className="text-white/85 text-sm font-semibold leading-relaxed">
              {stat.description}
            </p>
          </div>

          {/* Subtle bg circle */}
          <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-white/10 pointer-events-none" />
        </div>

      </div>
    </div>
  );
};

export default ServiceStatsCards;
