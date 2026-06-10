"use client";

import { FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import {
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
} from "react-icons/fa";
import { SiThreads } from "react-icons/si";
import { siteConfig } from "./config";

/* ── Phone fade-in / fade-out + icon shake animation styles ── */
const phoneStyles = `
  @keyframes phoneFade {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.15; }
  }
  @keyframes phoneShake {
    0%,  50%, 100% { transform: rotate(0deg); }
    55%             { transform: rotate(18deg); }
    60%             { transform: rotate(-16deg); }
    65%             { transform: rotate(14deg); }
    70%             { transform: rotate(-10deg); }
    75%             { transform: rotate(6deg); }
    80%             { transform: rotate(0deg); }
  }
  .phone-pop {
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }
  .phone-pop .phone-icon {
    display: inline-block;
    animation: phoneShake 3s ease-in-out infinite;
    transform-origin: center;
    color: #f97316;
  }
  .phone-pop .phone-number {
    font-weight: 700;
    letter-spacing: 0.02em;
    display: inline-block;
    animation: phoneFade 2s ease-in-out infinite;
    transition: color 0.2s;
  }
  .phone-pop:hover .phone-number,
  .phone-pop:hover .phone-icon {
    color: #f97316;
    animation-play-state: paused;
  }
`;

export default function Topbar() {
  return (
    <div className="w-full bg-white border-b border-black/10">
      <style>{phoneStyles}</style>
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 py-2 flex items-center justify-between text-[12px] sm:text-[14px] text-gray-800">
        {/* Left Info */}
        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="https://maps.app.goo.gl/BnZidCuiW4mH2ZhQ6"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-orange-500 transition transition border-r border-black/40 pr-2"
          >
            <FiMapPin className="text-[16px]" />
            {siteConfig.address}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-1.5 hover:text-orange-500 transition border-r border-black/40 pr-2"
          >
            <FiMail className="text-[16px]" />
            {siteConfig.email}
          </a>

          <a
            href={`tel:${siteConfig.phone.replace(/\s+/g, "")}`}
            className="hidden md:flex phone-pop"
          >
            <FiPhone className="text-[16px] phone-icon" />
            <span className="phone-number">{siteConfig.phone}</span>
          </a>
        </div>

        {/* Right Links */}
        <div className="flex items-center gap-4">
          {[
            { label: "Help", href: "/contact" },
            { label: "Faqs", href: "/contact#faqs" },
          ].map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="hover:text-orange-500 transition font-medium"
            >
              {item.label}
            </a>
          ))}

          {/* Socials */}
          <div className="hidden sm:flex items-center gap-3 ml-2">
            <a
              href={siteConfig.socialLinks.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <FaFacebookF className="text-[14px]" />
            </a>

            <a
              href={siteConfig.socialLinks.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <FaInstagram className="text-[14px]" />
            </a>

            <a
              href={siteConfig.socialLinks.threads}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <SiThreads className="text-[14px]" />
            </a>

            <a
              href={siteConfig.socialLinks.x}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <FaTwitter className="text-[14px]" />
            </a>

            <a
              href={siteConfig.socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-orange-500 transition"
            >
              <FaLinkedinIn className="text-[14px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
