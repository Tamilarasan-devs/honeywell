import { useState, useEffect } from "react";
import bgImage from "../../../assets/hw2.jpg";
import bg from '../../../assets/img.jpg'
import bg1 from '../../../assets/img1.jpg'

export default function About() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="min-h-screen font-sans relative overflow-x-hidden"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(253, 252, 249, 0.9) 0%, rgba(246, 242, 235, 0.85) 50%, rgba(253, 252, 249, 0.9) 100%), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        fontFamily: "'Cormorant Garamond', 'Georgia', serif",
      }}
    >
      <div className="relative w-full flex items-center justify-center mt-24 px-6">
        <div className="relative w-full overflow-hidden rounded-3xl shadow-xl">
          <img
            src={bg}
            alt="bg"
            className="w-full  "
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
            <h2 className="text-6xl md:text-8xl font-bold text-black leading-none text-center drop-shadow-lg">
              Honeywell <br />
              <span className="text-black" style={{ fontStyle: "italic", fontWeight: "300" }}>Creation</span>
            </h2>
          </div>
        </div>
      </div>
      {/* Editorial & Avant-Garde CSS Styling */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Outfit:wght@200;300;400;500;600;700&display=swap');
        
        * { box-sizing: border-box; }

        .outfit-font { font-family: 'Outfit', sans-serif; }

        /* Rotational badge style */
        @keyframes rotateBadge {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .luxury-rotating-seal {
          animation: rotateBadge 20s linear infinite;
        }

        .outline-backdrop-text {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(80px, 16vw, 240px);
          font-weight: 700;
          color: transparent;
          -webkit-text-stroke: 1px rgba(196, 162, 101, 0.06);
          user-select: none;
          pointer-events: none;
        }

        .blue-gradient {
          background: linear-gradient(90deg, #1b5e7d 0%, #4da4cc 50%, #1b5e7d 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Highly stylized asymmetric lists */
        .editorial-narrative-block {
          position: relative;
          padding: 40px 0;
          border-top: 1px solid rgba(196, 162, 101, 0.2);
          transition: all 0.5s ease;
        }
        .editorial-narrative-block:hover {
          padding-left: 20px;
          border-top-color: #4da4cc;
        }

        .giant-index-num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 72px;
          font-weight: 300;
          color: rgba(196, 162, 101, 0.15);
          line-height: 1;
          transition: all 0.4s ease;
        }
        .editorial-narrative-block:hover .giant-index-num {
          color: #4da4cc;
          transform: scale(1.1);
        }

        .fashion-accent-dot {
          width: 8px; height: 8px;
          background: #4da4cc;
          border-radius: 50%;
          display: inline-block;
          margin-right: 12px;
        }

        .fade-up-element {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 1.4s cubic-bezier(0.16, 1, 0.3, 1), transform 1.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .fade-up-element.triggered {
          opacity: 1;
          transform: translateY(0);
        }

        .d-1 { transition-delay: 0.15s; }
        .d-2 { transition-delay: 0.3s; }
        .d-3 { transition-delay: 0.45s; }
        .d-4 { transition-delay: 0.6s; }

        .luxury-badge {
          font-family: 'Outfit', sans-serif;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 0.35em;
          color: #1b5e7d;
          border: 1px solid rgba(196, 162, 101, 0.3);
          padding: 6px 20px;
          display: inline-block;
          text-transform: uppercase;
        }

        .fashion-label {
          font-family: 'Outfit', sans-serif;
          font-size: 11px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #1b5e7d;
          font-weight: 700;
        }
      `}</style>

      {/* Large Floating Background Outlined Words */}
      <div className="absolute top-1/4 -left-12 outline-backdrop-text z-0">
        HERITAGE
      </div>
      <div className="absolute top-2/3 -right-12 outline-backdrop-text z-0">
        PRECISION
      </div>

      <div className="relative z-10">

        {/* ── STUNNING HERO VOGUE-STYLE LAYOUT ─────────────────── */}
        {/* <section className="relative flex flex-col items-center justify-center text-center px-6 pt-40 pb-28 md:pt-52 md:pb-36">
          Circular Luxury Spinning Seal Badge
          <div className="absolute top-12 right-8 md:right-24 hidden md:block w-28 h-28 pointer-events-none">
            <svg className="luxury-rotating-seal w-full h-full" viewBox="0 0 100 100">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
              <text className="outfit-font fill-[#1b5e7d] text-[7.5px] font-bold tracking-[0.25em] uppercase">
                <textPath href="#circlePath">
                  · HONEYWELL CREATION · SINCE 2007 · TIRUPUR ·
                </textPath>
              </text>
            </svg>
          </div>
        </section> */}

        {/* ── FASHION ROW METRICS WITH CONTINUOUS TOP/BOTTOM BORDERS ── */}
        <section className={`px-6 py-12 border-t border-b border-[#4da4cc]/25 bg-white/30 backdrop-blur-sm fade-up-element d-3 ${visible ? "triggered" : ""}`}>
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { num: "1,800+", label: "Advanced Japanese Sewing Frames" },
              { num: "2007", label: "Inception Of Manufacturing Heritage" },
              { num: "18+", label: "Years Of Continuous Excellence" },
              { num: "Lean", label: "Zero-Waste Operational Standards" },
            ].map((s, i) => (
              <div key={i} className="text-center md:text-left">
                <p className="blue-gradient font-serif text-4xl md:text-5xl font-light leading-none mb-2">
                  {s.num}
                </p>
                <p className="outfit-font text-[#7A6B5A] text-[10px] font-bold tracking-widest uppercase leading-normal">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* ── THE EDITORIAL CHRONICLE (OUR STORY ASYMMETRICAL GRID) ── */}
        <section className="px-6 py-36 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">

            {/* Left Narrative Column */}
            <div className={`lg:col-span-6 space-y-8 fade-up-element d-3 ${visible ? "triggered" : ""}`}>
              <div className="flex items-center gap-3">
                <span className="fashion-accent-dot" />
                <p className="fashion-label">Sartorial Narrative</p>
              </div>

              <h2
                className="editorial-title text-[#1A1410] leading-none"
                style={{ fontSize: "clamp(48px, 8vw, 84px)" }}
              >
                From 40 Machines<br />
                <span className="blue-gradient" style={{ fontStyle: "italic" }}>to an Industry Icon</span>
              </h2>

              <p className="font-serif text-[#3A332C] italic leading-[1.8]" style={{ fontSize: "clamp(20px, 2.4vw, 26px)" }}>
                "We fuse automated high-speed layouts with artisan intuition — crafting not just products, but the infrastructure of global fashion."
              </p>

              <p className="outfit-font text-[#5C5043] text-base md:text-lg leading-relaxed font-light">
                Honeywell Creation was born in 2007 within Tirupur, India’s textile heartland. Driven by a bold mandate, we sought to completely modernize standard apparel assembly processes.
              </p>

              <p className="outfit-font text-[#5C5043] text-base md:text-lg leading-relaxed font-light">
                What began with less than 40 power-operated machines evolved into a high-capacity smart-infrastructure enterprise. Our digital fitting labs, CAD systems, and robotic sewing modules ensure every garment meets uncompromising standards.
              </p>
            </div>

            {/* Right Asymmetrical Lists Column (NO CARDS - Dynamic Editorial Blocks) */}
            <div className={`lg:col-span-6 space-y-2 fade-up-element d-4 ${visible ? "triggered" : ""}`}>
              {[
                {
                  idx: "01",
                  title: "1,800 Japanese Sewing Systems",
                  desc: "Engineered with automatic thread trims, laser stitch lines, and sensor-driven tension controls for flawless structural results.",
                },
                {
                  idx: "02",
                  title: "Lean Supply Infrastructure",
                  desc: "Operating on a fully digital material flow that ensures fabric tracking, pattern nesting optimization, and zero waste.",
                },
                {
                  idx: "03",
                  title: "Artisanal Supervision Team",
                  desc: "Combining the speed of robotic machinery with manual visual checks at critical junctions to ensure maximum product lifespan.",
                },
              ].map((item, i) => (
                <div key={i} className="editorial-narrative-block grid grid-cols-12 gap-6 items-start">
                  <div className="col-span-3">
                    <span className="giant-index-num">{item.idx}</span>
                  </div>
                  <div className="col-span-9 space-y-2">
                    <h3 className="outfit-font text-[#1A1410] font-bold text-lg">{item.title}</h3>
                    <p className="outfit-font text-[#7A6B5A] text-lg font-medium leading-relaxed font-light">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ASYMMETRICAL TIMELINE GRID (NO VERTICAL TIMELINE CARDS) ── */}
        <section className={`px-6 pb-36 max-w-6xl mx-auto fade-up-element d-4 ${visible ? "triggered" : ""}`}>
          {/* Asymmetrical Chronology Grid */}
          <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
            {[
              {
                year: "2007",
                title: "The Founding Blueprint",
                desc: "Launched in Tirupur with a hand-selected cohort of 40 sewing modules, dedicating our entire focus to early-stage structural quality.",
              },
              {
                year: "2010s",
                title: "The Production Surge",
                desc: "Integrated state-of-the-art Japanese machine technology, scaling output to multiple international markets and global brands.",
              },
              {
                year: "Today",
                title: "Smart Global Factory",
                desc: "1,800+ automatic systems running on lean digital control layers, targeting 100% green energy powered operations.",
              },
            ].map((m, i) => (
              <div key={i} className="space-y-4 pt-8 border-t border-[#4da4cc]/40 hover:border-[#4da4cc] transition-colors duration-500">
                <span className="editorial-title text-[#4da4cc] text-5xl md:text-6xl font-light italic leading-none">{m.year}</span>
                <h3 className="outfit-font text-[#1A1410] font-bold text-lg mt-2">{m.title}</h3>
                <p className="outfit-font text-[#7A6B5A] text-lg font-medium leading-relaxed">{m.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── THE SIGNATURE STAMP DISPLAY (FOOTER BLOCK) ───────── */}
        <section
          className={`px-6 pb-32 text-center fade-up-element d-5 ${visible ? "triggered" : ""}`}
        >
          <div
            className="max-w-6xl mx-auto py-20 px-8 relative overflow-hidden"
            style={{
              borderTop: "1px solid rgba(196,162,101,0.25)",
              borderBottom: "1px solid rgba(196,162,101,0.25)",
            }}
          >
            <div
              style={{
                position: "absolute", inset: 0,
                background: "radial-gradient(ellipse at center, rgba(196,162,101,0.06) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />
            <p className="fashion-label mb-6">The Honeywell Blueprint</p>
            <h2
              className="editorial-title text-[#1A1410] mb-8 leading-none"
              style={{ fontSize: "clamp(48px, 8vw, 84px)" }}
            >
              Crafted with{" "}
              <span className="blue-gradient" style={{ fontStyle: "italic" }}>Precision.</span>
              <br />
              Delivered with <span className="blue-gradient" style={{ fontStyle: "italic" }}>Pride.</span>
            </h2>
            <div className="w-16 h-[2px] bg-[#4da4cc] mx-auto mb-8" />
            <p className="outfit-font text-[#7A6B5A] text-xs font-bold tracking-[0.35em] uppercase">
              Tirupur · Tamil Nadu · India
            </p>
          </div>
        </section>

      </div>
    </div>
  );
}