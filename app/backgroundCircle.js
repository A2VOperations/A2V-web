"use client";

const BackgroundCircle = ({
  size = {
    outer: "600px",
    inner: "450px",
  },
  outerColor = "rgba(255, 77, 0, 0.2)", // Adjusted for glass look
  innerColor = "#ffffff", // Adjusted for glass look
  outerOpacity = 1,
  innerOpacity = 1,
  className = "",
  outerClass = "",
  innerClass = "",
  glassy = true, // New prop to toggle effect
  position = {
    top: "50%",
    right: "-200px",
    translateY: "-50%",
  },
}) => {
  const glassStyles = glassy
    ? {
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
      }
    : {};

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}>
      {/* OUTER */}
      <div
        style={{
          position: "absolute",
          top: position.top,
          left: position.left,
          right: position.right,
          bottom: position.bottom,
          transform: `translateY(${position.translateY || "0"})`,
          width: size.outer,
          height: size.outer,
          backgroundColor: outerColor,
          opacity: outerOpacity,
          ...glassStyles,
        }}
        className={`rounded-full ${outerClass}`}
      >
        {/* INNER */}
        <div
          style={{
            width: size.inner,
            height: size.inner,
            backgroundColor: innerColor,
            opacity: innerOpacity,
            ...glassStyles,
            // Override position for centering
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
          className={`rounded-full ${innerClass}`}
        />
      </div>
    </div>
  );
};

export default BackgroundCircle;