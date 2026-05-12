const fs = require('fs');
const path = require('path');

const baseDir = path.join(process.cwd(), 'app', '(users)', 'services');

const categories = {
  'web-development': [
    'custom-web-solutions',
    'ecommerce-development',
    'cms-development',
    'pwa-development',
    'portal-development',
    'api-integration',
    'maintenance',
    'spa-development',
    'cloud-solutions',
    'web-security'
  ],
  'graphic-designing': [
    'brand-identity',
    'ui-ux-design',
    'print-social-media',
    'motion-graphics',
    'package-design',
    'illustration',
    'presentation-design',
    'infographics',
    '3d-rendering',
    'logo-animation'
  ],
  'digital-marketing': [
    'seo-optimization',
    'social-media-marketing',
    'ppc-paid-ads',
    'content-marketing',
    'email-marketing',
    'influencer-marketing',
    'online-reputation-management',
    'ecommerce-marketing',
    'marketing-automation',
    'conversion-rate-optimization'
  ],
  'ai': [
    'consulting',
    'development',
    'machine-learning',
    'nlp',
    'computer-vision',
    'automation',
    'chatbots',
    'data-science',
    'predictive-analytics',
    'modernization'
  ]
};

const template = (category, subcategory) => {
  const componentName = subcategory.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join('') + 'Page';
  const displayName = subcategory.split('-').join(' ');

  return '"use client";\n\n' +
    'import React from "react";\n' +
    'import Contact from "@/app/components/Contact";\n' +
    'import ServiceStatsCards from "@/app/components/ServiceStatsCards";\n' +
    'import FeaturedProjects from "@/app/components/FeaturedProjects";\n' +
    'import ServiceFAQ from "@/app/components/ServiceFAQ";\n' +
    'import Testimonials from "@/app/components/Testimonials";\n\n' +
    'export default function ' + componentName + '() {\n' +
    '  return (\n' +
    '    <main className="min-h-screen bg-white">\n' +
    '      {/* Hero Section with Stats */}\n' +
    '      <ServiceStatsCards source="' + subcategory + '" />\n\n' +
    '      {/* Featured Projects Section */}\n' +
    '      <FeaturedProjects source="' + subcategory + '" />\n\n' +
    '      {/* Service specific "About" or Details section */}\n' +
    '      <section className="py-20 bg-gray-50">\n' +
    '        <div className="max-w-7xl mx-auto px-6 text-center">\n' +
    '          <h2 className="text-4xl font-bold text-gray-900 mb-8">Expert ' + displayName + ' Services</h2>\n' +
    '          <p className="text-xl text-gray-600 max-w-3xl mx-auto">\n' +
    '            We deliver top-tier ' + displayName + ' solutions tailored to your business needs,\n' +
    '            ensuring maximum impact and growth in the digital landscape.\n' +
    '          </p>\n' +
    '        </div>\n' +
    '      </section>\n\n' +
    '      <Testimonials />\n' +
    '      \n' +
    '      <ServiceFAQ source="' + subcategory + '" />\n\n' +
    '      <Contact />\n' +
    '    </main>\n' +
    '  );\n' +
    '}\n';
};

Object.entries(categories).forEach(([category, subcategories]) => {
  const categoryPath = path.join(baseDir, category);
  subcategories.forEach(sub => {
    const subPath = path.join(categoryPath, sub);
    const filePath = path.join(subPath, 'page.js');

    if (!fs.existsSync(subPath)) {
      console.log('Creating directory: ' + subPath);
      fs.mkdirSync(subPath, { recursive: true });
    }

    if (!fs.existsSync(filePath)) {
      console.log('Creating missing page: ' + filePath);
      fs.writeFileSync(filePath, template(category, sub));
    } else {
      console.log('Page already exists: ' + filePath);
    }
  });
});
