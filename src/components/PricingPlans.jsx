import { siteData } from "../data/siteData";

export default function PricingPlans() {
  const waLink = `https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(siteData.cta.waMessage)}`;

  return (
    <section
      id="pricing"
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
      <div
        style={{
          position: "absolute",
          right: "-5%",
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
        <div style={{ textAlign: "center", marginBottom: "5rem" }}>
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
            Membership
          </span>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3rem, 5vw, 5rem)",
              color: "#fff",
              margin: "0 0 1.5rem 0",
              lineHeight: 0.95,
              letterSpacing: "0.02em",
            }}
          >
            No Contracts.
            <br />
            <span style={{ color: "#E8FF3B" }}>Just Results.</span>
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.95rem",
              color: "rgba(255,255,255,0.4)",
              margin: 0,
            }}
          >
            All plans are monthly. Cancel or upgrade anytime.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1.5rem",
            alignItems: "stretch",
          }}
          className="pricing-grid"
        >
          {siteData.plans.map((plan) => (
            <div
              key={plan.id}
              style={{
                background: plan.highlighted ? "#E8FF3B" : "#111",
                border: plan.highlighted ? "none" : "1px solid rgba(255,255,255,0.08)",
                borderRadius: "4px",
                padding: "2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.8rem",
                position: "relative",
                transform: plan.highlighted ? "scale(1.04)" : "scale(1)",
                boxShadow: plan.highlighted ? "0 24px 60px rgba(232,255,59,0.2)" : "none",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
            >
              {plan.highlighted && (
                <div
                  style={{
                    position: "absolute",
                    top: "-14px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: "#0A0A0A",
                    color: "#E8FF3B",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.68rem",
                    fontWeight: 700,
                    letterSpacing: "0.15em",
                    textTransform: "uppercase",
                    padding: "0.35rem 1rem",
                    borderRadius: "20px",
                    border: "1px solid rgba(232,255,59,0.4)",
                    whiteSpace: "nowrap",
                  }}
                >
                  ★ Most Popular
                </div>
              )}

              <div>
                <h3
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "1.8rem",
                    color: plan.highlighted ? "#0A0A0A" : "#fff",
                    margin: "0 0 0.3rem 0",
                    letterSpacing: "0.08em",
                  }}
                >
                  {plan.name}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.82rem",
                    color: plan.highlighted ? "rgba(10,10,10,0.6)" : "rgba(255,255,255,0.4)",
                    margin: 0,
                  }}
                >
                  {plan.desc}
                </p>
              </div>

              <div style={{ display: "flex", alignItems: "baseline", gap: "0.2rem" }}>
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "3.5rem",
                    color: plan.highlighted ? "#0A0A0A" : "#fff",
                    lineHeight: 1,
                    letterSpacing: "0.02em",
                  }}
                >
                  {plan.price}
                </span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.85rem",
                    color: plan.highlighted ? "rgba(10,10,10,0.5)" : "rgba(255,255,255,0.4)",
                    fontWeight: 500,
                  }}
                >
                  {plan.period}
                </span>
              </div>

              <div
                style={{
                  height: "1px",
                  background: plan.highlighted ? "rgba(10,10,10,0.15)" : "rgba(255,255,255,0.08)",
                }}
              />

              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {plan.features.map((f, i) => (
                  <li
                    key={i}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.88rem",
                      color: plan.highlighted ? "#0A0A0A" : "rgba(255,255,255,0.7)",
                      fontWeight: 500,
                    }}
                  >
                    <span
                      style={{
                        color: plan.highlighted ? "#0A0A0A" : "#E8FF3B",
                        fontWeight: 700,
                        flexShrink: 0,
                        marginTop: "1px",
                      }}
                    >
                      ✓
                    </span>
                    {f}
                  </li>
                ))}
                {plan.notIncluded.map((f, i) => (
                  <li
                    key={`no-${i}`}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "0.75rem",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.88rem",
                      color: plan.highlighted ? "rgba(10,10,10,0.35)" : "rgba(255,255,255,0.2)",
                      textDecoration: "line-through",
                    }}
                  >
                    <span style={{ flexShrink: 0, marginTop: "1px" }}>✗</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={waLink}
                target="_blank"
                rel="noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  padding: "0.9rem",
                  borderRadius: "2px",
                  fontFamily: "'DM Sans', sans-serif",
                  fontWeight: 700,
                  fontSize: "0.88rem",
                  letterSpacing: "0.06em",
                  textTransform: "uppercase",
                  textDecoration: "none",
                  marginTop: "auto",
                  transition: "all 0.2s",
                  background: plan.highlighted ? "#0A0A0A" : "transparent",
                  color: plan.highlighted ? "#E8FF3B" : "#fff",
                  border: plan.highlighted ? "none" : "1px solid rgba(255,255,255,0.2)",
                }}
                onMouseEnter={(e) => {
                  if (!plan.highlighted) {
                    e.currentTarget.style.borderColor = "#E8FF3B";
                    e.currentTarget.style.color = "#E8FF3B";
                    e.currentTarget.style.background = "rgba(232,255,59,0.05)";
                  } else {
                    e.currentTarget.style.background = "#1a1a00";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!plan.highlighted) {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.background = "transparent";
                  } else {
                    e.currentTarget.style.background = "#0A0A0A";
                  }
                }}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
