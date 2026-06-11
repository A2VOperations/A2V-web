"use client";

export default function WhatsAppButton() {
  return (
    <a
      href={"https://wa.me/+919372483228?text=Hello! I'd like to know more."}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      style={{
        position: "fixed",
        bottom: "24px",
        left: "24px",
        zIndex: 9999,
        padding: "0 28px",
        height: "56px",
        borderRadius: "9999px",
        background: "linear-gradient(135deg, #2DDF71, #1DA851)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        textDecoration: "none",
        color: "white",
        fontWeight: "700",
        fontSize: "18px",
        fontFamily: "var(--font-geist-sans), sans-serif",
        animation: "wa-shadow-pulse 2s infinite"
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
        e.currentTarget.style.boxShadow = "0 8px 25px rgba(37,211,102,0.6)";
        e.currentTarget.style.animation = "none";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0) scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 20px rgba(37,211,102,0.4)";
        e.currentTarget.style.animation = "wa-shadow-pulse 2s infinite";
      }}
    >
      {/* Phone SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="24"
        height="24"
        fill="white"
        style={{ position: "relative", zIndex: 1 }}
      >
        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
      </svg>
      
      <span style={{ position: "relative", zIndex: 1, letterSpacing: "0.5px" }}>Chat Now</span>

      {/* Keyframe injection */}
      <style>{`
        @keyframes wa-shadow-pulse {
          0%   { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.7); }
          70%  { box-shadow: 0 0 0 15px rgba(37, 211, 102, 0); }
          100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0); }
        }
      `}</style>
    </a>
  );
}
