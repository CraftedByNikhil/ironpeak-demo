import { siteData } from "../data/siteData";

export default function Programs() {
  return (
    <section
      id="programs"
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
          background: "linear-gradient(to right, transparent, rgba(232,255,59,0.3), transparent)",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        {/* Section header */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "5rem",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
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
              What We Offer
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
              Training
              <br />
              Programs
            </h2>
          </div>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.95rem",
              color: "rgba(255,255,255,0.45)",
              maxWidth: "340px",
              lineHeight: 1.7,
              margin: 0,
            }}
          >
            Structured programs for every goal — whether you're chasing a PR or starting from zero.
          </p>
        </div>

        {/* Featured first program - large */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1px",
            marginBottom: "1px",
            background: "rgba(255,255,255,0.06)",
          }}
          className="programs-top"
        >
          <div
            style={{
              background: "#111",
              padding: "3.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              position: "relative",
              overflow: "hidden",
              transition: "background 0.3s",
              cursor: "default",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#161606")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#111")}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: siteData.programs[0].color,
              }}
            />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: "2.5rem" }}>{siteData.programs[0].icon}</span>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#E8FF3B",
                  background: "rgba(232,255,59,0.1)",
                  border: "1px solid rgba(232,255,59,0.25)",
                  padding: "0.3rem 0.75rem",
                  borderRadius: "2px",
                  fontWeight: 600,
                }}
              >
                {siteData.programs[0].tag}
              </span>
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "2.2rem",
                  color: "#fff",
                  margin: "0 0 1rem 0",
                  letterSpacing: "0.04em",
                }}
              >
                {siteData.programs[0].title}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.95rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {siteData.programs[0].description}
              </p>
            </div>
          </div>

          <div
            style={{
              background: "#111",
              padding: "3.5rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.5rem",
              position: "relative",
              overflow: "hidden",
              transition: "background 0.3s",
              cursor: "default",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "#160c08")}
            onMouseLeave={(e) => (e.currentTarget.style.background = "#111")}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "2px",
                background: siteData.programs[1].color,
              }}
            />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontSize: "2.5rem" }}>{siteData.programs[1].icon}</span>
              <span
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.7rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "#FF5733",
                  background: "rgba(255,87,51,0.1)",
                  border: "1px solid rgba(255,87,51,0.25)",
                  padding: "0.3rem 0.75rem",
                  borderRadius: "2px",
                  fontWeight: 600,
                }}
              >
                {siteData.programs[1].tag}
              </span>
            </div>
            <div>
              <h3
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "2.2rem",
                  color: "#fff",
                  margin: "0 0 1rem 0",
                  letterSpacing: "0.04em",
                }}
              >
                {siteData.programs[1].title}
              </h3>
              <p
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.95rem",
                  color: "rgba(255,255,255,0.55)",
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {siteData.programs[1].description}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom 3 programs - horizontal list */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "1px",
            background: "rgba(255,255,255,0.06)",
          }}
          className="programs-bottom"
        >
          {siteData.programs.slice(2).map((program) => (
            <div
              key={program.id}
              style={{
                background: "#111",
                padding: "2.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
                position: "relative",
                overflow: "hidden",
                transition: "background 0.3s",
                cursor: "default",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#141414")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#111")}
            >
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: "2px",
                  background: program.color,
                  opacity: 0.7,
                }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ fontSize: "1.8rem" }}>{program.icon}</span>
                <span
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.65rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.4)",
                    fontWeight: 600,
                  }}
                >
                  {program.tag}
                </span>
              </div>
              <h3
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "1.6rem",
                  color: "#fff",
                  margin: 0,
                  letterSpacing: "0.04em",
                  lineHeight: 1.1,
                }}
              >
                {program.title}
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
                {program.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
