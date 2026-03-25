import { siteData } from "../data/siteData";

export default function CTASection() {
  const waLink = `https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(siteData.cta.waMessage)}`;

  return (
    <section
      style={{
        background: "#E8FF3B",
        padding: "8rem 2rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          right: "-2%",
          bottom: "-10%",
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "18vw",
          color: "rgba(0,0,0,0.06)",
          lineHeight: 1,
          userSelect: "none",
          letterSpacing: "-0.02em",
        }}
      >
        NOW
      </div>

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr auto",
          gap: "4rem",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="cta-grid"
      >
        <div>
          <h2
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(3.5rem, 6vw, 7rem)",
              color: "#0A0A0A",
              margin: "0 0 1.2rem 0",
              lineHeight: 0.92,
              letterSpacing: "0.02em",
              whiteSpace: "pre-line",
            }}
          >
            {siteData.cta.heading}
          </h2>
          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.1rem",
              color: "rgba(10,10,10,0.55)",
              margin: 0,
              fontWeight: 500,
            }}
          >
            {siteData.cta.sub}
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "1rem", alignItems: "flex-end" }}>
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.75rem",
              background: "#0A0A0A",
              color: "#E8FF3B",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "0.95rem",
              padding: "1.1rem 2.2rem",
              borderRadius: "2px",
              textDecoration: "none",
              letterSpacing: "0.05em",
              whiteSpace: "nowrap",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 30px rgba(0,0,0,0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "none";
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.535 5.857L.057 23.966l6.263-1.643A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.51-5.168-1.399l-.371-.22-3.864 1.013 1.032-3.765-.242-.386A9.942 9.942 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Message Us on WhatsApp
          </a>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.78rem",
              color: "rgba(10,10,10,0.45)",
            }}
          >
            Usually replies within 5 minutes
          </span>
        </div>
      </div>
    </section>
  );
}
