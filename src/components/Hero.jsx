import { siteData } from "../data/siteData";

export default function Hero() {
  const waLink = `https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(siteData.cta.waMessage)}`;

  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        background: "#0A0A0A",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background geometric elements */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "55%",
          height: "100%",
          background: "linear-gradient(135deg, #111 0%, #1a1a0a 100%)",
          clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0% 100%)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "5%",
          width: "420px",
          height: "420px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,255,59,0.07) 0%, transparent 70%)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "10%",
          right: "20%",
          width: "1px",
          height: "200px",
          background: "linear-gradient(to bottom, transparent, rgba(232,255,59,0.4), transparent)",
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "30%",
          right: "10%",
          width: "1px",
          height: "150px",
          background: "linear-gradient(to bottom, transparent, rgba(232,255,59,0.25), transparent)",
          zIndex: 0,
        }}
      />
      {/* Large background text */}
      <div
        style={{
          position: "absolute",
          bottom: "-0.05em",
          right: "-0.02em",
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "22vw",
          color: "rgba(255,255,255,0.025)",
          lineHeight: 1,
          userSelect: "none",
          zIndex: 0,
          letterSpacing: "-0.02em",
        }}
      >
        IRON
      </div>

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 2rem",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
          paddingTop: "72px",
        }}
        className="hero-grid"
      >
        {/* Left: Text */}
        <div style={{ paddingTop: "2rem" }}>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              background: "rgba(232,255,59,0.1)",
              border: "1px solid rgba(232,255,59,0.3)",
              borderRadius: "2px",
              padding: "0.35rem 0.85rem",
              marginBottom: "2.5rem",
            }}
          >
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#E8FF3B", animation: "pulse 2s infinite" }} />
            <span
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.75rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#E8FF3B",
                fontWeight: 600,
              }}
            >
              {siteData.hero.badge}
            </span>
          </div>

          <h1
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(4rem, 7vw, 7.5rem)",
              lineHeight: 0.92,
              letterSpacing: "0.02em",
              color: "#fff",
              margin: "0 0 2rem 0",
              whiteSpace: "pre-line",
            }}
          >
            {siteData.hero.heading.split("\n").map((line, i) => (
              <span
                key={i}
                style={{
                  display: "block",
                  color: i === 2 ? "#E8FF3B" : "#fff",
                }}
              >
                {line}
              </span>
            ))}
          </h1>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.05rem",
              color: "rgba(255,255,255,0.55)",
              lineHeight: 1.7,
              maxWidth: "420px",
              marginBottom: "3rem",
            }}
          >
            {siteData.hero.subheading}
          </p>

          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.6rem",
                background: "#25D366",
                color: "#fff",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 700,
                fontSize: "0.9rem",
                padding: "0.9rem 1.8rem",
                borderRadius: "2px",
                textDecoration: "none",
                letterSpacing: "0.04em",
                transition: "transform 0.2s, box-shadow 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(37,211,102,0.35)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.535 5.857L.057 23.966l6.263-1.643A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.51-5.168-1.399l-.371-.22-3.864 1.013 1.032-3.765-.242-.386A9.942 9.942 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              Join on WhatsApp
            </a>

            <button
              onClick={() => scrollTo("pricing")}
              style={{
                background: "transparent",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#fff",
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.9rem",
                padding: "0.9rem 1.8rem",
                borderRadius: "2px",
                cursor: "pointer",
                letterSpacing: "0.04em",
                transition: "border-color 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#E8FF3B";
                e.currentTarget.style.color = "#E8FF3B";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                e.currentTarget.style.color = "#fff";
              }}
            >
              View Plans →
            </button>
          </div>
        </div>

        {/* Right: Stats panel */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            background: "rgba(232,255,59,0.1)",
            border: "1px solid rgba(232,255,59,0.1)",
            borderRadius: "4px",
            overflow: "hidden",
            alignSelf: "center",
          }}
          className="stats-grid"
        >
          {siteData.stats.map((stat, i) => (
            <div
              key={i}
              style={{
                background: i % 2 === 0 ? "#0f0f0f" : "#111105",
                padding: "2.5rem 2rem",
                display: "flex",
                flexDirection: "column",
                gap: "0.5rem",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#161600")}
              onMouseLeave={(e) =>
                (e.currentTarget.style.background = i % 2 === 0 ? "#0f0f0f" : "#111105")
              }
            >
              <div
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "3.2rem",
                  color: "#E8FF3B",
                  lineHeight: 1,
                  letterSpacing: "0.02em",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.8rem",
                  color: "rgba(255,255,255,0.45)",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          zIndex: 1,
        }}
      >
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.7rem",
            letterSpacing: "0.15em",
            color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, rgba(232,255,59,0.6), transparent)",
            animation: "scrollPulse 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
}
