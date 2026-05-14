"use client";

import React from "react";
import Link from "next/link";

export default function PrivacyPage() {
  const lastUpdated = "May 1, 2026";

  const sections = [
    {
      title: "1. Information We Collect",
      content:
        "We collect information you provide directly to us, such as when you create an account, subscribe to our newsletter, or contact us for support. This may include your name, email address, phone number, and any other information you choose to provide.",
    },
    {
      title: "2. How We Use Your Information",
      content:
        "We use the information we collect to provide, maintain, and improve our services, to communicate with you, and to develop new products and services. We may also use the information to send you promotional communications about our products and services.",
    },
    {
      title: "3. Sharing of Information",
      content:
        "We do not share your personal information with third parties except as described in this policy. We may share information with vendors, consultants, and other service providers who need access to such information to carry out work on our behalf.",
    },
    {
      title: "4. Data Security",
      content:
        "We take reasonable measures to help protect information about you from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. However, no security system is impenetrable and we cannot guarantee the security of our database.",
    },
    {
      title: "5. Your Choices",
      content:
        "You may update, correct, or delete information about you at any time by logging into your online account or emailing us. You may also opt out of receiving promotional emails from us by following the instructions in those emails.",
    },
    {
      title: "6. Changes to this Policy",
      content:
        "We may change this Privacy Policy from time to time. If we make changes, we will notify you by revising the date at the top of the policy and, in some cases, we may provide you with additional notice.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
      {/* Hero Header */}
      <div className="relative bg-[#19272b] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-red-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-orange-400 mb-4 bg-orange-400/10 px-3 py-1 rounded-full">
            Legal
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Privacy <span className="text-orange-500">Policy</span>
          </h1>
          <p className="text-gray-400 text-sm md:text-lg max-w-2xl mx-auto">
            Your privacy is important to us. This policy outlines how A2V Groups
            handles your data and ensures your protection.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100 p-8 md:p-12">
          <div className="flex items-center justify-end mb-10 pb-6 border-b border-slate-100">
            <Link
              href="/"
              className="text-orange-500 text-sm font-bold hover:underline"
            >
              &larr; Back to Home
            </Link>
          </div>

          <div className="space-y-12">
            {sections.map((section, index) => (
              <section key={index} className="group">
                <h2 className="text-xl md:text-2xl font-bold text-black mb-4 group-hover:text-orange-500 transition-colors duration-300">
                  {section.title}
                </h2>
                <p className="text-slate-600 leading-relaxed text-sm md:text-lg">
                  {index === 5
                    ? "We may change this Privacy Policy from time to time. If we make changes, we will notify you by providing you with additional notice through our website or direct communication."
                    : section.content}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-bold mb-4">Contact Our Privacy Team</h3>
            <p className="text-slate-600 mb-6">
              If you have any questions about this Privacy Policy or our
              practices, please reach out to our dedicated data protection
              office.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={`mailto:${process.env.NEXT_PUBLIC_EMAIL || "operation.a2vgroups@gmail.com"}`}
                className="bg-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:bg-orange-600 transition shadow-lg shadow-orange-500/20"
              >
                Email Privacy Dept
              </a>
              <Link
                href="/contact"
                className="bg-white border border-slate-200 text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-100 transition"
              >
                General Inquiry
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
