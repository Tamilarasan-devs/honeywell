import { useEffect, useRef, useState } from "react";

const clients = [
  {
    name: "Bentex Group",
    category: "Fashion Conglomerate",
    since: "2018",
    logo: "BG",
    color: "#1A1A2E",
  },
  {
    name: "Chicco",
    category: "Baby & Childrenswear",
    since: "2019",
    logo: "CH",
    color: "#E8734A",
  },
  {
    name: "Mamas & Papas",
    category: "Premium Nursery Brand",
    since: "2017",
    logo: "MP",
    color: "#C4748C",
  },
  {
    name: "Orchestra",
    category: "Children's Apparel",
    since: "2020",
    logo: "OR",
    color: "#5B8DB8",
  },
  {
    name: "LC Waikiki",
    category: "Global Fashion Retail",
    since: "2016",
    logo: "LW",
    color: "#E63946",
  },
  {
    name: "Walmart",
    category: "Mass Market Retail",
    since: "2021",
    logo: "WM",
    color: "#0071CE",
  },
  {
    name: "Jomo Fashion",
    category: "Contemporary Apparel",
    since: "2022",
    logo: "JF",
    color: "#2D6A4F",
  },
  {
    name: "Boots",
    category: "Health & Beauty Retail",
    since: "2019",
    logo: "BO",
    color: "#5C4B8A",
  },
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

function ClientCard({ client, index }) {
  const [hovered, setHovered] = useState(false);
  const [ref, visible] = useReveal(0.1);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`relative overflow-hidden rounded-2xl border p-7 transition-all duration-500 ease-out
      ${
        hovered
          ? "bg-white -translate-y-2 scale-[1.02] shadow-2xl"
          : "bg-[#FAFAF8]"
      }
      ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}
      `}
      style={{
        borderColor: hovered ? `${client.color}55` : "#EDEAE4",
        transitionDelay: `${index * 70}ms`,
      }}
    >
      {/* Glow */}
      <div
        className={`absolute -top-8 -right-8 h-24 w-24 rounded-full blur-3xl transition-opacity duration-500`}
        style={{
          background: client.color,
          opacity: hovered ? 0.08 : 0,
        }}
      />

      {/* Top */}
      <div className="mb-5 flex items-start justify-between">
        {/* Logo */}
        <div
          className="flex h-14 w-14 items-center justify-center rounded-xl text-sm font-bold tracking-wider transition-all duration-300"
          style={{
            background: hovered ? client.color : `${client.color}14`,
            color: hovered ? "#fff" : client.color,
          }}
        >
          {client.logo}
        </div>

        {/* Badge */}
        <span
          className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] transition-all duration-300"
          style={{
            color: hovered ? client.color : "#B0A898",
            background: hovered ? `${client.color}12` : "#F0EDE8",
          }}
        >
          Since {client.since}
        </span>
      </div>

      {/* Name */}
      <h3 className="mb-1 font-serif text-2xl font-bold leading-tight text-[#1A1410]">
        {client.name}
      </h3>

      {/* Category */}
      <p
        className="mb-5 text-sm tracking-wide transition-colors duration-300"
        style={{
          color: hovered ? client.color : "#9A9080",
        }}
      >
        {client.category}
      </p>

      {/* Bottom line */}
      <div
        className="h-[2px] rounded-full transition-all duration-500"
        style={{
          background: client.color,
          width: hovered ? "100%" : "28px",
          opacity: hovered ? 0.7 : 0.25,
        }}
      />
    </div>
  );
}

function StatsBar({ visible }) {
  const stats = [
    { value: "8+", label: "Global Brands" },
    { value: "6+", label: "Years Average" },
    { value: "12", label: "Countries Served" },
    { value: "100%", label: "Satisfaction Rate" },
  ];

  return (
    <div
      className={`mx-auto mb-16 flex max-w-4xl flex-wrap justify-center rounded-2xl border border-[#EDEAE4] bg-white px-8 py-6 shadow-lg transition-all duration-700
      ${visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"}
      `}
    >
      {stats.map((s, i) => (
        <div
          key={i}
          className={`flex-1 px-6 py-2 text-center min-w-[140px]
          ${i < stats.length - 1 ? "border-r border-[#EDEAE4]" : ""}
          `}
        >
          <div className="mb-1 font-serif text-4xl font-bold text-[#1A1410]">
            {s.value}
          </div>

          <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-[#9A9080]">
            {s.label}
          </div>
        </div>
      ))}
    </div>
  );
}

export default function OurClients() {
  const [headerRef, headerVisible] = useReveal(0.2);

  // AUTO SCROLL
  const scrollRef = useRef(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId;
    let scrollAmount = container.scrollLeft;

    const scroll = () => {
      scrollAmount += 0.8; // Butter-smooth step size
      
      const halfWidth = container.scrollWidth / 2;
      if (scrollAmount >= halfWidth) {
        scrollAmount = 0;
      }
      
      container.scrollLeft = scrollAmount;
      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    // Pause auto-scroll on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationFrameId);
    const handleMouseLeave = () => {
      animationFrameId = requestAnimationFrame(scroll);
    };

    container.addEventListener("mouseenter", handleMouseEnter, { passive: true });
    container.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-[#FAF9F6] via-[#F4F0EA] to-[#FAF9F6] px-5 py-20 md:px-16">
      {/* Rings */}
      <div className="absolute -right-32 -top-32 h-[500px] w-[500px] rounded-full border border-[#E8E0D4] opacity-60" />
      <div className="absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full border border-[#E8E0D4] opacity-50" />

      {/* Header */}
      <div
        ref={headerRef}
        className="mx-auto mb-16 max-w-3xl text-center"
      >
        <p
          className={`mb-4 text-[11px] font-semibold uppercase tracking-[0.36em] text-[#C4A265] transition-all duration-700
          ${headerVisible ? "opacity-100" : "translate-y-3 opacity-0"}
          `}
        >
          Trusted Worldwide
        </p>

        <h2
          className={`mb-6 font-serif text-5xl font-bold leading-none text-[#1A1410] transition-all duration-700 md:text-7xl
          ${headerVisible ? "opacity-100" : "translate-y-5 opacity-0"}
          `}
        >
          Our <br />
          <span className="italic text-[#C4A265]">Clients</span>
        </h2>

        {/* Divider */}
        <div className="mb-6 flex items-center justify-center gap-3">
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#C4A265]" />
          <div className="h-1.5 w-1.5 rounded-full bg-[#C4A265]" />
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#C4A265]" />
        </div>

        <p className="mx-auto max-w-2xl font-serif text-lg italic leading-8 text-[#7A6B5A]">
          Proud to serve some of the world's most iconic fashion
          and retail brands — built on trust, quality and enduring
          partnership.
        </p>
      </div>

      {/* Stats */}
      <StatsBar visible={headerVisible} />

      {/* AUTO SCROLL SINGLE ROW */}
      <div
        ref={scrollRef}
        className="scrollbar-hide overflow-x-auto"
      >
        <div className="flex gap-5 w-max px-2">
          {[...clients, ...clients].map((client, i) => (
            <div key={i} className="w-[280px] flex-shrink-0">
              <ClientCard
                client={client}
                index={i}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 text-center">
        <p className="font-serif text-sm italic tracking-wide text-[#B0A898]">
          From the first stitch to the final fold — crafted for
          the best.
        </p>
      </div>
      <style>{`
        /* Hide scrollbar */
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}