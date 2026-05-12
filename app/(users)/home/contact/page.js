"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useValidation } from "@/app/context/ValidationContext";
import { siteConfig } from "@/app/config";

function Page() {
  const { showError } = useValidation();
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  function updateField(field, value) {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: "" }));
  }

  function validate() {
    const nextErrors = {};

    if (!form.name.trim()) nextErrors.name = "Please enter your name";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = "Please enter a valid email";
    }
    if (!form.service) nextErrors.service = "Please choose a service";
    if (!form.message.trim()) nextErrors.message = "Please enter your message";

    setErrors(nextErrors);
    
    if (Object.keys(nextErrors).length > 0) {
      showError("Submission Error", "Please fill in the form correctly:", Object.values(nextErrors));
      return false;
    }
    return true;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setFeedback("");

    if (!validate()) return;

    try {
      setStatus("loading");

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          email: form.email.trim(),
          service: form.service,
          message: form.message.trim(),
          source: "home-contact",
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        throw new Error(data.message || "Unable to submit the form right now.");
      }

      setStatus("success");
      setFeedback("Your message has been sent successfully.");
      setForm({ name: "", email: "", service: "", message: "" });
      setErrors({});
    } catch (error) {
      setStatus("error");
      setFeedback(
        error.message || "Something went wrong while sending your message.",
      );
    }
  }

  return (
    <>
      <section className="grid min-h-[520px] grid-cols-1 bg-white md:grid-cols-2">
        <div className="relative min-h-[420px] overflow-hidden">
          <Image
            src="/home/a2vgroups_teamwork.jpg"
            alt="Team working together"
            width={1400}
            height={1000}
            className="h-full w-full object-cover"
            unoptimized
          />
          <div className="absolute bottom-0 right-0 bg-orange-500 px-8 py-8 md:px-10">
            <p className="mb-2 text-xs font-semibold tracking-widest text-white/80">
              Work Inquiry
            </p>
            <h2 className="font-syne mb-6 text-2xl font-extrabold leading-tight text-white md:text-2xl">
              Let&apos;s Work For your
              <br />
              Next Projects ?
            </h2>
            <Link
              href={"/contact"}
              className="inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-bold text-gray-900 transition hover:bg-gray-100"
            >
              Contact Us <span>&rsaquo;</span>
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-center bg-[#e8f7f7] px-6 py-12 md:px-12">
          <div className="w-full max-w-md">
            <h3 className="font-syne mb-2 text-center text-2xl font-extrabold text-gray-900 md:text-3xl">
              Need Help For Project!
            </h3>
            <p className="mb-8 text-center text-sm text-gray-500">
              We are ready to help your next projects, let&apos;s work together
            </p>

            <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Name"
                    value={form.name}
                    onChange={(event) =>
                      updateField("name", event.target.value)
                    }
                    className={`w-full rounded-md border bg-white px-4 py-3 pr-10 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-orange-500 ${
                      errors.name ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                      <circle cx="12" cy="7" r="4" />
                    </svg>
                  </span>
                  {errors.name ? (
                    <p className="mt-1 text-xs font-medium text-red-600">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div className="relative">
                  <input
                    type="email"
                    placeholder="Email"
                    value={form.email}
                    onChange={(event) =>
                      updateField("email", event.target.value)
                    }
                    className={`w-full rounded-md border bg-white px-4 py-3 pr-10 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-orange-500 ${
                      errors.email ? "border-red-500" : "border-gray-200"
                    }`}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <svg
                      width="15"
                      height="15"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  {errors.email ? (
                    <p className="mt-1 text-xs font-medium text-red-600">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="relative">
                <select
                  value={form.service}
                  onChange={(event) =>
                    updateField("service", event.target.value)
                  }
                  className={`w-full appearance-none rounded-md border bg-white px-4 py-3 pr-10 text-sm outline-none focus:border-orange-500 ${
                    errors.service
                      ? "border-red-500 text-gray-500"
                      : "border-gray-200 text-gray-500"
                  }`}
                >
                  <option value="" disabled>
                    Choose Services
                  </option>
                  <option>Mobile App Development</option>
                  <option>Web Development</option>
                  <option>UI/UX Design</option>
                  <option>Cloud Solutions</option>
                  <option>Software Consulting</option>
                </select>
                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </span>
                {errors.service ? (
                  <p className="mt-1 text-xs font-medium text-red-600">
                    {errors.service}
                  </p>
                ) : null}
              </div>

              <textarea
                placeholder="Message"
                rows={5}
                value={form.message}
                onChange={(event) => updateField("message", event.target.value)}
                className={`w-full resize-y rounded-md border bg-white px-4 py-3 text-sm text-gray-900 outline-none placeholder:text-gray-400 focus:border-orange-500 ${
                  errors.message ? "border-red-500" : "border-gray-200"
                }`}
              />
              {errors.message ? (
                <p className="-mt-1 text-xs font-medium text-red-600">
                  {errors.message}
                </p>
              ) : null}

              {feedback ? (
                <p
                  className={`text-sm font-medium ${
                    status === "success" ? "text-green-700" : "text-red-600"
                  }`}
                >
                  {feedback}
                </p>
              ) : null}

              <button
                type="submit"
                disabled={status === "loading"}
                className="font-syne mt-1 flex w-full items-center justify-center gap-2 rounded-md bg-orange-500 py-4 text-sm font-bold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:bg-orange-300"
              >
                {status === "loading" ? "Sending..." : "Send Message Us"}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page;
