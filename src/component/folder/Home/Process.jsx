import { useEffect, useRef, useState, useCallback } from "react";

const SECTIONS = [
    {
        id: "knitting",
        title: "KNITTING",
        subtitle: "The Art of Interlace",
        description:
            "Where raw yarn breathes into fabric. Our master knitters weave intricate structures using time-honoured techniques fused with modern precision — every stitch a heartbeat of craftsmanship.",
        tags: ["Warp & Weft Knitting", "Circular Knit Technology", "Hand-Loomed Artisan Work", "Seamless Construction"],
        image: "https://t3.ftcdn.net/jpg/08/92/78/70/360_F_892787020_3Tvr1k06Qo0iFGnXcHM79xKUBsysDooJ.jpg",
        accent: "#F0C040",
    },
    {
        id: "dyeing",
        title: "DYEING",
        subtitle: "Colour as Couture",
        description:
            "Colour is the first language of fashion. Our dyeing atelier uses eco-certified pigments to achieve hues that are luminous and lasting — from quiet naturals to deeply saturated statement tones.",
        tags: ["Reactive Dye Systems", "Natural Botanical Pigments", "Vat & Fiber-Reactive", "Colour Fastness Testing"],
        image: "https://t4.ftcdn.net/jpg/11/05/10/15/360_F_1105101557_ZBrI7Xo5DjW0lfnXPx0hlazefbGZX03v.jpg",
        accent: "#F0C040",
    },
    {
        id: "printing",
        title: "PRINTING",
        subtitle: "Patterns That Speak",
        description:
            "Every print tells a story. From digital inkjet precision to traditional screen printing, we translate design into fabric with extraordinary fidelity — capturing nuance and depth at every scale.",
        tags: ["Digital Inkjet Printing", "Screen Printing Mastery", "Discharge & Devore", "Heat Transfer Technology"],
        image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Screen_printing_demonstration_at_TEDxUTM.jpg",
        accent: "#F0C040",
    },
    {
        id: "embroidery",
        title: "EMBROIDERY",
        subtitle: "Threaded Luxury",
        description:
            "The pinnacle of textile adornment. Our studio blends centuries of needlework tradition with multi-head computerised frames — producing embellishments so refined they become signatures of distinction.",
        tags: ["Zardozi & Zari Work", "3D Puff Embroidery", "Multi-Head CNC Frames", "Sequin & Bead Attachment"],
        image: "https://app.dropinblog.com/uploaded/blogs/34237239/files/Embroidery_4.png",
        accent: "#F0C040",
    },
    {
        id: "cutting",
        title: "CUTTING",
        subtitle: "Precision in Every Edge",
        description:
            "Where fabric meets its destiny. Our cutting room operates with surgical accuracy — laser-guided patterns, zero-waste nesting, and expert hands who know every millimetre shapes the final silhouette.",
        tags: ["CAD Pattern Nesting", "Laser & Straight Knife", "Lay Planning Systems", "Zero-Waste Methodology"],
        image: "https://t3.ftcdn.net/jpg/18/67/15/62/360_F_1867156235_Sup0C92LP0OSePJjkrprhuDrmPjITKBC.jpg",
        accent: "#F0C040",
    },
    {
        id: "sewing",
        title: "SEWING",
        subtitle: "Where Form Is Born",
        description:
            "The beating heart of every garment. Our skilled machinists use lockstitch, overlock, and flatlock machinery — building each piece with rhythm, consistency and an uncompromising eye for quality.",
        tags: ["Lockstitch & Overlock", "Flatseam Bonding", "Ergonomic Workstations", "ISO Quality Standards"],
        image: "https://t4.ftcdn.net/jpg/01/74/55/35/360_F_174553552_GNVaeaah9ZSZWRFVysOD5tVvKrRu84VE.jpg",
        accent: "#F0C040",
    },
    {
        id: "packing",
        title: "PACKING",
        subtitle: "The Final Ritual",
        description:
            "First impressions last. Our packing studio treats every garment as a luxury object — steam-pressed, tissue-wrapped and boxed with intention. The unboxing is choreographed to deliver pure delight.",
        tags: ["Luxury Gift Packaging", "Barcode & RFID Tagging", "Export Compliance Ready", "Sustainable Materials"],
        image: "https://i.pinimg.com/originals/38/d8/d3/38d8d3c64128c93e35d2e85655201503.jpg",
        accent: "#F0C040",
    },
];

// Total scroll steps = hero(1) + each section(1) + exit(0.5)
const TOTAL_STEPS = SECTIONS.length + 1;

export default function App() {
    const wrapperRef = useRef(null);
    const [scroll, setScroll] = useState(0); // 0 to TOTAL_STEPS

    const onScroll = useCallback(() => {
        const el = wrapperRef.current;
        if (!el) return;
        const max = el.scrollHeight - el.clientHeight;
        if (max <= 0) return;
        setScroll((el.scrollTop / max) * TOTAL_STEPS);
    }, []);

    useEffect(() => {
        const el = wrapperRef.current;
        if (!el) return;
        el.addEventListener("scroll", onScroll, { passive: true });
        return () => el.removeEventListener("scroll", onScroll);
    }, [onScroll]);

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&family=Lato:wght@300;400;700&display=swap');
        .txw *, .txw *::before, .txw *::after { box-sizing: border-box; margin: 0; padding: 0; }
        .txw { font-family: 'Cormorant Garamond', Georgia, serif; }
        .txw ::-webkit-scrollbar { display: none; }
        @keyframes txFadeUp { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:none; } }
        @keyframes txPulse { 0%,100%{opacity:0.25;transform:scaleY(0.7)} 50%{opacity:1;transform:scaleY(1)} }
      `}</style>

            {/* Self-contained wrapper — scroll lives here, never bleeds out */}
            <div
                className="txw"
                ref={wrapperRef}
                style={{
                    width: "100%",
                    height: "100vh",
                    overflowY: "scroll",
                    overflowX: "hidden",
                    scrollbarWidth: "none",
                    position: "relative",
                    background: "#08070A",
                    isolation: "isolate",
                }}
            >
                {/* Scroll height driver */}
                <div style={{ height: `${TOTAL_STEPS * 100}vh`, pointerEvents: "none" }} />

                {/* Sticky stage — cards are drawn here */}
                <div
                    style={{
                        position: "sticky",
                        top: 0,
                        height: "100vh",
                        marginTop: `-${TOTAL_STEPS * 100}vh`,
                        overflow: "hidden",
                    }}
                >
                    <HeroCard scroll={scroll} />
                    {SECTIONS.map((s, i) => (
                        <SectionCard key={s.id} section={s} index={i} scroll={scroll} />
                    ))}
                    <DotNav scroll={scroll} wrapperRef={wrapperRef} />
                </div>
            </div>
        </>
    );
}

/* ── Hero ── */
function HeroCard({ scroll }) {
    const p = Math.min(Math.max(scroll, 0), 1);
    const scale = 1 - p * 0.07;
    const opacity = 1 - p * 0.7;

    return (
        <div
            style={{
                position: "absolute",
                inset: 0,
                background: "#08070A",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                transformOrigin: "50% 35%",
                transform: `scale(${scale})`,
                opacity,
                willChange: "transform, opacity",
                zIndex: 1,
                padding: "20px",
            }}
        >
            <div style={{ textAlign: "center", position: "relative", zIndex: 1, width: "100%", maxWidth: "700px" }}>
                <p style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "clamp(9px, 1.5vw, 11px)",
                    letterSpacing: "0.4em",
                    color: "#4da4cc",
                    textTransform: "uppercase",
                    marginBottom: "clamp(24px, 4vh, 40px)",
                    animation: "txFadeUp 1s ease 0.3s both",
                }}>
                    The Complete Textile Journey
                </p>

                <h1 style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "clamp(52px, 12vw, 140px)",
                    fontWeight: 700,
                    color: "#F5F0E8",
                    letterSpacing: "-0.02em",
                    lineHeight: 0.88,
                    marginBottom: "clamp(24px, 4vh, 44px)",
                    animation: "txFadeUp 1s ease 0.5s both",
                }}>
                    From<br />
                    <em style={{ color: "#4da4cc", fontStyle: "italic" }}>Thread</em><br />
                    to Garment
                </h1>

                <p style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "clamp(15px, 2.5vw, 20px)",
                    fontStyle: "italic",
                    color: "rgba(245,240,232,0.42)",
                    marginBottom: "clamp(40px, 7vh, 64px)",
                    animation: "txFadeUp 1s ease 0.8s both",
                }}>
                    Seven crafts. One vision. Infinite elegance.
                </p>

                <div style={{
                    display: "flex", flexDirection: "column", alignItems: "center", gap: "10px",
                    animation: "txFadeUp 1s ease 1.1s both",
                }}>
                    <span style={{
                        fontFamily: "'Lato', sans-serif",
                        fontSize: "9px", letterSpacing: "0.32em",
                        color: "rgba(196,162,101,0.45)", textTransform: "uppercase",
                    }}>Scroll</span>
                    <div style={{
                        width: "1px", height: "clamp(32px,5vh,52px)",
                        background: "linear-gradient(to bottom, #4da4cc, transparent)",
                        animation: "txPulse 2.2s ease-in-out infinite",
                    }} />
                </div>
            </div>
        </div>
    );
}

/* ── Section Card (stacking parallax) ── */
function SectionCard({ section, index, scroll }) {
    const imgRef = useRef(null);

    // Each card starts entering at scroll = index+1, fully landed at index+1.0
    const enter = scroll - (index + 1);         // -1 → 0 during entry
    const slideIn = Math.min(Math.max(enter + 1, 0), 1); // 0→1 as it enters
    const buried = Math.min(Math.max(enter, 0), SECTIONS.length); // 0+ once landed

    // translateY: 100% below → 0 when landed
    const ty = (1 - slideIn) * 100;

    // Scale shrinks as more cards stack on top
    const sc = 1 - buried * 0.022;

    // Brightness dims for buried cards
    const br = Math.max(1 - buried * 0.2, 0.4);

    // Border radius — rounded top corners while sliding in
    const br_r = slideIn < 0.98 ? 18 : 0;

    // Background parallax
    useEffect(() => {
        const img = imgRef.current;
        if (!img) return;
        const parallax = buried * -28 + (1 - slideIn) * 40;
        img.style.transform = `scale(1.18) translateY(${parallax}px)`;
    }, [slideIn, buried]);

    if (slideIn === 0 && buried === 0) return null;

    const entered = slideIn > 0.65;

    return (
        <div
            style={{
                position: "absolute",
                inset: 0,
                zIndex: 10 + index,
                transform: `translateY(${ty}%) scale(${sc})`,
                transformOrigin: "50% 0%",
                borderRadius: `${br_r}px ${br_r}px 0 0`,
                overflow: "hidden",
                filter: `brightness(${br})`,
                willChange: "transform, filter",
            }}
        >
            {/* Parallax BG */}
            <div style={{ position: "absolute", inset: "-12% 0" }}>
                <div
                    ref={imgRef}
                    style={{
                        position: "absolute", inset: 0,
                        backgroundImage: `url(${section.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transform: "scale(1.18) translateY(0px)",
                        willChange: "transform",
                    }}
                />
            </div>

            {/* Gradient overlay */}
            <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(105deg, rgba(5,3,7,0.9) 0%, rgba(5,3,7,0.6) 50%, rgba(5,3,7,0.05) 100%)",
            }} />

            {/* Text content */}
            <CardContent section={section} entered={entered} />
        </div>
    );
}

/* ── Card Content ── */
function CardContent({ section, entered }) {
    const d = (n) => `${0.05 + n * 0.1}s`;

    return (
        <div style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center",
            padding: "clamp(24px, 8vw, 100px) clamp(24px, 8vw, 100px)",
        }}>
            <div style={{ maxWidth: "min(560px, 90vw)", width: "100%" }}>

                {/* Eyebrow */}
                <p style={{
                    fontFamily: "'Lato', sans-serif",
                    fontSize: "clamp(15px, 1.4vw, 11px)",
                    letterSpacing: "0.26em",
                    textTransform: "uppercase",
                    color: section.accent,
                    marginBottom: "clamp(12px, 2vh, 20px)",
                    opacity: entered ? 1 : 0,
                    transform: entered ? "none" : "translateY(12px)",
                    transition: `opacity 0.6s ease ${d(0)}, transform 0.6s ease ${d(0)}`,
                }}>
                    {section.subtitle}
                </p>

                {/* Title */}
                <h2 style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "clamp(44px, 8vw, 100px)",
                    fontWeight: 700,
                    color: "#F5F0E8",
                    letterSpacing: "-0.015em",
                    lineHeight: 0.92,
                    marginBottom: "clamp(16px, 2.5vh, 26px)",
                    opacity: entered ? 1 : 0,
                    transform: entered ? "none" : "translateY(18px)",
                    transition: `opacity 0.65s ease ${d(1)}, transform 0.65s ease ${d(1)}`,
                }}>
                    {section.title}
                </h2>

                {/* Accent bar */}
                <div style={{
                    height: "2px",
                    background: section.accent,
                    marginBottom: "clamp(16px, 2.5vh, 26px)",
                    width: entered ? "48px" : "0px",
                    transition: `width 0.9s ease ${d(2)}`,
                }} />

                {/* Description */}
                <p style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: "clamp(22px, 2.2vw, 17px)",
                    lineHeight: 1.78,
                    color: "rgba(255, 255, 255, 1)",
                    marginBottom: "clamp(20px, 3vh, 34px)",
                    fontWeight: 400,
                    opacity: entered ? 1 : 0,
                    transform: entered ? "none" : "translateY(12px)",
                    transition: `opacity 0.65s ease ${d(3)}, transform 0.65s ease ${d(3)}`,
                }}>
                    {section.description}
                </p>

                {/* Tags */}
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "8px",
                    opacity: entered ? 1 : 0,
                    transform: entered ? "none" : "translateY(8px)",
                    transition: `opacity 0.65s ease ${d(4)}, transform 0.65s ease ${d(4)}`,
                }}>
                    {section.tags.map((tag, i) => (
                        <span key={i} style={{
                            fontFamily: "'Lato', sans-serif",
                            fontSize: "clamp(8px, 1.2vw, 10px)",
                            letterSpacing: "0.13em",
                            textTransform: "uppercase",
                            color: section.accent,
                            border: `1px solid ${section.accent}44`,
                            padding: "clamp(4px,0.8vh,7px) clamp(10px,1.5vw,14px)",
                            background: `${section.accent}0F`,
                        }}>
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            {/* Stage label */}
            <p style={{
                position: "absolute",
                bottom: "clamp(20px, 4vh, 44px)",
                right: "clamp(20px, 4vw, 48px)",
                fontFamily: "'Lato', sans-serif",
                fontSize: "clamp(8px, 1.2vw, 10px)",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                color: "rgba(245,240,232,0.18)",
                opacity: entered ? 1 : 0,
                transition: `opacity 1s ease ${d(5)}`,
            }}>
                {section.id}
            </p>
        </div>
    );
}

/* ── Dot Nav ── */
function DotNav({ scroll, wrapperRef }) {
    const goTo = (step) => {
        const el = wrapperRef.current;
        if (!el) return;
        const max = el.scrollHeight - el.clientHeight;
        el.scrollTo({ top: (step / TOTAL_STEPS) * max, behavior: "smooth" });
    };

    return (
        <div style={{
            position: "absolute",
            right: "clamp(12px, 2vw, 28px)",
            top: "50%",
            transform: "translateY(-50%)",
            zIndex: 999,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "9px",
        }}>
            {/* Hero dot */}
            {[{ label: "hero", accent: "#4da4cc" }, ...SECTIONS].map((s, i) => {
                const isActive = Math.abs(scroll - i) < 0.5;
                return (
                    <button
                        key={s.id || "hero"}
                        onClick={() => goTo(i)}
                        title={s.title || "Home"}
                        style={{
                            width: isActive ? "18px" : "5px",
                            height: "5px",
                            borderRadius: "3px",
                            background: isActive ? s.accent : "rgba(255,255,255,0.25)",
                            border: "none",
                            cursor: "pointer",
                            padding: 0,
                            transition: "all 0.3s ease",
                        }}
                    />
                );
            })}
        </div>
    );
}