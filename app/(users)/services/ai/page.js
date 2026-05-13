"use client";

import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/app/config";
import Contact from "@/app/components/Contact";
import Testimonials from "@/app/components/Testimonials";
import ServiceFAQ from "@/app/components/ServiceFAQ";
import FeaturedProjects from "@/app/components/FeaturedProjects";
import {
  Brain,
  Cpu,
  Database,
  Search,
  Zap,
  ShieldCheck,
  Rocket,
  Sparkles,
  Bot,
  LineChart
} from "lucide-react";

const features = [
  {
    title: "AI Strategy",
    description: "Developing comprehensive roadmaps to integrate AI into your existing business processes.",
    icon: <Brain className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Custom LLMs",
    description: "Building and fine-tuning large language models tailored to your specific industry data.",
    icon: <Database className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Process Automation",
    description: "Implementing smart automation that reduces manual effort and increases operational efficiency.",
    icon: <Zap className="w-6 h-6 text-purple-500" />,
  },
  {
    title: "Predictive Insights",
    description: "Leveraging machine learning to forecast trends and make data-driven business decisions.",
    icon: <LineChart className="w-6 h-6 text-purple-500" />,
  },
];

const benefits = [
  {
    id: "01",
    title: "AI Consulting",
    description: "Strategic guidance to help you navigate the complex landscape of artificial intelligence.",
    href: "/services/ai/consulting"
  },
  {
    id: "02",
    title: "AI Development",
    description: "End-to-end development of custom AI solutions that solve real-world business problems.",
    href: "/services/ai/development"
  },
  {
    id: "03",
    title: "Machine Learning",
    description: "Building powerful algorithms that learn from your data to provide actionable insights.",
    href: "/services/ai/machine-learning"
  },
  {
    id: "04",
    title: "NLP Solutions",
    description: "Advanced natural language processing to analyze text, understand sentiment, and automate communication.",
    href: "/services/ai/nlp"
  },
  {
    id: "05",
    title: "Computer Vision",
    description: "Implementing visual recognition systems for automated inspection, security, and data extraction.",
    href: "/services/ai/computer-vision"
  },
  {
    id: "06",
    title: "AI Automation",
    description: "Seamlessly integrating AI into your workflows to eliminate bottlenecks and reduce costs.",
    href: "/services/ai/automation"
  },
  {
    id: "07",
    title: "Chatbot Development",
    description: "Creating intelligent, conversational agents that provide 24/7 customer support and engagement.",
    href: "/services/ai/chatbots"
  },
  {
    id: "08",
    title: "Data Science",
    description: "Extracting meaningful patterns from complex datasets to drive innovation and competitive advantage.",
    href: "/services/ai/data-science"
  },
  {
    id: "09",
    title: "Predictive Analytics",
    description: "Using historical data to predict future outcomes and optimize your business strategy.",
    href: "/services/ai/predictive-analytics"
  },
  {
    id: "10",
    title: "AI Modernization",
    description: "Upgrading your legacy systems with modern AI capabilities for a future-ready infrastructure.",
    href: "/services/ai/modernization"
  }
];

const featuredProjects = [
  {
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=800&auto=format&fit=crop",
    categories: ["AI", "Automation"],
    title: "Smart Logistics Optimizer",
    description: "An AI-powered system that optimized delivery routes, reducing fuel costs by 25%.",
    link: "#"
  },
  {
    image: "https://images.unsplash.com/photo-1555255707-c07966088b7b?q=80&w=800&auto=format&fit=crop",
    categories: ["NLP", "Enterprise"],
    title: "Legal Document Analyzer",
    description: "Custom NLP solution that processes thousands of contracts in seconds with 99% accuracy.",
    link: "#"
  }
];

export default function AIPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#121212]">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <span className="text-purple-500 font-bold uppercase tracking-widest text-sm mb-6 block">
              ARTIFICIAL INTELLIGENCE
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Intelligence That <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-blue-500">
                Powers Progress
              </span>
            </h1>
            <p className="text-gray-400 text-xl leading-relaxed mb-12 max-w-2xl">
              We transform complex AI capabilities into scalable business advantages. 
              From strategy to implementation, we build the future of intelligence.
            </p>
            <div className="flex flex-wrap gap-6">
              <Link
                href={siteConfig.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-purple-600 text-white font-bold rounded-sm hover:bg-purple-700 transition-all flex items-center gap-2 group"
              >
                Start AI Project
                <Rocket className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="group">
                <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center mb-6 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-500 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-24 px-6 bg-[#f4f7f8]">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="grid grid-cols-1 lg:grid-cols-2 items-start mb-16">
            <div className="flex gap-6">
              <div className="w-1.5 h-32 bg-purple-600 shrink-0" />
              <div>
                <span className="text-purple-600 font-bold uppercase tracking-widest text-sm mb-4 block">
                  OUR SOLUTIONS
                </span>
                <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                  Next-Gen AI <br /> For Your Business
                </h2>
              </div>
            </div>
            <div className="lg:pt-16">
              <p className="text-gray-500 text-lg leading-relaxed max-w-xl">
                We combine technical depth with industry expertise to deliver 
                AI solutions that don't just innovate, but perform.
              </p>
            </div>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Image Card */}
            <div className="lg:col-span-2 relative group overflow-hidden rounded-sm h-[500px]">
              <Image
                src="https://images.unsplash.com/photo-1620712943543-bcc4628c6750?q=80&w=1200&auto=format&fit=crop"
                alt="AI Research"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-purple-900/20 mix-blend-multiply" />
            </div>

            {benefits.map((benefit) => (
              <div
                key={benefit.id}
                className="bg-white p-12 rounded-sm shadow-sm hover:shadow-xl transition-all"
              >
                <div className="w-14 h-14 bg-purple-600 text-white rounded-full flex items-center justify-center font-bold text-lg mb-8">
                  {benefit.id}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  {benefit.title}
                </h3>
                <p className="text-gray-500 mb-10 leading-relaxed">
                  {benefit.description}
                </p>
                {/* Original Link: {benefit.href} */}
                <Link
                  href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=Hi, I'm interested in ${benefit.title} (AI Services).`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-8 py-2 border-2 border-purple-600 text-purple-600 font-bold hover:bg-purple-600 hover:text-white transition-all text-sm uppercase tracking-wider text-center"
                >
                  Explore
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeaturedProjects source="ai" />
      
      <Testimonials />

      <ServiceFAQ source="ai" />

      <Contact />
    </main>
  );
}
