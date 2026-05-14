export const siteConfig = {
  brandName: "A2V Groups",
  phone: process.env.NEXT_PUBLIC_PHONE || "+91 78275 01356",
  email: process.env.NEXT_PUBLIC_EMAIL || "a2vgroups1@gmail.com",
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
      category: "Web Development",
      options: [
        "Next.js Web Development",
        "Custom Web Solutions",
        "E-commerce Development",
        "CMS Development",
        "Web Portal Development",
        "SPA Development",
      ],
    },
    {
      category: "Digital Marketing",
      options: [
        "SEO Optimization",
        "Technical & Local SEO",
        "Social Media Marketing",
        "PPC & Paid Ads",
        "Influencer Marketing",
        "Content Marketing",
        "Digital Strategy & Consultation",
      ],
    },
    {
      category: "Creative & Design",
      options: [
        "Brand & Identity",
        "UI/UX Experience",
        "Logo Designing",
        "Infographics Designing",
        "Print & Social Media Design",
        "Graphic Designing",
      ],
    },
    {
      category: "Software & AI",
      options: [
        "App Development",
        "CRM Development",
        "AI Consultancy",
        "AI Development",
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Intelligent Automation",
        "Conversational AI (Chatbots)",
        "Data Science",
        "Predictive Analytics",
        "Infrastructure Modernization",
      ],
    },
    {
      category: "Other",
      options: ["General Inquiry"],
    },
  ],
};
