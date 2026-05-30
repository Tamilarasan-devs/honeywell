import React, { useState } from "react";
import { FaAward } from "react-icons/fa";

const certs = [
    { name: "OEKO-TEX", year: "Since 2010", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Oeko_tex_-_umbrella_brand_-_11_2022.svg/250px-Oeko_tex_-_umbrella_brand_-_11_2022.svg.png" },
    { name: "WALMART", year: "Since 2019", img: "https://www.pngplay.com/wp-content/uploads/9/Walmart-Download-Free-PNG.png" },
    { name: "GRS", year: "Since 2019", img: "https://kyodotech.com/wp-content/uploads/2024/05/tieu-chuan-tai-che-toan-cau-1.webp" },
    { name: "DISNEY", year: "Since 2008", img: "https://www.ekolbelgelendirme.com/upload/disney-fama-belgesi.jpg" },
    { name: "GOTS", year: "Since 2016", img: "https://d1xknzn7m6thdw.cloudfront.net/resources/ms-worlds-most-sustainable-suit/gots-logo_cmyk_jpg.jpg" },
    { name: "SEDEX", year: "Since 2008", img: "https://images.seeklogo.com/logo-png/46/1/sedex-logo-png_seeklogo-465691.png" },
    { name: "BSCI", year: "Since 2010", img: "https://www.foragroup.eu/wp-content/uploads/2017/05/bsci-logo-400x400.png" },
    { name: "WRAP", year: "Since 2009", img: "https://logowik.com/content/uploads/images/t_wrap-environmental-new-20242084.logowik.com.webp" },
    { name: "OCS", year: "Standard", img: "https://gscsintl.org/uploads/organic-content-standard-(ocs).webp" },
];

export default function ManagementTeam() {
    return (
        <section className="relative py-20 bg-[#FAF8F5] overflow-hidden">

            {/* soft gold glow background */}
            <div className="absolute inset-0 opacity-50 pointer-events-none">
                <div className="absolute -top-32 left-1/2 w-[600px] h-[600px] -translate-x-1/2 bg-[#C9A66B]/10 blur-[130px] rounded-full" />
            </div>

            {/* header */}
            <div className="relative max-w-6xl mx-auto px-6 mb-16 text-center md:text-left">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F5F2EB] border border-[#C9A66B]/20 shadow-sm">
                    <FaAward className="text-[#A88028] text-sm" />
                    <span className="text-[10px] tracking-[0.35em] uppercase font-medium text-[#A88028]">
                        Global Compliance & Certifications
                    </span>
                </div>

                <h2 className="mt-6 font-serif text-3xl md:text-5xl font-bold text-[#1A1410] leading-tight">
                    Trusted International Standards
                </h2>

                <div className="my-5 h-px w-24 bg-gradient-to-r from-[#A88028] to-transparent mx-auto md:mx-0" />

                <p className="text-sm md:text-base text-[#6B6256] max-w-2xl leading-relaxed">
                    Our certifications reflect a long-term commitment to ethical production,
                    rigorous quality assurance, and global compliance standards.
                </p>
            </div>

            {/* marquee */}
            <div className="relative overflow-hidden py-4">

                {/* edge fade */}
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-32 md:w-56 bg-gradient-to-r from-[#FAF8F5] to-transparent z-10" />
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-32 md:w-56 bg-gradient-to-l from-[#FAF8F5] to-transparent z-10" />

                <div className="flex items-center gap-10 w-max animate-[marquee_35s_linear_infinite] hover:[animation-play-state:paused]">

                    {[...certs, ...certs].map((cert, i) => (
                        <div
                            key={i}
                            className="group relative flex items-center gap-4 px-6 py-4 rounded-2xl
                         bg-[#F5F2EB]/50 backdrop-blur-sm border border-[#C9A66B]/15
                         shadow-sm hover:shadow-[0_12px_30px_rgba(168,128,40,0.08)] 
                         transition-all duration-500 hover:-translate-y-1 hover:border-[#A88028]/45"
                        >
                            {/* logo container */}
                            <div className="relative w-16 h-16 flex items-center justify-center rounded-xl bg-white border border-[#C9A66B]/10 shadow-sm">
                                <img
                                    src={cert.img}
                                    alt={cert.name}
                                    className="h-11 w-auto object-contain transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* text */}
                            <div className="flex flex-col leading-tight pr-4">
                                <span className="text-sm font-bold text-[#1A1410] tracking-wide">
                                    {cert.name}
                                </span>
                                <span className="text-[11px] text-[#8A7D6E] mt-1 font-medium">
                                    {cert.year}
                                </span>
                            </div>

                            {/* subtle glow on hover */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500
                              bg-gradient-to-r from-[#C9A66B]/5 to-transparent pointer-events-none" />
                        </div>
                    ))}

                </div>
            </div>

            {/* animation */}
            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
        </section>
    );
}