import { siteData } from "../data/siteData";

export default function Contact() {
  const waLink = `https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(siteData.cta.waMessage)}`;

  const contactItems = [
    {
      label: "Phone",
      value: siteData.phone,
      href: `tel:${siteData.phone}`,
      icon: "📞",
    },
    {
      label: "WhatsApp",
      value: "Chat with us",
      href: waLink,
      icon: "💬",
      external: true,
    },
    {
      label: "Email",
      value: siteData.email,
      href: `mailto:${siteData.email}`,
      icon: "✉️",
    },
    {
      label: "Address",
      value: siteData.address,
      href: null,
      icon: "📍",
    },
  ];

  return (
    <section
      id="contact"
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

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "6rem",
            alignItems: "start",
          }}
          className="contact-grid"
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
              Get In Touch
            </span>
            <h2
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "clamp(3rem, 5vw, 5rem)",
                color: "#fff",
                margin: "0 0 2rem 0",
                lineHeight: 0.95,
                letterSpacing: "0.02em",
              }}
            >
              Come Visit
              <br />
              <span style={{ color: "#E8FF3B" }}>The Gym</span>
            </h2>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.95rem",
                color: "rgba(255,255,255,0.45)",
                lineHeight: 1.75,
                margin: "0 0 3rem 0",
                maxWidth: "380px",
              }}
            >
              Walk in for a free tour. No pressure, no pitch — just come see the facility and meet the team.
            </p>

            {/* Timings */}
            <div
              style={{
                background: "#111",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "4px",
                padding: "1.75rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.72rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "#E8FF3B",
                  fontWeight: 600,
                  marginBottom: "0.25rem",
                }}
              >
                Opening Hours
              </div>
              {[
                { day: "Mon – Fri", time: siteData.timings.weekdays },
                { day: "Saturday", time: siteData.timings.saturday },
                { day: "Sunday", time: siteData.timings.sunday },
              ].map((row, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    paddingBottom: i < 2 ? "1rem" : 0,
                    borderBottom: i < 2 ? "1px solid rgba(255,255,255,0.06)" : "none",
                  }}
                >
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.88rem",
                      color: "rgba(255,255,255,0.5)",
                    }}
                  >
                    {row.day}
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.88rem",
                      color: "#fff",
                      fontWeight: 600,
                    }}
                  >
                    {row.time}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: contact cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1px", background: "rgba(255,255,255,0.06)" }}>
            {contactItems.map((item, i) => (
              <div
                key={i}
                style={{
                  background: "#111",
                  padding: "1.75rem 2rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "1.5rem",
                  transition: "background 0.2s",
                  cursor: item.href ? "pointer" : "default",
                }}
                onMouseEnter={(e) => item.href && (e.currentTarget.style.background = "#161606")}
                onMouseLeave={(e) => item.href && (e.currentTarget.style.background = "#111")}
                onClick={() =>
                  item.href &&
                  (item.external
                    ? window.open(item.href, "_blank")
                    : (window.location.href = item.href))
                }
              >
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "50%",
                    background: "rgba(232,255,59,0.08)",
                    border: "1px solid rgba(232,255,59,0.15)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.1rem",
                    flexShrink: 0,
                  }}
                >
                  {item.icon}
                </div>
                <div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.72rem",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "rgba(255,255,255,0.35)",
                      fontWeight: 600,
                      marginBottom: "0.25rem",
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.95rem",
                      color: item.href ? "#fff" : "rgba(255,255,255,0.7)",
                      fontWeight: 500,
                    }}
                  >
                    {item.value}
                  </div>
                </div>
                {item.href && (
                  <div
                    style={{
                      marginLeft: "auto",
                      color: "rgba(232,255,59,0.4)",
                      fontSize: "1rem",
                    }}
                  >
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
