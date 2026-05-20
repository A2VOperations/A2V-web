"use client";

import { useState, useEffect } from "react";
import ContactSuccessPopup from "./ContactSuccessPopup";
import { siteConfig } from "../config";
import { useValidation } from "../context/ValidationContext";

export default function ContactForm({ source = "homepage" }) {
  const { showError } = useValidation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [showPopup, setShowPopup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const sourceToSubject = {
      "custom-web-solutions": "Custom Web Solutions",
      "ecommerce-development": "E-commerce Development",
      "cms-development": "CMS Development",
      "brand-identity": "Brand & Identity",
      "ui-ux-design": "UI/UX Experience",
      "print-social-media": "Print & Social Media Design",
      "seo-optimization": "SEO Optimization",
      "social-media-marketing": "Social Media Marketing",
      "ppc-paid-ads": "PPC & Paid Ads",
      "web-development": "Custom Web Solutions",
      "graphic-designing": "Graphic Designing",
      "digital-marketing": "SEO Optimization",
      "hero_section": "General Inquiry",
      "hero_section_v2": "General Inquiry"
    };

    if (source && sourceToSubject[source]) {
      setForm((f) => ({ ...f, subject: sourceToSubject[source] }));
    }
  }, [source]);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  function validate() {
    const e = {};
    if (!form.name.trim()) e.name = "Full Name is required";
    if (!form.email.trim()) e.email = "Email Address is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Invalid email format";
    if (!form.phone.trim()) e.phone = "Phone Number is required";
    if (!form.subject.trim()) e.subject = "Please select a Subject";
    if (!form.message.trim()) e.message = "Message cannot be empty";

    setErrors(e);

    if (Object.keys(e).length > 0) {
      showError("Wait a moment!", "We found some issues with your form:", Object.values(e));
      return false;
    }
    return true;
  }

  async function handleSubmit() {
    if (!validate()) return;
    setLoading(true);

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: source,
        }),
      });

      if (res.ok) {
        setShowPopup(true);
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        const data = await res.json();
        showError("Submission Failed", data.message || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      showError("Connection Error", "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full bg-white border border-slate-100 shadow-2xl shadow-slate-200/60 rounded-3xl p-6 sm:p-8">
      <ContactSuccessPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-5">
        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-bold text-black uppercase tracking-wider">
            Full Name
          </label>
          <input
            type="text"
            value={form.name}
            onChange={set("name")}
            placeholder="Enter your name"
            className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm text-black font-medium outline-none focus:ring-4 focus:ring-orange-500/10 transition-all ${errors.name ? "border-red-500" : "border-slate-100 focus:border-orange-500"
              }`}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-bold text-black uppercase tracking-wider">
            Email Address
          </label>
          <input
            type="email"
            value={form.email}
            onChange={set("email")}
            placeholder="Enter your email"
            className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm text-black font-medium outline-none focus:ring-4 focus:ring-orange-500/10 transition-all ${errors.email ? "border-red-500" : "border-slate-100 focus:border-orange-500"
              }`}
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-bold text-black uppercase tracking-wider">
            Phone Number
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={set("phone")}
            placeholder="Enter your phone number"
            className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm text-black font-medium outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all"
          />
        </div>

        <div className="flex flex-col gap-1.5">
          <label className="text-[14px] font-bold text-black uppercase tracking-wider">
            Subject
          </label>
          <select
            value={form.subject}
            onChange={set("subject")}
            className="w-full px-4 py-3 bg-slate-50 border border-slate-100 rounded-xl text-sm text-black font-medium outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all appearance-none"
          >
            <option value="">Select a service</option>
            {siteConfig.formServices.map((cat) => (
              <optgroup key={cat.category} label={cat.category}>
                {cat.options.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </optgroup>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1.5 sm:col-span-2">
          <label className="text-[14px] font-bold text-black uppercase tracking-wider">
            Message
          </label>
          <textarea
            value={form.message}
            onChange={set("message")}
            placeholder="Tell us about your project..."
            rows={3}
            className={`w-full px-4 py-3 bg-slate-50 border rounded-xl text-sm text-black font-medium outline-none focus:ring-4 focus:ring-orange-500/10 transition-all resize-none ${errors.message ? "border-red-500" : "border-slate-100 focus:border-orange-500"
              }`}
          />
        </div>

        <div className="sm:col-span-2 pt-1">
          <button
            onClick={handleSubmit}
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 px-8 py-3.5 rounded-xl font-bold text-xs uppercase tracking-widest text-white bg-[#ff6a00] shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.01] active:scale-95 transition-all duration-200 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Sending..." : "Send Message"}
            {!loading && (
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" className="w-3.5 h-3.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
