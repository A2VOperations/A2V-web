"use client";

import React from "react";
import Link from "next/link";

export default function TermsPage() {
  const lastUpdated = "May 1, 2026";

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing or using the services provided by A2V Groups, you agree to be bound by these Terms and Regulations. If you do not agree to these terms, please do not use our services.",
    },
    {
      title: "2. Use of Services",
      content:
        "You agree to use our services only for lawful purposes and in accordance with these Terms. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account.",
    },
    {
      title: "3. Intellectual Property",
      content:
        "All content and materials available on our services, including but not limited to text, graphics, logos, and software, are the property of A2V Groups or its licensors and are protected by intellectual property laws.",
    },
    {
      title: "4. User Content",
      content:
        "By submitting or posting content on our services, you grant A2V Groups a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, and distribute your content in connection with our services.",
    },
    {
      title: "5. Limitation of Liability",
      content:
        "A2V Groups shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our services, even if we have been advised of the possibility of such damages.",
    },
    {
      title: "6. Indemnification",
      content:
        "You agree to indemnify and hold A2V Groups harmless from any claims, losses, or damages, including legal fees, resulting from your violation of these Terms or your use of our services.",
    },
    {
      title: "7. Governing Law",
      content:
        "These Terms and Regulations shall be governed by and construed in accordance with the laws of the jurisdiction in which A2V Groups is headquartered, without regard to its conflict of law principles.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans pb-20">
      {/* Hero Header */}
      <div className="relative bg-[#19272b] py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-red-500 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />
        </div>

        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-red-400 mb-4 bg-red-400/10 px-3 py-1 rounded-full">
            Legal
          </span>
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6">
            Terms & <span className="text-orange-500">Regulations</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Please read these terms carefully before using our services. They
            outline your rights and responsibilities when working with A2V
            Groups.
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 -mt-10 relative z-20">
        <div className="bg-white rounded-3xl shadow-2xl shadow-slate-200 border border-slate-100 p-8 md:p-12">
          <div className="flex items-center justify-between mb-10 pb-6 border-b border-slate-100">
            <div className="text-sm text-slate-400 font-medium uppercase tracking-wider">
              Last Updated: <span className="text-slate-900">{lastUpdated}</span>
            </div>
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
                <h2 className="text-2xl font-bold text-black mb-4 group-hover:text-orange-500 transition-colors duration-300">
                  {section.title}
                </h2>
                <p className="text-slate-600 leading-relaxed text-lg">
                  {section.content}
                </p>
              </section>
            ))}
          </div>

          <div className="mt-16 p-8 bg-slate-50 rounded-2xl border border-slate-100">
            <h3 className="text-xl font-bold mb-4">Legal Disclaimer</h3>
            <p className="text-slate-600 mb-6 italic">
              The information provided in these terms is for general guidance
              purposes only. A2V Groups reserves the right to modify these
              terms at any time without prior notice.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-black transition shadow-lg"
            >
              Contact Legal Representative
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
