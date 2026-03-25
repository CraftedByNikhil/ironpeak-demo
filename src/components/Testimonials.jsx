import { useState } from "react";
import { siteData } from "../data/siteData";

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const t = siteData.testimonials;

  return (
    <section
      id="testimonials"
      style={{
        background: "#0D0D0D",
        padding: "8rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "1px",
          background: "linear-gradient(to right, transparent, rgba(232,255,59,0.15), transparent)",
        }}
      />

      <div
        style={{
          position: "absolute",
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "18vw",
          color: "rgba(255,255,255,0.018)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          whiteSpace: "nowrap",
          userSelect: "none",
          pointerEvents: "none",
          letterSpacing: "-0.02em",
        }}
      >
        RESULTS
      </div>

      <div style={{ maxWidth: "1280px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "6rem",
            alignItems: "center",
          }}
          className="testimonials-grid"
        >
          {/* Left */}
          <div>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#E8FF3B",
                fontWeight: 600,
                display: "block",
                marginBottom: "1rem",
              }}
            >
              Real Members
            </span>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.8rem, 4vw, 4.5rem)",
                color: "#fff",
                margin: "0 0 3rem 0",
                lineHeight: 0.95,
                letterSpacing: "0.02em",
              }}
            >
              Words From
              <br />
              <span style={{ color: "#E8FF3B" }}>The Floor</span>
            </h2>

            {/* Nav dots */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {t.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    display: "flex",
                    alignItems: "center",
                    gap: "1rem",
                    padding: "0.6rem 0",
                    textAlign: "left",
                    transition: "opacity 0.2s",
                    opacity: active === i ? 1 : 0.4,
                  }}
                >
                  <div
                    style={{
                      width: active === i ? "28px" : "12px",
                      height: "2px",
                      background: active === i ? "#E8FF3B" : "rgba(255,255,255,0.4)",
                      transition: "all 0.3s",
                      flexShrink: 0,
                    }}
                  />
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.85rem",
                      color: active === i ? "#fff" : "rgba(255,255,255,0.5)",
                      fontWeight: active === i ? 600 : 400,
                      transition: "color 0.2s",
                    }}
                  >
                    {item.name}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Right: active quote */}
          <div key={active} style={{ animation: "fadeInUp 0.35s ease forwards" }}>
            <div
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "6rem",
                color: "rgba(232,255,59,0.15)",
                lineHeight: 0.7,
                marginBottom: "1.5rem",
                display: "block",
              }}
            >
              "
            </div>
            <blockquote
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "clamp(1.2rem, 2vw, 1.55rem)",
                color: "#fff",
                lineHeight: 1.6,
                fontWeight: 400,
                margin: "0 0 2.5rem 0",
                fontStyle: "italic",
              }}
            >
              {t[active].text}
            </blockquote>

            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
              <div
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, rgba(232,255,59,0.15), rgba(232,255,59,0.05))",
                  border: "1px solid rgba(232,255,59,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.85rem",
                  fontWeight: 700,
                  color: "#E8FF3B",
                }}
              >
                {t[active].name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.95rem",
                    fontWeight: 700,
                    color: "#fff",
                    marginBottom: "0.2rem",
                  }}
                >
                  {t[active].name}
                </div>
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.78rem",
                    color: "rgba(255,255,255,0.4)",
                  }}
                >
                  {t[active].duration}
                </div>
              </div>
              <div style={{ marginLeft: "auto", display: "flex", gap: "3px" }}>
                {Array(t[active].rating).fill(0).map((_, i) => (
                  <span key={i} style={{ color: "#E8FF3B", fontSize: "1rem" }}>★</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
