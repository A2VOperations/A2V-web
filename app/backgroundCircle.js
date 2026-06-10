"use client";

const BackgroundInfinity = ({
  className = "",
  glassy = true,
  position = {
    top: "50%",
    right: "-200px",
    translateY: "-50%",
  },
  primaryColor = "#ff4500",
  accentColor = "#ffb347",
  size = 1, // scale multiplier
}) => {
  const w = 380 * size;
  const h = 260 * size;

  const wrapperStyle = {
    position: "absolute",
    top: position.top ?? "auto",
    left: position.left ?? "auto",
    right: position.right ?? "auto",
    bottom: position.bottom ?? "auto",
    transform: `translateY(${position.translateY || "0"})`,
    width: w,
    height: h,
    pointerEvents: "none",
  };

  const keyframes = `
    @keyframes bi-dashFlow {
      from { stroke-dashoffset: 1000; }
      to   { stroke-dashoffset: 0; }
    }
    @keyframes bi-orb1 {
      0%   { offset-distance: 0%; }
      100% { offset-distance: 100%; }
    }
    @keyframes bi-orb2 {
      0%   { offset-distance: 50%; }
      100% { offset-distance: 150%; }
    }
    @keyframes bi-pulse {
      0%, 100% { opacity: 0.7; transform: scale(1); }
      50%       { opacity: 1;   transform: scale(1.18); }
    }
    @keyframes bi-glowPulse {
      0%, 100% { opacity: 0.35; }
      50%       { opacity: 0.65; }
    }
  `;

  // The SVG path for the infinity sign (lemniscate figure-8)
  const infPathD = `M 190 130
    C 190 88, 148 60, 110 60
    C 68 60, 30 92, 30 130
    C 30 168, 68 200, 110 200
    C 148 200, 178 174, 190 130
    C 202 86, 232 60, 270 60
    C 312 60, 350 92, 350 130
    C 350 168, 312 200, 270 200
    C 232 200, 202 174, 190 130 Z`;

  const orbOffsetPath = `path('${infPathD.replace(/\n\s*/g, " ")}')`;

  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className} opacity-50`}
    >
      <style>{keyframes}</style>

      <div style={wrapperStyle}>
        {/* Main SVG */}
        <svg
          width={w}
          height={h}
          viewBox="0 0 380 260"
          style={{
            overflow: "visible",
            filter: "drop-shadow(0 0 18px rgba(255,100,30,0.35))",
            ...(glassy
              ? {
                  backdropFilter: "blur(8px)",
                  WebkitBackdropFilter: "blur(8px)",
                }
              : {}),
          }}
        >
          <defs>
            <linearGradient
              id="bi-infGrad"
              gradientUnits="userSpaceOnUse"
              x1="30"
              y1="130"
              x2="350"
              y2="130"
            >
              <stop offset="0%" stopColor={primaryColor} />
              <stop offset="40%" stopColor={accentColor} />
              <stop offset="70%" stopColor="#ffb347" />
              <stop offset="100%" stopColor={primaryColor} />
            </linearGradient>
            <linearGradient
              id="bi-infGrad2"
              gradientUnits="userSpaceOnUse"
              x1="350"
              y1="130"
              x2="30"
              y2="130"
            >
              <stop offset="0%" stopColor="#fff0e0" stopOpacity="0.9" />
              <stop offset="50%" stopColor={accentColor} stopOpacity="0.7" />
              <stop offset="100%" stopColor="#fff0e0" stopOpacity="0" />
            </linearGradient>
            <path id="bi-infPath" d={infPathD} />
          </defs>

          {/* Track */}
          <use
            href="#bi-infPath"
            fill="none"
            stroke="rgba(255,140,60,0.18)"
            strokeWidth={30}
            strokeLinecap="round"
          />
          <use
            href="#bi-infPath"
            fill="rgba(255,255,255,0.04)"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth={28}
            strokeLinecap="round"
          />

          {/* Animated flowing strokes */}
          <use
            href="#bi-infPath"
            fill="none"
            stroke="url(#bi-infGrad)"
            strokeWidth={5}
            strokeLinecap="round"
            strokeDasharray="120 880"
            style={{ animation: "bi-dashFlow 3.2s linear infinite" }}
          />
          <use
            href="#bi-infPath"
            fill="none"
            stroke="url(#bi-infGrad2)"
            strokeWidth={3}
            strokeLinecap="round"
            strokeDasharray="60 940"
            opacity={0.6}
            style={{
              animation: "bi-dashFlow 3.2s linear infinite",
              animationDelay: "-1.6s",
            }}
          />

          {/* Inner glass rings */}
          <ellipse
            cx={110}
            cy={130}
            rx={58}
            ry={50}
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth={1.5}
            opacity={0.5}
          />
          <ellipse
            cx={270}
            cy={130}
            rx={58}
            ry={50}
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth={1.5}
            opacity={0.5}
          />

          {/* Center accent dots */}
          <circle
            cx={110}
            cy={130}
            r={6}
            fill="rgba(255,255,255,0.15)"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth={1}
          />
          <circle
            cx={270}
            cy={130}
            r={6}
            fill="rgba(255,255,255,0.15)"
            stroke="rgba(255,255,255,0.25)"
            strokeWidth={1}
          />
          <circle
            cx={190}
            cy={130}
            r={4}
            fill="rgba(255,140,60,0.5)"
            stroke="rgba(255,200,120,0.6)"
            strokeWidth={1}
          />
        </svg>
      </div>
    </div>
  );
};

export default BackgroundInfinity;
