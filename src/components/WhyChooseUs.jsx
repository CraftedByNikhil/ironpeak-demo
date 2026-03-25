import { siteData } from "../data/siteData";

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      style={{
        background: "#0A0A0A",
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
          background: "linear-gradient(to right, transparent, rgba(255,255,255,0.08), transparent)",
        }}
      />

      {/* Background accent */}
      <div
        style={{
          position: "absolute",
          left: "-5%",
          top: "50%",
          transform: "translateY(-50%)",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,255,59,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 2fr",
            gap: "6rem",
            alignItems: "start",
          }}
          className="why-grid"
        >
          {/* Left: sticky label */}
          <div style={{ position: "sticky", top: "120px" }}>
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.2em",
                textTransform: "uppercase",
                color: "#E8FF3B",
                fontWeight: 600,
                display: "block",
                marginBottom: "1.2rem",
              }}
            >
              Why IRONPEAK
            </span>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(2.8rem, 4vw, 4.5rem)",
                color: "#fff",
                margin: "0 0 2rem 0",
                lineHeight: 0.95,
                letterSpacing: "0.02em",
              }}
            >
              Not Just
              <br />A Gym.
              <br />
              <span style={{ color: "#E8FF3B" }}>A System.</span>
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.9rem",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.75,
                margin: 0,
              }}
            >
              Every detail is designed to remove friction and maximize results. Here's what sets us apart.
            </p>
          </div>

          {/* Right: benefits grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "0",
            }}
            className="benefits-grid"
          >
            {siteData.whyUs.map((item, i) => (
              <div
                key={i}
                style={{
                  padding: "2.5rem",
                  borderBottom: "1px solid rgba(255,255,255,0.06)",
                  borderRight: i % 2 === 0 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  transition: "background 0.25s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(232,255,59,0.03)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
              >
                <div
                  style={{
                    fontSize: "1.8rem",
                    marginBottom: "1.2rem",
                    display: "block",
                  }}
                >
                  {item.icon}
                </div>
                <h3
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1rem",
                    fontWeight: 700,
                    color: "#fff",
                    margin: "0 0 0.6rem 0",
                    letterSpacing: "0.02em",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.875rem",
                    color: "rgba(255,255,255,0.45)",
                    lineHeight: 1.7,
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
