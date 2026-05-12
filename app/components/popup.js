"use client";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { usePathname } from "next/navigation";
import { useValidation } from "../context/ValidationContext";
import Link from "next/link";

export default function ScrollGate() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);
  const [unlocked, setUnlocked] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [errors, setErrors] = useState({});
  const [submitError, setSubmitError] = useState("");
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    setVisible(false);

    // Leaving contact page — clear dismissed flag
    if (pathname !== "/contact") {
      sessionStorage.removeItem("gateDismissed");
    }

    // Never show on contact page
    if (pathname === "/contact") return;

    // Already unlocked (form filled) — never show again
    if (sessionStorage.getItem("gateUnlocked")) {
      setUnlocked(true);
      return;
    }

    // Dismissed on contact — don't show
    if (sessionStorage.getItem("gateDismissed")) return;

    // Redirection policy: if not on home/contact and not unlocked, force to home
    if (pathname !== "/" && pathname !== "/contact" && !sessionStorage.getItem("gateUnlocked")) {
        window.location.href = "/";
        return;
    }

    const handleScroll = () => {
      if (window.scrollY > 100) setVisible(true);
    };

    const timer = setTimeout(() => setVisible(true), 4000);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, [pathname]);

  const { showError } = useValidation();

  function validate() {
    const errs = {};

    if (!form.name.trim()) errs.name = "Full Name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Please enter a valid email address";
    }
    if (!/^[+\d\s\-()]{7,15}$/.test(form.phone)) {
      errs.phone = "Phone number should be 7-15 digits";
    }

    setErrors(errs);
    
    if (Object.keys(errs).length > 0) {
      showError("Almost There!", "Please fix these fields to continue:", Object.values(errs));
      return false;
    }
    return true;
  }

  async function handleSubmit() {
    if (!validate()) return;

    setSubmitting(true);
    setSubmitError("");

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          source: "popup form",
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Failed to send your details.");
      }

      toast.success("Details sent successfully!");
      setSubmitted(true);
    } catch (err) {
      console.error("Failed:", err);
      const msg = err.message || "Failed to send your details.";
      toast.error(msg);
      setSubmitError(msg);
    } finally {
      setSubmitting(false);
    }
  }

  function handleEnter() {
    sessionStorage.setItem("gateUnlocked", "true");
    setUnlocked(true);
    setVisible(false);
  }

  function handleClose() {
    setVisible(false);

    if (pathname === "/contact") {
      // On contact page — set dismissed, scroll to contact section
      sessionStorage.setItem("gateDismissed", "true");
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    }
    // On any other page — just hide, no flags set
    // popup will show again on next visit
  }

  if (unlocked || !visible) return null;

  const socialLinks = [
    {
      label: "Facebook",
      href: process.env.NEXT_PUBLIC_FACEBOOK_URL,
      bg: "#1877F2",
      shadow: "rgba(24,119,242,0.5)",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
        </svg>
      ),
    },
    {
      label: "Instagram",
      href: process.env.NEXT_PUBLIC_INSTAGRAM_URL,
      bg: "linear-gradient(135deg,#f09433,#e6683c,#dc2743,#cc2366,#bc1888)",
      shadow: "rgba(220,39,67,0.5)",
      icon: (
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="white" stroke="none" />
        </svg>
      ),
    },
    {
      label: "LinkedIn",
      href: process.env.NEXT_PUBLIC_LINKEDIN_URL,
      bg: "#0A66C2",
      shadow: "rgba(10,102,194,0.5)",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      ),
    },
  ];

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(20, 10, 30, 0.75)",
        zIndex: 10002,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
      }}
    >
      {/* ✕ Close button */}
      <button
        onClick={handleClose}
        title="Close"
        style={{
          position: "fixed",
          top: isMobile ? 15 : 20,
          right: isMobile ? 15 : 20,
          width: isMobile ? 40 : 52,
          height: isMobile ? 40 : 52,
          borderRadius: "50%",
          border: "2px solid rgba(255,255,255,0.3)",
          background: "rgba(255,255,255,0.12)",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "rgba(255,255,255,0.9)",
          fontSize: isMobile ? 18 : 24,
          lineHeight: 1,
          zIndex: 10003,
          backdropFilter: "blur(6px)",
          WebkitBackdropFilter: "blur(6px)",
          transition: "all 0.18s",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = "rgba(232,67,147,0.55)";
          e.currentTarget.style.borderColor = "#E84393";
          e.currentTarget.style.transform = "scale(1.1)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = "rgba(255,255,255,0.12)";
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.3)";
          e.currentTarget.style.transform = "scale(1)";
        }}
      >
        ✕
      </button>

      {/* Row: social strip + modal */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: isMobile ? "0" : "0 16px",
          width: isMobile ? "100%" : "auto",
          justifyContent: "center",
        }}
      >
        {/* Vertical social strip - hidden on mobile */}
        {!isMobile && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
              paddingRight: 28,
            }}
          >
            <span
              style={{
                fontSize: 10,
                fontWeight: 700,
                letterSpacing: 3,
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                writingMode: "vertical-rl",
                transform: "rotate(180deg)",
                userSelect: "none",
              }}
            >
              Follow us
            </span>

            <div
              style={{
                width: 1,
                height: 36,
                background: "rgba(255,255,255,0.18)",
              }}
            />

            {socialLinks.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                style={{
                  width: 42,
                  height: 42,
                  borderRadius: "50%",
                  background: s.bg,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  textDecoration: "none",
                  boxShadow: `0 4px 16px ${s.shadow}`,
                  transition: "transform 0.2s, box-shadow 0.2s",
                  flexShrink: 0,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-3px) scale(1.12)";
                  e.currentTarget.style.boxShadow = `0 10px 24px ${s.shadow}`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0) scale(1)";
                  e.currentTarget.style.boxShadow = `0 4px 16px ${s.shadow}`;
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        )}

        {/* Modal card */}
        <div
          style={{
            background: "#fff",
            borderRadius: 20,
            padding: isMobile ? "30px 20px 20px" : "36px 32px 28px",
            width: isMobile ? "92%" : "100%",
            maxWidth: isMobile ? "400px" : "600px",
            border: "0.5px solid #f0e0ee",
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              background: "#fce4f0",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 16px",
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#E84393"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>

          {!submitted ? (
            <>
              <h2
                style={{
                  textAlign: "center",
                  fontSize: 20,
                  fontWeight: 800,
                  color: "#1a0a14",
                  marginBottom: 6,
                  marginTop: 0,
                }}
              >
                Quick, you&apos;re almost in!
              </h2>
              <p
                style={{
                  textAlign: "center",
                  fontSize: 13,
                  color: "#b5326e",
                  fontWeight: 600,
                  marginBottom: 24,
                  marginTop: 0,
                }}
              >
                Enter details to unlock full access
              </p>

              <div style={{ marginBottom: 14 }}>
                <label
                  style={{
                    display: "block",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#888",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    marginBottom: 6,
                  }}
                >
                  Full name
                </label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: 10,
                    border: `1.5px solid ${errors.name ? "#E84393" : "#f0e0ee"}`,
                    fontSize: 14,
                    fontFamily: "inherit",
                    color: "#1a0a14",
                    background: errors.name ? "#fff5f9" : "#fdf6fb",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
                {errors.name && (
                  <p style={{ fontSize: 11, color: "#E84393", fontWeight: 600, marginTop: 4 }}>
                    {errors.name}
                  </p>
                )}
              </div>

              <div style={{ marginBottom: 14 }}>
                <label
                  style={{
                    display: "block",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#888",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    marginBottom: 6,
                  }}
                >
                  Email address
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: 10,
                    border: `1.5px solid ${errors.email ? "#E84393" : "#f0e0ee"}`,
                    fontSize: 14,
                    fontFamily: "inherit",
                    color: "#1a0a14",
                    background: errors.email ? "#fff5f9" : "#fdf6fb",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
                {errors.email && (
                  <p style={{ fontSize: 11, color: "#E84393", fontWeight: 600, marginTop: 4 }}>
                    {errors.email}
                  </p>
                )}
              </div>

              <div style={{ marginBottom: 14 }}>
                <label
                  style={{
                    display: "block",
                    fontSize: 11,
                    fontWeight: 700,
                    color: "#888",
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    marginBottom: 6,
                  }}
                >
                  Phone number
                </label>
                <input
                  type="tel"
                  placeholder="+91 98765 43210"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  style={{
                    width: "100%",
                    padding: "10px 14px",
                    borderRadius: 10,
                    border: `1.5px solid ${errors.phone ? "#E84393" : "#f0e0ee"}`,
                    fontSize: 14,
                    fontFamily: "inherit",
                    color: "#1a0a14",
                    background: errors.phone ? "#fff5f9" : "#fdf6fb",
                    outline: "none",
                    boxSizing: "border-box",
                  }}
                />
                {errors.phone && (
                  <p style={{ fontSize: 11, color: "#E84393", fontWeight: 600, marginTop: 4 }}>
                    {errors.phone}
                  </p>
                )}
              </div>

              <button
                onClick={handleSubmit}
                disabled={submitting}
                style={{
                  width: "100%",
                  padding: 12,
                  borderRadius: 12,
                  border: "none",
                  background: "linear-gradient(135deg, #E84393, #FFB800)",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 800,
                  cursor: submitting ? "not-allowed" : "pointer",
                  marginTop: 8,
                  letterSpacing: 0.3,
                  opacity: submitting ? 0.7 : 1,
                }}
              >
                {submitting ? "Sending..." : "Get access →"}
              </button>

              {submitError && (
                <p
                  style={{
                    fontSize: 11,
                    color: "#E84393",
                    fontWeight: 600,
                    marginTop: 8,
                    textAlign: "center",
                  }}
                >
                  {submitError}
                </p>
              )}

              <p style={{ textAlign: "center", marginTop: 14, marginBottom: 0 }}>
                <Link
                  href="/contact"
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    fontSize: 12,
                    color: "#b5326e",
                    fontWeight: 600,
                    textDecoration: "underline",
                    padding: 0,
                  }}
                >
                  Not now - take me to Contact Us
                </Link>
              </p>

              {/* Mobile Social Links at bottom */}
              {isMobile && (
                <div style={{ marginTop: 24, borderTop: "1px solid #f0e0ee", paddingTop: 20, textAlign: "center" }}>
                  <p style={{ fontSize: 11, fontWeight: 700, color: "#888", textTransform: "uppercase", letterSpacing: 1, marginBottom: 12 }}>Follow us</p>
                  <div style={{ display: "flex", justifyContent: "center", gap: 12 }}>
                    {socialLinks.map((s) => (
                      <a
                        key={s.label}
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: "50%",
                          background: s.bg,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          boxShadow: `0 4px 12px ${s.shadow}`,
                        }}
                      >
                        {s.icon}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </>
          ) : (
            <div style={{ textAlign: "center", padding: "16px 0 8px" }}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  background: "#f0fff4",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 14px",
                }}
              >
                <svg
                  width="26"
                  height="26"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#16a34a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2
                style={{
                  fontSize: 20,
                  fontWeight: 800,
                  color: "#1a0a14",
                  marginBottom: 6,
                  marginTop: 0,
                }}
              >
                You&apos;re in!
              </h2>
              <p
                style={{
                  fontSize: 13,
                  color: "#888",
                  fontWeight: 600,
                  marginBottom: 20,
                }}
              >
                Welcome! Enjoy browsing.
              </p>
              <button
                onClick={handleEnter}
                style={{
                  padding: "12px 32px",
                  borderRadius: 12,
                  border: "none",
                  background: "linear-gradient(135deg, #E84393, #FFB800)",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 800,
                  cursor: "pointer",
                }}
              >
                Enter the store →
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}