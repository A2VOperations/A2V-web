export const siteConfig = {
  brandName: "A2V Groups",
  phone: process.env.NEXT_PUBLIC_PHONE || "+91 1234567890",
  email: process.env.NEXT_PUBLIC_EMAIL || "operation.a2vgroups@gmail.com",
  address: process.env.NEXT_PUBLIC_ADDRESS || "A-Block, 25 Feet Rd, Kamal Vihar, Burari, Delhi, 110084",
  socialLinks: {
    instagram: "https://www.instagram.com/a2vgroups/",
    x: "https://x.com/a2vgroups",
    facebook: "#",
    linkedin: "#",
    youtube: "#",
    whatsapp: `https://wa.me/${(process.env.NEXT_PUBLIC_PHONE || "+91 1234567890").replace(/\D/g, "")}`,
  }
};
