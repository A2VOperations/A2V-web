"use client";

import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { FaInstagram, FaTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa";
import { siteConfig } from "./config";

export default function Topbar() {
  return (
    <div className="w-full bg-white border-b border-black/10">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-2 flex items-center justify-between text-[12px] sm:text-[14px] text-gray-800">

        {/* Left Info */}
        <div className="flex items-center gap-4 flex-wrap">

          <span className="flex items-center gap-1.5 hover:text-orange-500 transition">
            <FiMapPin className="text-[16px]" />
            {siteConfig.address}
          </span>

          <span className="hidden sm:flex items-center gap-1.5 hover:text-orange-500 transition">
            <FiMail className="text-[16px]" />
            {siteConfig.email}
          </span>

          <span className="hidden md:flex items-center gap-1.5 hover:text-orange-500 transition">
            <FiPhone className="text-[16px]" />
            {siteConfig.phone}
          </span>
        </div>

        {/* Right Links */}
        <div className="flex items-center gap-4">

          {["Help", "Support", "Faqs"].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-orange-500 transition font-medium"
            >
              {item}
            </a>
          ))}

          {/* Socials */}
          <div className="hidden sm:flex items-center gap-3 ml-2">

            <a href={siteConfig.socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
              <FaInstagram className="text-[14px]" />
            </a>

            <a href={siteConfig.socialLinks.x} target="_blank" rel="noopener noreferrer" className="hover:text-orange-500 transition">
              <FaTwitter className="text-[14px]" />
            </a>

            <a href={siteConfig.socialLinks.linkedin} className="hover:text-orange-500 transition">
              <FaLinkedinIn className="text-[14px]" />
            </a>

            <a href={siteConfig.socialLinks.youtube} className="hover:text-orange-500 transition">
              <FaYoutube className="text-[14px]" />
            </a>

          </div>
        </div>

      </div>
    </div>
  );
}