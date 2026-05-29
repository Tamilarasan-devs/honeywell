import React, { useEffect, useState } from "react";
import {
    ArrowRight,
    Play,
    ChevronDown,
    Sparkles,
} from "lucide-react";

/*
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ADD THESE FONT IMPORTS IN index.css

@import url('https://api.fontshare.com/v2/css?f[]=sentient@400,500,700&display=swap');

For Levaus Font:
Download from:
https://www.behance.net/gallery/168496391/LEVAUS-Free-Luxury-Font

Then place font file inside:
public/fonts/Levaus-Regular.woff2

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ADD THIS IN global.css

@font-face {
  font-family: 'Levaus';
  src: url('/fonts/Levaus-Regular.woff2') format('woff2');
}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
*/

export default function HeroSection() {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        const handleMouseMove = (e) => {
            const x = (window.innerWidth / 2 - e.clientX) / 35;
            const y = (window.innerHeight / 2 - e.clientY) / 35;

            setMousePosition({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);

        return () =>
            window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className="relative min-h-screen overflow-hidden bg-[#f7f4ef]">
            {/* Background Image */}
            <div
                className="absolute inset-0 scale-110 transition-transform duration-300"
                style={{
                    transform: `translate3d(${mousePosition.x}px, ${mousePosition.y}px, 0) scale(1.08)`,
                    backgroundImage: `
          linear-gradient(
            90deg,
            rgba(247,244,239,0.96) 0%,
            rgba(247,244,239,0.90) 40%,
            rgba(247,244,239,0.40) 75%,
            rgba(247,244,239,0.08) 100%
          ),
          url("https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2400&auto=format&fit=crop")
        `,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            />

            {/* Elegant Glow */}
            <div className="absolute left-[-10%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[#d4b06a]/10 blur-3xl" />

            <div className="absolute bottom-[-10%] right-[-10%] h-[500px] w-[500px] rounded-full bg-[#111827]/10 blur-3xl" />

            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.03] mix-blend-multiply">
                <div
                    className="h-full w-full"
                    style={{
                        backgroundImage:
                            "url('https://grainy-gradients.vercel.app/noise.svg')",
                    }}
                />
            </div>

            {/* Premium Border */}
            <div className="absolute left-5 top-5 right-5 bottom-5 border border-black/5 lg:left-8 lg:right-8 lg:top-8 lg:bottom-8" />

            <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 py-24 lg:px-10">
                <div className="max-w-4xl">

                    {/* Hero Heading */}
                    <div className="overflow-hidden">
                        <h1
                            className="
                text-[4rem]
                leading-[0.9]
                tracking-[-0.05em]
                text-[#111827]
                sm:text-[5.5rem]
                md:text-[6.5rem]
                lg:text-[8rem]
                xl:text-[9rem]
              "
                            style={{
                                fontFamily: "Levaus, serif",
                            }}
                        >
                            Timeless
                            <span className="block text-[#b68a3d]">
                                Textile
                            </span>
                            Luxury
                        </h1>
                    </div>

                    {/* Elegant Line */}
                    <div className="mt-10 flex items-center gap-4">
                        <div className="h-[1px] w-20 bg-[#b68a3d]" />

                        <div className="h-2 w-2 rounded-full bg-[#b68a3d]" />
                    </div>

                    {/* Paragraph */}
                    <p
                        className="
              mt-10
              max-w-2xl
              text-base
              leading-8
              text-slate-600
              sm:text-lg
              lg:text-xl
              lg:leading-10
            "
                        style={{
                            fontFamily: "'Sentient', serif",
                        }}
                    >
                        Crafting world-class fabrics through refined manufacturing,
                        sustainable innovation, and premium export standards trusted by
                        international fashion and apparel brands worldwide.
                    </p>

                    {/* Bottom Stats */}
                    <div className="mt-20 flex flex-wrap gap-10 lg:gap-16">
                        {[
                            {
                                number: "30+",
                                label: "Years Experience",
                            },
                            {
                                number: "50+",
                                label: "Countries Exported",
                            },
                            {
                                number: "1M+",
                                label: "Monthly Production",
                            },
                        ].map((item, index) => (
                            <div key={index}>
                                <h2
                                    className="
                    text-4xl
                    tracking-tight
                    text-[#111827]
                    sm:text-5xl
                  "
                                    style={{
                                        fontFamily: "Levaus, serif",
                                    }}
                                >
                                    {item.number}
                                </h2>

                                <p className="mt-2 text-[10px] uppercase tracking-[0.3em] text-slate-500">
                                    {item.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Floating Glass Card */}
            <div
                className="
          absolute
          bottom-10
          right-10
          hidden
          max-w-sm
          rounded-[32px]
          border
          border-white/40
          bg-white/50
          p-8
          shadow-[0_20px_80px_rgba(0,0,0,0.08)]
          backdrop-blur-2xl
          lg:block
        "
                style={{
                    transform: `translate3d(${-mousePosition.x * 1.5}px, ${-mousePosition.y * 1.5
                        }px, 0)`,
                }}
            >
                {/* <p className="text-[10px] uppercase tracking-[0.3em] text-slate-400">
                    Premium Manufacturing
                </p> */}

                <h3
                    className="mt-4 text-4xl leading-tight text-[#111827]"
                    style={{
                        fontFamily: "Levaus, serif",
                    }}
                >
                    Designed
                    <span className="block text-[#b68a3d]">
                        For Global
                    </span>
                    Markets
                </h3>

                <p
                    className="mt-5 leading-8 text-slate-600"
                    style={{
                        fontFamily: "'Sentient', serif",
                    }}
                >
                    Elevating textile excellence through luxury craftsmanship,
                    innovation, and sustainable export solutions.
                </p>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 lg:flex">
                <div className="flex flex-col items-center gap-3">
                    <span className="text-[10px] uppercase tracking-[0.4em] text-slate-500">
                        Scroll
                    </span>

                    <ChevronDown className="h-5 w-5 animate-bounce text-slate-500" />
                </div>
            </div>
        </section>
    );
}