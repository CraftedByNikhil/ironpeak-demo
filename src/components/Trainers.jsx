import { siteData } from "../data/siteData";

export default function Trainers() {
  return (
    <section
      id="trainers"
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
          background: "linear-gradient(to right, transparent, rgba(232,255,59,0.2), transparent)",
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
            The Coaches
          </span>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3rem, 5vw, 5rem)",
              color: "#fff",
              margin: 0,
              lineHeight: 0.95,
              letterSpacing: "0.02em",
            }}
          >
            Your Results Start
            <br />
            <span style={{ color: "#E8FF3B" }}>With Their Expertise</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.06)",
          }}
          className="trainers-grid"
        >
          {siteData.trainers.map((trainer, i) => (
            <div
              key={trainer.id}
              style={{
                background: "#111",
                padding: "2.5rem 2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.2rem",
                transition: "background 0.25s",
                cursor: "default",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#161606")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#111")}
            >
              {/* Avatar */}
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #1a1a00, #2d2d00)",
                  border: "2px solid rgba(232,255,59,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.4rem",
                  color: "#E8FF3B",
                  letterSpacing: "0.05em",
                  flexShrink: 0,
                }}
              >
                {trainer.initials}
              </div>

              <div>
                <h3
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "1.05rem",
                    fontWeight: 700,
                    color: "#fff",
                    margin: "0 0 0.3rem 0",
                  }}
                >
                  {trainer.name}
                </h3>
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.78rem",
                    color: "#E8FF3B",
                    margin: 0,
                    fontWeight: 500,
                    letterSpacing: "0.03em",
                  }}
                >
                  {trainer.role}
                </p>
              </div>

              <div
                style={{
                  height: "1px",
                  background: "rgba(255,255,255,0.08)",
                  width: "100%",
                }}
              />

              <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.7rem",
                      color: "rgba(255,255,255,0.3)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontWeight: 600,
                      minWidth: "52px",
                      marginTop: "1px",
                    }}
                  >
                    Exp
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.82rem",
                      color: "rgba(255,255,255,0.7)",
                      fontWeight: 500,
                    }}
                  >
                    {trainer.exp}
                  </span>
                </div>
                <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.7rem",
                      color: "rgba(255,255,255,0.3)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontWeight: 600,
                      minWidth: "52px",
                      marginTop: "1px",
                    }}
                  >
                    Cert
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.78rem",
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    {trainer.certs}
                  </span>
                </div>
                <div style={{ display: "flex", gap: "0.5rem", alignItems: "flex-start" }}>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.7rem",
                      color: "rgba(255,255,255,0.3)",
                      textTransform: "uppercase",
                      letterSpacing: "0.1em",
                      fontWeight: 600,
                      minWidth: "52px",
                      marginTop: "1px",
                    }}
                  >
                    Focus
                  </span>
                  <span
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.78rem",
                      color: "rgba(255,255,255,0.6)",
                    }}
                  >
                    {trainer.specialty}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
