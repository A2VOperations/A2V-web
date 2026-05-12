"use client";

import { useEffect, useState } from "react";

export default function ContactSuccessPopup({ isOpen, onClose }) {
  if (!isOpen) return null;

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
      <div
        style={{
          background: "#fff",
          borderRadius: 24,
          padding: "48px 32px 40px",
          width: "100%",
          maxWidth: 400,
          border: "1px solid #f0e0ee",
          position: "relative",
          textAlign: "center",
          boxShadow: "0 20px 50px rgba(0,0,0,0.2)",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 16,
            right: 16,
            background: "none",
            border: "none",
            fontSize: 20,
            cursor: "pointer",
            color: "#ccc",
          }}
        >
          ✕
        </button>

        <div
          style={{
            width: 64,
            height: 64,
            background: "#f0fff4",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 24px",
          }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#16a34a"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        <h2
          style={{
            fontSize: 24,
            fontWeight: 800,
            color: "#1a0a14",
            marginBottom: 8,
            marginTop: 0,
          }}
        >
          Message Sent!
        </h2>
        <p
          style={{
            fontSize: 15,
            color: "#666",
            fontWeight: 500,
            lineHeight: 1.6,
            marginBottom: 32,
          }}
        >
          Thank you for reaching out. We have received your message and will get back to you shortly.
        </p>

        <button
          onClick={onClose}
          style={{
            width: "100%",
            padding: "14px",
            borderRadius: 14,
            border: "none",
            background: "linear-gradient(135deg, #E84393, #FFB800)",
            color: "#fff",
            fontSize: 15,
            fontWeight: 800,
            cursor: "pointer",
            boxShadow: "0 10px 20px rgba(232,67,147,0.3)",
            transition: "transform 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.02)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          Got it
        </button>
      </div>
    </div>
  );
}
