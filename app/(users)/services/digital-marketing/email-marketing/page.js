"use client";

import React from "react";
import Contact from "@/app/components/Contact";
import ServiceStatsCards from "@/app/components/ServiceStatsCards";
import FeaturedProjects from "@/app/components/FeaturedProjects";
import ServiceFAQ from "@/app/components/ServiceFAQ";
import Testimonials from "@/app/components/Testimonials";

export default function EmailMarketingPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section with Stats */}
      <ServiceStatsCards source="email-marketing" />

      {/* Featured Projects Section */}
      <FeaturedProjects source="email-marketing" />

      {/* Service specific "About" or Details section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Expert email marketing Services</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We deliver top-tier email marketing solutions tailored to your business needs,
            ensuring maximum impact and growth in the digital landscape.
          </p>
        </div>
      </section>

      <Testimonials />
      
      <ServiceFAQ source="email-marketing" />

      <Contact />
    </main>
  );
}
