import { useEffect, useRef, useState } from "react";

const CAPABILITIES = [
  {
    title: "Eco-Certified Production",
    subtitle: "Sustainable Luxury",
    description: "Operating with absolute respect for nature. We utilize 100% organic pigments, GOTS-certified fabrics, and closed-loop water treatment systems to protect our planet.",
    icon: "🌱",
    tags: ["GOTS Certified", "OEKO-TEX Standard", "Zero Waste Dyeing"],
    accent: "#C4A265"
  },
  {
    title: "Advanced CAD & Digital Fit",
    subtitle: "Precision Engineering",
    description: "Seamless pattern nesting and 3D digital draping ensure perfect tailoring before a single blade touches fabric — saving time, eliminating waste, and ensuring precise silhouettes.",
    icon: "📐",
    tags: ["3D Digital Draping", "Laser-Guided Nesting", "Precision Grading"],
    accent: "#80C4BC"
  },
  {
    title: "Smart CNC Knitting & Weaving",
    subtitle: "Artistry Meets Automation",
    description: "Equipped with state-of-the-art circular and flat-bed computerized knitting frameworks to bring complex structures, jacquards, and seamless constructions to life.",
    icon: "⚙️",
    tags: ["Seamless Knitting", "High-Speed Warp", "CNC Multi-Head Embroidery"],
    accent: "#D4A0C0"
  }
];

function useReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVisible(true);
      },
      { threshold }
    );

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);

  return [ref, visible];
}

export default function Capabilities() {
  const [sectionRef, visible] = useReveal(0.15);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div 
      ref={sectionRef} 
      className="relative min-h-screen overflow-hidden bg-[#FAF9F6] px-5 py-24 md:px-16"
    >
      {/* Decorative architectural layout grids */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
        backgroundImage: "radial-gradient(#1A1410 1px, transparent 1px)",
        backgroundSize: "24px 24px"
      }} />

      {/* Decorative ambient blobs */}
      <div className="absolute -left-48 top-1/4 h-96 w-96 rounded-full bg-[#C4A265] opacity-5 blur-[120px] pointer-events-none" />
      <div className="absolute -right-48 bottom-1/4 h-96 w-96 rounded-full bg-[#80C4BC] opacity-[0.06] blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="mx-auto mb-20 max-w-3xl text-center">
        <p className={`mb-4 text-[11px] font-semibold uppercase tracking-[0.36em] text-[#C4A265] transition-all duration-700
          ${visible ? "opacity-100" : "translate-y-3 opacity-0"}`}
        >
          World-Class Infrastructure
        </p>

        <h2 className={`mb-6 font-serif text-5xl font-bold leading-none text-[#1A1410] transition-all duration-700 md:text-7xl
          ${visible ? "opacity-100" : "translate-y-5 opacity-0"}`}
        >
          Capabilities & <br />
          <span className="italic text-[#C4A265]">Innovation</span>
        </h2>

        {/* Divider */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C4A265]" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#C4A265]" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C4A265]" />
        </div>

        <p className={`mx-auto max-w-2xl font-serif text-lg italic leading-8 text-[#7A6B5A] transition-all duration-700 delay-100
          ${visible ? "opacity-100" : "translate-y-4 opacity-0"}`}
        >
          Merging centuries of tactile heritage with cutting-edge digital technology, Honeywell sets new benchmarks for speed, sustainability, and precision.
        </p>
      </div>

      {/* Stats Counter Section */}
      <div className={`mx-auto mb-24 grid max-w-5xl grid-cols-2 gap-8 md:grid-cols-4 transition-all duration-1000 delay-200
        ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        {[
          { value: "500k+", label: "Monthly Capacity" },
          { value: "100%", label: "Green Energy Powered" },
          { value: "24/7", label: "Quality Supervision" },
          { value: "Zero", label: "Landfill Waste Target" }
        ].map((stat, i) => (
          <div key={i} className="group relative rounded-xl border border-[#EDEAE4] bg-white p-6 text-center shadow-sm transition-all duration-500 hover:shadow-md">
            <div className="mb-2 font-serif text-4xl font-bold text-[#1A1410] transition-transform duration-500 group-hover:scale-105">
              {stat.value}
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9A9080]">
              {stat.label}
            </div>
          </div>
        ))}
      </div>

      {/* Capabilities Interactive Cards Grid */}
      <div className={`mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-3 transition-all duration-1000 delay-300
        ${visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`}
      >
        {CAPABILITIES.map((cap, i) => {
          const isHovered = hoveredIndex === i;
          return (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative overflow-hidden rounded-2xl border bg-white p-8 shadow-sm transition-all duration-700 ease-out
                ${isHovered ? "-translate-y-3 shadow-xl" : ""}`}
              style={{
                borderColor: isHovered ? cap.accent : "#EDEAE4"
              }}
            >
              {/* Dynamic light ambient glow */}
              <div 
                className="absolute -right-8 -top-8 h-24 w-24 rounded-full blur-3xl transition-all duration-700 pointer-events-none"
                style={{
                  background: cap.accent,
                  opacity: isHovered ? 0.15 : 0
                }}
              />

              {/* Icon / Brand mark */}
              <div 
                className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl text-2xl transition-all duration-500"
                style={{
                  background: isHovered ? cap.accent : "#F8F6F2",
                  transform: isHovered ? "rotate(10deg) scale(1.1)" : "none"
                }}
              >
                {cap.icon}
              </div>

              {/* Card Subtitle */}
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em]" style={{ color: cap.accent }}>
                {cap.subtitle}
              </p>

              {/* Card Title */}
              <h3 className="mb-4 font-serif text-2xl font-bold text-[#1A1410]">
                {cap.title}
              </h3>

              {/* Card Description */}
              <p className="mb-8 font-sans text-sm leading-relaxed text-[#7A6B5A]">
                {cap.description}
              </p>

              {/* Tags panel */}
              <div className="flex flex-wrap gap-2">
                {cap.tags.map((tag, tagIndex) => (
                  <span 
                    key={tagIndex} 
                    className="rounded-full bg-[#F4F1EA] px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.12em] text-[#7A6B5A] transition-colors duration-300"
                    style={{
                      borderColor: isHovered ? `${cap.accent}33` : "transparent",
                      borderWidth: "1px"
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Exquisite interactive bottom line */}
              <div 
                className="absolute bottom-0 left-0 h-1 transition-all duration-700" 
                style={{
                  background: cap.accent,
                  width: isHovered ? "100%" : "24px"
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
