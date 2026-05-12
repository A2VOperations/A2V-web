import Link from "next/link";
import React from "react";
import { siteConfig } from "@/app/config";

function page() {
  return (
    <div>
      <section className="w-full bg-[#19272b] px-4 py-4 md:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-4 lg:flex-row lg:items-center lg:gap-10">
          {/* Left: icon + text + CTA */}
          <div className="flex min-w-0 flex-wrap items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-white/70">
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
          <span className="truncate text-sm text-white md:text-base capitalize">
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
            className="shrink-0 text-sm font-bold text-white underline"
          >
            Let&apos;s Talk &rsaquo;
          </Link>
          </div>

          {/* Divider */}
          <div className="hidden h-8 w-px shrink-0 bg-white/30 lg:block" />

          {/* Right: avatars + stat */}
          <div className="flex items-center gap-3">
            <div className="flex items-center">
              {[47, 12, 33].map((id, i) => (
                <img
                  key={id}
                  src={`https://i.pravatar.cc/40?img=${id}`}
                  alt="client"
                  className="h-8 w-8 rounded-full border-2 border-[#29aae2] object-cover"
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
