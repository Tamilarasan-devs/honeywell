import { useEffect, useRef, useState } from "react";

const CAPABILITIES = [
  {
    title: "Eco-Certified Production",
    subtitle: "SUSTAINABILITY",
    description:
      "Operating with absolute respect for nature using organic pigments, responsible sourcing, and advanced water recycling systems.",
    icon: "✦",
    accent: "#2596be",
    image: "https://imgs.search.brave.com/GrD6cwM1B18zah029_y_7U1Cg7ubxduNaA6EP2OymgY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zM3Iu/Y2Evd3AtY29udGVu/dC91cGxvYWRzLzIw/MjQvMTIvMjQtMTAw/MHg3NTAud2VicA",
  },
  {
    title: "Advanced CAD & Digital Fit",
    subtitle: "PRECISION",
    description:
      "Digital pattern engineering and 3D draping technologies deliver flawless fitting and faster product development cycles.",
    icon: "◈",
    accent: "#9CB9B3",
    image: "https://static.fibre2fashion.com//articleresources/images/102/10161/3bc621_Big.jpg",
  },
  {
    title: "Smart CNC Knitting & Weaving",
    subtitle: "INNOVATION",
    description:
      "Computerized knitting and weaving technologies create complex textures, seamless garments, and refined craftsmanship.",
    icon: "◉",
    accent: "#D9B4C5",
    image: "https://www.stylecnc.com/uploads/220127/1-22012G53RAD.jpg",
  },
];

function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.05 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

export default function Capabilities() {
  const [sectionRef, visible] = useReveal();

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#FBF9F4] py-32"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(#1A1410 1px, transparent 1px), linear-gradient(90deg,#1A1410 1px,transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-[#2596be]/10 blur-[140px]" />
      <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-[#D9B4C5]/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div
          className={`mb-16 md:mb-32 text-center transition-all duration-1000 ${visible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
            }`}
        >
          <p className="mb-5 text-xs uppercase tracking-[0.5em] text-[#2596be]">
            Textile Excellence
          </p>

          <h2 className="font-serif text-4xl sm:text-5xl md:text-8xl font-bold text-[#1A1410] leading-tight">
            Crafted For
            <br />
            Modern Fashion
          </h2>

          <div className="mx-auto my-8 h-px w-32 bg-gradient-to-r from-transparent via-[#2596be] to-transparent" />

          <p className="mx-auto max-w-3xl text-base md:text-lg leading-8 text-[#6B6256] px-4 md:px-0">
            Combining sustainable craftsmanship, precision engineering and
            textile innovation to create world-class apparel solutions.
          </p>
        </div>

        {/* Editorial Layout */}

        <div className="space-y-28">
          {CAPABILITIES.map((item, index) => (
            <div
              key={index}
              className={`
                grid items-center gap-16
                md:grid-cols-2
                ${index % 2 !== 0
                  ? "md:[&>*:first-child]:order-2"
                  : ""
                }
              `}
            >
              {/* Visual Block */}

              <div className="relative">
                <div
                  className="relative overflow-hidden rounded-[40px] h-[500px] shadow-sm"
                  style={{
                    background: `linear-gradient(135deg, ${item.accent}15, #ffffff)`,
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    style={{ filter: "brightness(0.95) contrast(1.02) sepia(0.05)" }}
                  />

                  {/* Subtle color wash overlay */}
                  {/* <div
                    className="absolute inset-0 mix-blend-multiply opacity-[0.25]"
                    style={{
                      background: `linear-gradient(135deg, ${item.accent}, transparent)`,
                    }}
                  /> */}

                  {/* Gradient shadow for readability */}
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" /> */}

                  {/* Fashion Pattern Overlays */}
                  {/* <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div
                      className="text-[240px] font-black opacity-[0.15] select-none text-white"
                    >
                      0{index + 1}
                    </div>
                  </div> */}
{/* 
                  <div
                    className="absolute top-10 right-10 h-32 w-32 rounded-full pointer-events-none"
                    style={{
                      background: item.accent,
                      opacity: 0.18,
                    }}
                  /> */}

                  {/* <div
                    className="absolute bottom-10 left-10 h-40 w-40 rounded-full pointer-events-none"
                    style={{
                      border: `2px solid ${item.accent}`,
                      opacity: 0.35,
                    }}
                  /> */}
{/* 
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    <div
                      className="h-52 w-52 rounded-full backdrop-blur-[2px]"
                      style={{
                        border: "1px solid rgba(255,255,255,0.45)",
                        background: "rgba(255,255,255,0.1)",
                      }}
                    />
                  </div> */}
                </div>
              </div>

              {/* Content Block */}

              <div>
                <p
                  className="mb-4 text-xs uppercase tracking-[0.45em]"
                  style={{ color: item.accent }}
                >
                  {item.subtitle}
                </p>

                <div
                  className="mb-5 text-5xl"
                  style={{ color: item.accent }}
                >
                  {item.icon}
                </div>

                <h3 className="font-serif text-5xl font-bold text-[#1A1410] leading-tight">
                  {item.title}
                </h3>

                <div
                  className="my-8 h-px w-20"
                  style={{ background: item.accent }}
                />

                <p className="max-w-xl text-lg leading-9 text-[#6B6256]">
                  {item.description}
                </p>

                {/* <button
                  className="mt-10 group flex items-center gap-4"
                  style={{ color: item.accent }}
                >
                  <span className="text-sm uppercase tracking-[0.3em]">
                    Explore More
                  </span>

                  <div
                    className="flex h-12 w-12 items-center justify-center rounded-full border transition-all duration-500 group-hover:translate-x-2"
                    style={{
                      borderColor: item.accent,
                    }}
                  >
                    →
                  </div>
                </button> */}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Luxury Statement */}

        <div className="mt-40 text-center">
          <h3 className="font-serif text-5xl md:text-7xl text-[#1A1410]">
            Fashion Begins
            <br />
            With Fabric.
          </h3>

          <p className="mx-auto mt-8 max-w-2xl text-lg text-[#6B6256] leading-8">
            Every thread tells a story of craftsmanship, innovation and
            sustainability.
          </p>
        </div>
      </div>
    </section>
  );
}
