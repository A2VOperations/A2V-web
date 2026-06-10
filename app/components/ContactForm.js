"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import ContactSuccessPopup from "./ContactSuccessPopup";
import { siteConfig } from "../config";
import { useValidation } from "../context/ValidationContext";
import Image from "next/image";

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
  const freeRef = useRef(null);

  // Looping pop animation on the FREE badge
  useEffect(() => {
    if (!freeRef.current) return;
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.2 });
    tl.to(freeRef.current, {
      scale: 1.2,
      duration: 0.22,
      ease: "back.out(2)",
    }).to(freeRef.current, {
      scale: 1,
      duration: 0.18,
      ease: "power2.inOut",
    });
    return () => tl.kill();
  }, []);

  useEffect(() => {
    const sourceToSubject = {
      "custom-web-solutions": "Custom Web Solutions",
      "ecommerce-development": "Custom E-Commerce Storefronts",
      "cms-development": "Headless CMS Integration",
      "brand-identity": "Custom Web Solutions",
      "ui-ux-design": "Custom Web Solutions",
      "print-social-media": "Custom Web Solutions",
      "seo-optimization": "Core Web Vitals Optimization",
      "social-media-marketing": "Custom Web Solutions",
      "ppc-paid-ads": "Custom Web Solutions",
      "web-development": "Custom Web Solutions",
      "graphic-designing": "Custom Web Solutions",
      "digital-marketing": "Core Web Vitals Optimization",
      hero_section: "General Inquiry",
      hero_section_v2: "General Inquiry",
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
      showError(
        "Wait a moment!",
        "We found some issues with your form:",
        Object.values(e),
      );
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
        showError(
          "Submission Failed",
          data.message || "Failed to send message.",
        );
      }
    } catch (err) {
      console.error(err);
      showError("Connection Error", "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-white px-5 py-5 rounded-lg shadow-lg">
      <ContactSuccessPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
      <div className="flex flex-wrap gap-5 items-center w-full max-md:max-w-full mb-5">
        <div className="flex flex-col justify-center  items-center text-center self-stretch my-auto min-w-[240px]">
          <div className="text-[22px] text-gray-800 font-semibold text-center">
            Start With a <span ref={freeRef} className="inline-block bg-orange-500 text-white px-1">FREE</span>  Website Demo
          </div>
        </div>

      </div>

      <div className="grid grid-cols-2 gap-3 mb-5">
        <div className="relative col-span-2">
          <input
            type="text"
            id="floating_outlined_name"
            value={form.name}
            onChange={set("name")}
            className={`block w-full text-sm h-[40px] px-4 text-slate-900 bg-white rounded-[8px] border ${errors.name ? "border-red-500" : "border-violet-200"} appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]`}
            placeholder="Full Name"
          />
          <label
            htmlFor="floating_outlined_name"
            className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Full Name
          </label>
        </div>

        <div className="relative col-span-2">
          <input
            type="email"
            id="floating_outlined_email"
            value={form.email}
            onChange={set("email")}
            className={`block w-full text-sm h-[40px] px-4 text-slate-900 bg-white rounded-[8px] border ${errors.email ? "border-red-500" : "border-violet-200"} appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]`}
            placeholder="Email Address "
          />
          <label
            htmlFor="floating_outlined_email"
            className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Email Address
          </label>
        </div>

        <div className="relative col-span-2">
          <input
            type="tel"
            id="floating_outlined_phone"
            value={form.phone}
            onChange={set("phone")}
            className={`block w-full text-sm h-[40px] px-4 text-slate-900 bg-white rounded-[8px] border ${errors.phone ? "border-red-500" : "border-violet-200"} appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px]`}
            placeholder="Phone Number"
          />
          <label
            htmlFor="floating_outlined_phone"
            className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Phone Number
          </label>
        </div>

        <div className="relative col-span-2">
          <select
            id="floating_outlined_subject"
            value={form.subject}
            onChange={set("subject")}
            className={`block w-full text-sm h-[40px] px-4 text-slate-900 bg-white rounded-[8px] border ${errors.subject ? "border-red-500" : "border-violet-200"} appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 overflow-ellipsis overflow-hidden text-nowrap pr-[48px] bg-none`}
          >
            <option value="" disabled hidden></option>
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
          <label
            htmlFor="floating_outlined_subject"
            className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Subject
          </label>
        </div>

        <div className="relative col-span-2">
          <textarea
            id="floating_outlined_message"
            value={form.message}
            onChange={set("message")}
            rows={1}
            className={`block w-full text-40 py-4 px-4 text-slate-900 bg-white rounded-[8px] border ${errors.message ? "border-red-500" : "border-violet-200"} appearance-none focus:border-transparent focus:outline focus:outline-2 focus:outline-primary focus:ring-0 hover:border-brand-500-secondary- peer invalid:border-error-500 invalid:focus:border-error-500 pr-[48px] resize-none`}
            placeholder="Message"
          />
          <label
            htmlFor="floating_outlined_message"
            className="peer-placeholder-shown:-z-10 peer-focus:z-10 absolute text-[14px] leading-[150%] text-primary peer-focus:text-primary peer-invalid:text-error-500 focus:invalid:text-error-500 duration-300 transform -translate-y-[1.2rem] scale-75 top-2 z-10 origin-[0] bg-white disabled:bg-gray-50-background- px-2 peer-focus:px-2 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-[1.2rem] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
          >
            Message
          </label>
        </div>
      </div>

      <div className="sm:flex sm:flex-row-reverse flex gap-4">
        <button
          type="button"
          onClick={handleSubmit}
          disabled={loading}
          className="w-fit rounded-lg text-sm px-5 py-2 focus:outline-none h-[50px] border bg-[#f56302] hover:bg-[#f56302]/80 focus:bg-[#f56302]/80 border-violet-500-violet- text-white focus:ring-4 focus:ring-violet-200 hover:ring-4 hover:ring-violet-100 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed"
        >
          <div className="flex gap-2 items-center">
            {loading ? "Sending..." : "Send Message"}
            {!loading && (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                className="w-3.5 h-3.5"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            )}
          </div>
        </button>
        <button
          type="button"
          onClick={() =>
            setForm({
              name: "",
              email: "",
              phone: "",
              subject: "",
              message: "",
            })
          }
          className="w-fit rounded-lg text-sm px-5 py-2 focus:outline-none h-[50px] border bg-transparent border-primary text-primary focus:ring-4 focus:ring-gray-100"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
