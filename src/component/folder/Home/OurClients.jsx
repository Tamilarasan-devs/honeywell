import { useEffect, useRef, useState } from "react";

const clients = [
  { name: "Bentex Group", since: "2018", country: "France", tag: "Luxury RTW" },
  { name: "Chicco", since: "2019", country: "Italy", tag: "Childrenswear" },
  { name: "Mamas & Papas", since: "2017", country: "UK", tag: "Premium Baby" },
  { name: "Orchestra", since: "2020", country: "France", tag: "Kids Fashion" },
  { name: "LC Waikiki", since: "2016", country: "Turkey", tag: "Mass Market" },
  { name: "Walmart", since: "2021", country: "USA", tag: "Global Retail" },
  { name: "Jomo Fashion", since: "2022", country: "Germany", tag: "Contemporary" },
  { name: "Boots", since: "2019", country: "UK", tag: "Health & Beauty" },
];

const heroImages = [
  "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
  "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80",
  "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&q=80",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=800&q=80",
];

const bgTexture =
  "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=1800&q=60";

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return [ref, visible];
}

export default function OurClients() {
  const [headerRef, headerVisible] = useReveal();
  const [statsRef, statsVisible] = useReveal();
  const [listRef, listVisible] = useReveal();
  const marqueeRef = useRef(null);
  const [activeClient, setActiveClient] = useState(null);
  const [imgIdx, setImgIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setImgIdx(i => (i + 1) % heroImages.length), 3500);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const container = marqueeRef.current;
    if (!container) return;
    let frame, pos = 0, paused = false;
    const animate = () => {
      if (!paused) {
        pos += 0.5;
        if (pos >= container.scrollWidth / 2) pos = 0;
        container.scrollLeft = pos;
      }
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    const pause = () => (paused = true);
    const play = () => (paused = false);
    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", play);
    return () => {
      cancelAnimationFrame(frame);
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", play);
    };
  }, []);

  return (
    <div style={{ fontFamily: "'Cormorant Garamond', Georgia, serif", background: "#eef7fa", minHeight: "100vh", overflow: "hidden" }}>

      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Didact+Gothic&family=Cinzel:wght@400;600;900&display=swap');

        .ticker-hide::-webkit-scrollbar { display: none; }
        .ticker-hide { scrollbar-width: none; -ms-overflow-style: none; }

        .client-row {
          border-bottom: 1px solid rgba(161,122,42,0.15);
          transition: background 0.4s, border-color 0.4s;
          cursor: default;
        }
        .client-row:hover { background: rgba(161,122,42,0.04); border-color: rgba(161,122,42,0.5); }

        .stat-val {
          font-family: 'Cinzel', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 900;
          background: linear-gradient(135deg, #1b5e7d 0%, #D4A84B 50%, #8A641B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .blue-line {
          width: 40px; height: 1px;
          background: linear-gradient(90deg, transparent, #B38A36, transparent);
          margin: 0 auto;
        }

        .ticker-item {
          transition: color 0.3s;
        }
        .ticker-item:hover { color: #1b5e7d; }

        .img-panel {
          position: absolute; inset: 0;
          transition: opacity 1.2s ease;
        }

        .hero-tag {
          font-family: 'Didact Gothic', sans-serif;
          font-size: 9px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: #1b5e7d;
        }

        .section-eyebrow {
          font-family: 'Didact Gothic', sans-serif;
          font-size: 10px;
          letter-spacing: 0.6em;
          text-transform: uppercase;
          color: #1b5e7d;
        }

        .client-name-lg {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 300;
          font-style: italic;
          color: #2C2621;
          line-height: 1;
          transition: color 0.3s;
        }

        .client-row:hover .client-name-lg { color: #1b5e7d; }

        .client-country {
          font-family: 'Didact Gothic', sans-serif;
          font-size: 10px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(138,100,27,0.7);
        }

        .reveal-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.9s ease, transform 0.9s ease;
        }
        .reveal-up.visible {
          opacity: 1;
          transform: translateY(0);
        }

        .stagger-1 { transition-delay: 0.1s; }
        .stagger-2 { transition-delay: 0.2s; }
        .stagger-3 { transition-delay: 0.3s; }
        .stagger-4 { transition-delay: 0.4s; }
        .stagger-5 { transition-delay: 0.5s; }
        .stagger-6 { transition-delay: 0.6s; }
        .stagger-7 { transition-delay: 0.7s; }
        .stagger-8 { transition-delay: 0.8s; }

        @keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }
        @keyframes scanline {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(400%); }
        }
      `}</style>

      {/* ── HERO ── */}
      <section style={{ position: "relative", height: "100vh", minHeight: 700, display: "flex", alignItems: "flex-end" }}>

        {/* Background Image Crossfade */}
        {heroImages.map((src, i) => (
          <div key={src} className="img-panel" style={{ opacity: i === imgIdx ? 1 : 0 }}>
            <img src={src} alt="" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(250,248,245,0.25) 0%, rgba(250,248,245,0.65) 60%, rgba(250,248,245,0.98) 100%)" }} />
          </div>
        ))}

        {/* Scanline overlay */}
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", opacity: 0.04, zIndex: 2 }}>
          <div style={{ position: "absolute", left: 0, right: 0, height: "30%", background: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,1) 2px, rgba(0,0,0,1) 4px)", animation: "scanline 8s linear infinite" }} />
        </div>

        {/* Vertical text left */}
        <div style={{ position: "absolute", left: 32, top: "50%", transform: "translateY(-50%) rotate(-90deg)", transformOrigin: "center", zIndex: 10 }}>
          <span className="section-eyebrow" style={{ whiteSpace: "nowrap" }}>Est. 1999 · Tiruppur, India</span>
        </div>

        {/* Image counter right */}
        <div style={{ position: "absolute", right: 32, top: "50%", transform: "translateY(-50%)", zIndex: 10, textAlign: "center" }}>
          {heroImages.map((_, i) => (
            <div key={i} onClick={() => setImgIdx(i)} style={{ width: 1, height: i === imgIdx ? 40 : 20, background: i === imgIdx ? "#1b5e7d" : "rgba(44,38,33,0.2)", margin: "6px auto", cursor: "pointer", transition: "all 0.4s" }} />
          ))}
        </div>

        {/* Hero Content */}
        <div style={{ position: "relative", zIndex: 10, padding: "0 clamp(2rem, 8vw, 8rem) 6rem" }}>
          <p className="section-eyebrow" style={{ marginBottom: "1.5rem", animation: "fadeIn 1s ease" }}>Trusted Worldwide · Global Partnerships</p>
          <h1 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(2.8rem, 7vw, 7rem)",
            fontWeight: 900,
            color: "#2C2621",
            lineHeight: 1.0,
            letterSpacing: "0.02em",
            margin: 0,
            animation: "fadeIn 1s ease 0.2s both"
          }}>
            Global Brands.<br />
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 300,
              fontSize: "clamp(2rem, 5vw, 5rem)",
              background: "linear-gradient(135deg, #1b5e7d, #D4A84B, #8A641B)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>Enduring Partnerships.</span>
          </h1>

          <div style={{ marginTop: "2rem", display: "flex", alignItems: "center", gap: "1.5rem", animation: "fadeIn 1s ease 0.5s both" }}>
            <div style={{ width: 60, height: 1, background: "linear-gradient(90deg, #1b5e7d, transparent)" }} />
            <p style={{ fontFamily: "'Didact Gothic', sans-serif", fontSize: 13, letterSpacing: "0.2em", color: "rgba(44,38,33,0.6)", margin: 0, textTransform: "uppercase" }}>
              Scroll to explore
            </p>
          </div>
        </div>
      </section>

      {/* ── INTRO STRIP ── */}
      <section style={{ background: "#F3EFE9", borderTop: "1px solid rgba(161,122,42,0.15)", borderBottom: "1px solid rgba(161,122,42,0.15)", padding: "3rem clamp(2rem, 8vw, 8rem)" }}>
        <p style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "clamp(1.1rem, 2.5vw, 1.5rem)", color: "rgba(44,38,33,0.75)", maxWidth: 800, lineHeight: 1.9, margin: 0 }}>
          For over two decades, leading international fashion, retail, and childrenswear brands have trusted us to deliver excellence in textile manufacturing, quality assurance, and global supply chain execution.
        </p>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: "#eef7fa", padding: "6rem clamp(2rem, 8vw, 8rem)" }}>
        <div ref={statsRef} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "3rem" }}>
          {[
            { val: "25+", label: "Years Experience" },
            { val: "12+", label: "Countries Served" },
            { val: "8+", label: "Global Brands" },
            { val: "100%", label: "Client Retention" },
          ].map((s, i) => (
            <div key={s.label} className={`reveal-up stagger-${i + 1} ${statsVisible ? "visible" : ""}`} style={{ textAlign: "center" }}>
              <div className="stat-val">{s.val}</div>
              <div className="blue-line" style={{ margin: "1rem auto" }} />
              <p className="section-eyebrow" style={{ margin: 0 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MARQUEE TICKER ── */}
      <div style={{ background: "#B38A36", padding: "0.9rem 0", overflow: "hidden", position: "relative" }}>
        <div ref={marqueeRef} className="ticker-hide" style={{ overflowX: "auto", whiteSpace: "nowrap" }}>
          <div style={{ display: "inline-flex", gap: "3rem", padding: "0 2rem" }}>
            {[...clients, ...clients, ...clients].map((c, i) => (
              <span key={i} style={{ fontFamily: "'Cinzel', serif", fontSize: 11, letterSpacing: "0.3em", color: "#eef7fa", textTransform: "uppercase" }}>
                {c.name} <span style={{ opacity: 0.5 }}>·</span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* ── SPLIT FEATURE SECTION ── */}
      <section style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minHeight: "80vh" }}>
        {/* Left: large fashion image */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=1000&q=80"
            alt="Fashion manufacturing"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", filter: "contrast(0.95) brightness(1.05)" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(250,248,245,0.75) 0%, transparent 60%)" }} />
          <div style={{ position: "absolute", bottom: 40, left: 40 }}>
            <p className="hero-tag">Since 2016</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: "#2C2621", margin: "0.5rem 0 0", fontWeight: 300, fontStyle: "italic" }}>Where craft meets commerce</p>
          </div>
        </div>

        {/* Right: second image */}
        <div style={{ position: "relative", overflow: "hidden" }}>
          <img
            src="https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=1000&q=80"
            alt="Textile excellence"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", filter: "contrast(0.95) brightness(1.05)" }}
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(225deg, rgba(250,248,245,0.75) 0%, transparent 60%)" }} />
          <div style={{ position: "absolute", top: 40, right: 40, textAlign: "right" }}>
            <p className="hero-tag">Global Reach</p>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: "#2C2621", margin: "0.5rem 0 0", fontWeight: 300, fontStyle: "italic" }}>Precision at scale</p>
          </div>
        </div>
      </section>

      {/* ── CLIENT LIST ── */}
      <section style={{ background: "#eef7fa", padding: "6rem clamp(2rem, 8vw, 8rem)" }}>

        <div ref={headerRef} className={`reveal-up ${headerVisible ? "visible" : ""}`} style={{ marginBottom: "4rem" }}>
          <p className="section-eyebrow" style={{ marginBottom: "1.5rem" }}>Our Partners</p>
          <h2 style={{
            fontFamily: "'Cinzel', serif",
            fontSize: "clamp(2rem, 5vw, 4.5rem)",
            fontWeight: 900,
            color: "#2C2621",
            margin: 0,
            letterSpacing: "0.04em"
          }}>Global Clients</h2>
          <div style={{ width: 60, height: 1, background: "linear-gradient(90deg, #1b5e7d, transparent)", marginTop: "1.5rem" }} />
        </div>

        <div ref={listRef}>
          {clients.map((client, index) => (
            <div
              key={client.name}
              className={`client-row reveal-up stagger-${Math.min(index + 1, 8)} ${listVisible ? "visible" : ""}`}
              onMouseEnter={() => setActiveClient(index)}
              onMouseLeave={() => setActiveClient(null)}
              style={{ display: "grid", gridTemplateColumns: "3rem 1fr auto", alignItems: "center", gap: "2rem", padding: "1.8rem 0" }}
            >
              {/* Index */}
              <span style={{ fontFamily: "'Didact Gothic', sans-serif", fontSize: 10, letterSpacing: "0.3em", color: "rgba(161,122,42,0.4)" }}>
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* Name + tag */}
              <div>
                <div className="client-name-lg" style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}>
                  {client.name}
                </div>
                <div style={{ display: "flex", gap: "1.5rem", marginTop: "0.3rem", alignItems: "center" }}>
                  <span className="client-country">{client.country}</span>
                  <span style={{ width: 3, height: 3, borderRadius: "50%", background: "rgba(161,122,42,0.3)", display: "inline-block" }} />
                  <span className="client-country">{client.tag}</span>
                </div>
              </div>

              {/* Year */}
              <div style={{ textAlign: "right" }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontSize: "clamp(1.2rem, 2.5vw, 2rem)", color: "#1b5e7d", fontWeight: 300 }}>
                  {client.since}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CLOSING BANNER ── */}
      <section style={{ position: "relative", overflow: "hidden", minHeight: 400, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img
          src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1800&q=70"
          alt=""
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center", filter: "contrast(0.95) brightness(1.05)" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "rgba(250,248,245,0.85)" }} />
        <div style={{ position: "relative", zIndex: 10, textAlign: "center", padding: "4rem clamp(2rem, 8vw, 8rem)" }}>
          <div className="blue-line" style={{ marginBottom: "2rem" }} />
          <p className="font-bold" style={{ fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", fontWeight: 300, fontSize: "clamp(1.2rem, 3vw, 2rem)", color: "rgba(44,38,33,0.9)", lineHeight: 1.8, maxWidth: 700, margin: "0 auto", }}>
            Built on trust, strengthened through quality, and sustained by long-term partnerships across global markets.
          </p>
          <div className="blue-line" style={{ marginTop: "2rem" }} />
        </div>
      </section>

    </div>
  );
}