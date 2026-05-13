import Link from "next/link";
import React from "react";
import { siteConfig } from "@/app/config";

function page() {
  return (
    <div>
      <section className="w-full bg-[#19272b] px-4 py-4 md:px-6">
        <div className="mx-auto flex max-w-7xl flex-row items-center justify-center gap-4 lg:justify-between lg:gap-10">
          {/* Left: icon + text + CTA */}
          <div className="flex items-center gap-3">
            <div className="hidden md:flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-white/70">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>
            <span className="hidden md:inline truncate text-sm text-white md:text-base capitalize">
              Let&apos;s{" "}
              <em className="font-bold not-italic underline">
                Discuss &amp; Start
              </em>{" "}
              IT Consultations
            </span>
            <Link
              href={`https://wa.me/${siteConfig.phone.replace(/\D/g, "")}?text=Hi, I'd like to discuss an IT consultation with A2V.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-bold text-white underline"
            >
              <div className="md:hidden flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-white/70">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              Let&apos;s Talk &rsaquo;
            </Link>
          </div>

          {/* Divider */}
          <div className="hidden h-8 w-px shrink-0 bg-white/30 lg:block" />

          {/* Right: avatars + stat */}
          <div className="hidden md:flex items-center gap-3">
            <div className="flex items-center">
              {[1, 5, 9].map((id, i) => (
                <img
                  key={id}
                  src={`/home/a2vgroups_testimonial_${id}.jpg`}
                  alt="client"
                  className="h-8 w-8 rounded-full border-2 border-orange-500 object-cover shadow-sm"
                  style={{ marginLeft: i === 0 ? 0 : -10 }}
                />
              ))}
              <span className="ml-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-white/70 text-lg font-light text-white">
                +
              </span>
            </div>
            <span className="text-sm text-white md:text-base">
              <strong className="font-extrabold">1.8 million+</strong> Trusted
              Clients
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
