"use client";

import { useState } from "react";
import ContactSuccessPopup from "@/app/components/ContactSuccessPopup";
import { useValidation } from "@/app/context/ValidationContext";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const LAT = 28.746691;
const LNG = 77.194993;
const GOOGLE_MAPS_URL = `https://www.google.com/maps?q=${LAT},${LNG}`;
const MAP_EMBED_URL = `https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d12614.3672439!2d${LNG}!3d${LAT}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1633000000000!5m2!1sen!2sus`;
const ADDRESS =
  process.env.NEXT_PUBLIC_ADDRESS ||
  "A2V Groups, A-Block, 25 Feet Rd, Kamal Vihar, West Sant Nagar, Burari, Delhi, 110084";

export default function ContactPage() {
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

  const { showError } = useValidation();

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "30min" });
      cal("ui", {
        theme: "light",
        cssVarsPerTheme: { light: { "cal-brand": "#ffffff" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

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
          source: "contact page",
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
    <main className="min-h-screen bg-slate-50 text-slate-900 font-sans flex items-start justify-center px-4 py-16">
      <ContactSuccessPopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-xs font-bold tracking-widest uppercase text-red-600 mb-3 bg-red-50 px-3 py-1 rounded-full">
            Get In Touch
          </span>
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-black">
            Let&apos;s Talk For{" "}
            <span className="bg-[#ff6a00] bg-clip-text text-transparent">
              Next Projects
            </span>
          </h1>
          <p className="mt-6 text-base text-slate-500 max-w-md mx-auto leading-relaxed">
            Have a vision? We have the tools. Drop us a message and let&apos;s
            create something extraordinary together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[450px_1fr] gap-8 items-start">
          {/* LEFT — Info Cards */}
          <div className="flex flex-col gap-6">
            <div className="bg-white border border-slate-100 shadow-xl shadow-slate-200/50 rounded-3xl p-8 transition-transform hover:-translate-y-1 duration-300">
              <p className="text-[11px] font-black tracking-widest uppercase text-slate-400 mb-6">
                Main Office
              </p>

              {[
                {
                  icon: (
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
                  ),
                  label: "Address",
                  value: ADDRESS,
                },
                {
                  icon: (
                    <>
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <polyline points="2,4 12,13 22,4" />
                    </>
                  ),
                  label: "Email",
                  value:
                    process.env.NEXT_PUBLIC_EMAIL ||
                    "operation.a2vgroups@gmail.com",
                },
                {
                  icon: (
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.02 1.18 2 2 0 012 .02h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  ),
                  label: "Phone",
                  value: process.env.NEXT_PUBLIC_PHONE || "+91 1234567890",
                },
              ].map(({ icon, label, value }, i) => (
                <div
                  key={i}
                  className="flex items-start gap-4 mb-6 last:mb-0 group"
                >
                  <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0 text-red-600 group-hover:bg-red-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="w-5 h-5"
                    >
                      {icon}
                    </svg>
                  </div>
                  <div>
                    <p className="text-[12px] font-bold text-slate-400 uppercase tracking-tight">
                      {label}
                    </p>
                    <p className="text-[14px] text-black font-semibold leading-snug mt-0.5">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map Section */}
            <div
              className="relative rounded-3xl overflow-hidden shadow-xl border border-white group cursor-pointer"
              onClick={() => window.open(GOOGLE_MAPS_URL, "_blank")}
            >
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
              <iframe
                src={MAP_EMBED_URL}
                className="w-full h-64 border-none block"
                loading="lazy"
              />
              {/* <div className="absolute bottom-5 left-5 z-20 bg-black text-white px-5 py-2.5 rounded-2xl text-xs font-bold shadow-2xl flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                {ADDRESS}
              </div> */}
            </div>
          </div>

          {/* RIGHT — Form + Map */}
          <div className="flex flex-col gap-8">
            <div className="bg-white border border-slate-100 shadow-2xl shadow-slate-200/60 rounded-3xl p-8 sm:p-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Input Template */}
                {[
                  {
                    id: "name",
                    label: "Full Name",
                    type: "text",
                    placeholder: "Enter your name",
                  },
                  {
                    id: "email",
                    label: "Email Address",
                    type: "email",
                    placeholder: "Enter your email",
                  },
                  {
                    id: "phone",
                    label: "Phone Number",
                    type: "tel",
                    placeholder: "Enter your phone number",
                  },
                ].map((input) => (
                  <div key={input.id} className="flex flex-col gap-2">
                    <label className="text-xs font-bold text-black uppercase tracking-wider">
                      {input.label}
                    </label>
                    <input
                      type={input.type}
                      value={form[input.id]}
                      onChange={set(input.id)}
                      placeholder={input.placeholder}
                      className={`w-full px-5 py-3.5 bg-slate-50 border rounded-2xl text-black font-medium outline-none focus:ring-4 focus:ring-orange-500/10 transition-all ${
                        errors[input.id]
                          ? "border-red-500"
                          : "border-slate-100 focus:border-orange-500"
                      }`}
                    />
                  </div>
                ))}

                {/* Subject Select */}
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold text-black uppercase tracking-wider">
                    Subject
                  </label>
                  <select
                    value={form.subject}
                    onChange={set("subject")}
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-100 rounded-2xl text-black font-medium outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-500/10 transition-all appearance-none"
                  >
                    <option value="">Select a service</option>
                    <option>Custom Web Solutions</option>
                    <option>E-commerce Development</option>
                    <option>CMS Development</option>
                    <option>Brand Identity</option>
                    <option>UI/UX Design</option>
                    <option>Print & Social Media</option>
                    <option>SEO Optimization</option>
                    <option>Social Media Marketing</option>
                    <option>PPC & Paid Ads</option>
                    <option>General Inquiry</option>
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <label className="text-xs font-bold text-black uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    value={form.message}
                    onChange={set("message")}
                    placeholder="Tell us about your project..."
                    rows={4}
                    className={`w-full px-5 py-4 bg-slate-50 border rounded-2xl text-black font-medium outline-none focus:ring-4 focus:ring-orange-500/10 transition-all resize-none ${
                      errors.message
                        ? "border-red-500"
                        : "border-slate-100 focus:border-orange-500"
                    }`}
                  />
                </div>

                {/* Button */}
                <div className="sm:col-span-2 pt-2">
                  <button
                    onClick={handleSubmit}
                    disabled={loading}
                    className="w-full sm:w-auto flex items-center justify-center gap-3 px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest text-white bg-[#ff6a00] shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:scale-[1.02] active:scale-95 transition-all duration-200 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending..." : "Send Message"}
                    {!loading && (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        className="w-4 h-4"
                      >
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Full Weight Calendar Section */}
        <div className="mt-16 overflow-hidden">
          <div className="min-h-[600px] w-full">
            <Cal
              namespace="30min"
              calLink="a2v-chakra-operations-ywesru/30min"
              style={{ width: "100%", height: "100%", minHeight: "600px" }}
              config={{
                layout: "month_view",
                useSlotsViewOnSmallScreen: "true",
              }}
            />
          </div>
        </div>
      </div>
    </main>
  );
}
