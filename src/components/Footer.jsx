import { siteData } from "../data/siteData";

export default function Footer() {
  const waLink = `https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(siteData.cta.waMessage)}`;
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        background: "#060606",
        padding: "4rem 2rem 2.5rem",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: "4rem",
            marginBottom: "4rem",
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "2rem",
                letterSpacing: "0.12em",
                color: "#E8FF3B",
                marginBottom: "1rem",
              }}
            >
              {siteData.gymName}
            </div>
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.88rem",
                color: "rgba(255,255,255,0.35)",
                lineHeight: 1.75,
                margin: "0 0 1.5rem 0",
                maxWidth: "300px",
              }}
            >
              {siteData.tagline}. A premium fitness facility designed for people who take their health seriously.
            </p>
            <a
              href={waLink}
              target="_blank"
              rel="noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#25D366",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.82rem",
                fontWeight: 600,
                textDecoration: "none",
                letterSpacing: "0.04em",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.535 5.857L.057 23.966l6.263-1.643A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.885 0-3.652-.51-5.168-1.399l-.371-.22-3.864 1.013 1.032-3.765-.242-.386A9.942 9.942 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* Links */}
          <div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                fontWeight: 600,
                marginBottom: "1.25rem",
              }}
            >
              Navigation
            </div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {siteData.nav.map((item) => (
                <li key={item}>
                  <button
                    onClick={() =>
                      document
                        .getElementById(item.toLowerCase().replace(/\s/g, "-"))
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                    style={{
                      background: "none",
                      border: "none",
                      color: "rgba(255,255,255,0.45)",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "0.88rem",
                      cursor: "pointer",
                      padding: 0,
                      transition: "color 0.2s",
                      fontWeight: 500,
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#E8FF3B")}
                    onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.45)")}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <div
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.72rem",
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.3)",
                fontWeight: 600,
                marginBottom: "1.25rem",
              }}
            >
              Contact
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { label: siteData.phone, href: `tel:${siteData.phone}` },
                { label: siteData.email, href: `mailto:${siteData.email}` },
                { label: siteData.address, href: null },
              ].map((item, i) => (
                <div key={i}>
                  {item.href ? (
                    <a
                      href={item.href}
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.85rem",
                        color: "rgba(255,255,255,0.45)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={(e) => (e.target.style.color = "#fff")}
                      onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.45)")}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <span
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.85rem",
                        color: "rgba(255,255,255,0.35)",
                        lineHeight: 1.6,
                        display: "block",
                      }}
                    >
                      {item.label}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.06)",
            paddingTop: "2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.2)",
            }}
          >
            © {year} {siteData.gymName}. All rights reserved.
          </span>
          <span
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.78rem",
              color: "rgba(255,255,255,0.2)",
            }}
          >
            Built for performance. Designed to convert.
          </span>
        </div>
      </div>
    </footer>
  );
}
