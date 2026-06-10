export const siteConfig = {
  brandName: "A2V Groups",
  phone: process.env.NEXT_PUBLIC_PHONE || "+91 78275 01356",
  email: process.env.NEXT_PUBLIC_EMAIL || "info.a2vgroups@.com",
  address:
    process.env.NEXT_PUBLIC_ADDRESS ||
    "A-Block, 25 Feet Rd, Kamal Vihar, Burari, Delhi, 110084",
  socialLinks: {
    instagram: "https://www.instagram.com/a2vgroups/",
    x: "https://x.com/a2vgroups",
    facebook: "https://www.facebook.com/a2vgroups",
    threads: "https://www.threads.com/@a2vgroups",
    linkedin:
      "https://www.linkedin.com/company/a2v-groups?trk=public_post_feed-actor-name",
    whatsapp: `https://wa.me/${(process.env.NEXT_PUBLIC_PHONE || "+91 78275 01356").replace(/\D/g, "")}`,
  },
  formServices: [
    {
      category: "Core Web Development",
      options: [
        "Next.js Web Apps",
        "Custom Web Solutions",
        "Single Page Applications (SPA)",
        "Progressive Web Apps (PWA)",
        "Custom SaaS Applications",
      ],
    },
    {
      category: "E-Commerce Stores",
      options: [
        "Shopify Development",
        "Custom E-Commerce Storefronts",
        "WooCommerce Integration",
        "Magento Solutions",
        "Payment Gateway Setup",
      ],
    },
    {
      category: "CMS & Web Portals",
      options: [
        "WordPress Development",
        "Headless CMS Integration",
        "Corporate Web Portals",
        "Admin & Client Dashboards",
        "API & Data Integrations",
      ],
    },
    {
      category: "Performance & Security",
      options: [
        "Website Speed Audits",
        "Core Web Vitals Optimization",
        "Web Security Audits",
        "Uptime Monitoring & SLA",
        "Ongoing Maintenance & Support",
      ],
    },
    {
      category: "Other",
      options: ["General Inquiry", "Custom Project Consultation"],
    },
  ],
};
