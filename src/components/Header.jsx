import { useState, useEffect } from "react";
import { siteData } from "../data/siteData";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const waLink = `https://wa.me/${siteData.whatsapp}?text=${encodeURIComponent(siteData.cta.waMessage)}`;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(232,255,59,0.15)" : "none",
        padding: "0 2rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: "72px",
        }}
      >
        <div
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "1.9rem",
            letterSpacing: "0.12em",
            color: "#E8FF3B",
            cursor: "pointer",
            userSelect: "none",
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          {siteData.gymName}
        </div>

        <nav style={{ display: "flex", gap: "2rem", alignItems: "center" }} className="desktop-nav">
          {siteData.nav.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase().replace(/\s/g, "-"))}
              style={{
                background: "none",
                border: "none",
                color: "rgba(255,255,255,0.7)",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.88rem",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                cursor: "pointer",
                padding: "0.25rem 0",
                transition: "color 0.2s",
                fontWeight: 500,
              }}
              onMouseEnter={(e) => (e.target.style.color = "#E8FF3B")}
              onMouseLeave={(e) => (e.target.style.color = "rgba(255,255,255,0.7)")}
            >
              {item}
            </button>
          ))}
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#E8FF3B",
              color: "#0A0A0A",
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "0.82rem",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              padding: "0.6rem 1.4rem",
              borderRadius: "2px",
              textDecoration: "none",
              transition: "background 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              e.target.style.background = "#fff";
              e.target.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.target.style.background = "#E8FF3B";
              e.target.style.transform = "translateY(0)";
            }}
          >
            Join Now
          </a>
        </nav>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            display: "none",
            flexDirection: "column",
            gap: "5px",
            padding: "4px",
          }}
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              style={{
                display: "block",
                width: "24px",
                height: "2px",
                background: "#E8FF3B",
                transition: "all 0.3s",
                transform:
                  menuOpen && i === 0
                    ? "rotate(45deg) translate(5px, 5px)"
                    : menuOpen && i === 2
                    ? "rotate(-45deg) translate(5px, -5px)"
                    : menuOpen && i === 1
                    ? "opacity(0)"
                    : "none",
                opacity: menuOpen && i === 1 ? 0 : 1,
              }}
            />
          ))}
        </button>
      </div>

      {menuOpen && (
        <div
          style={{
            background: "rgba(10,10,10,0.98)",
            padding: "1.5rem 2rem 2rem",
            display: "flex",
            flexDirection: "column",
            gap: "1.2rem",
            borderTop: "1px solid rgba(232,255,59,0.15)",
          }}
          className="mobile-menu"
        >
          {siteData.nav.map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase().replace(/\s/g, "-"))}
              style={{
                background: "none",
                border: "none",
                color: "#fff",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "1rem",
                textAlign: "left",
                cursor: "pointer",
                fontWeight: 500,
                letterSpacing: "0.05em",
              }}
            >
              {item}
            </button>
          ))}
          <a
            href={waLink}
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#E8FF3B",
              color: "#0A0A0A",
              fontWeight: 700,
              fontSize: "0.9rem",
              padding: "0.75rem 1.5rem",
              borderRadius: "2px",
              textDecoration: "none",
              textAlign: "center",
              marginTop: "0.5rem",
            }}
          >
            Join Now
          </a>
        </div>
      )}
    </header>
  );
}
