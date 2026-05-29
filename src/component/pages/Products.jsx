
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Sparkles,
  Leaf,
  Mail,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const categories = ["ALL", "KIDS", "MENS", "WOMENS"];

const productsList = [
  // KIDS
  {
    id: 1,
    name: "Artisanal Rompers & Bodysuits",
    category: "KIDS",
    subcategory: "Rompers, Bodysuits / Onesies",
    description:
      "Incredibly soft, breathable knitwear featuring nickel-free snap fastenings and sensory-friendly flat-lock sewing.",
    image:
      "https://images.unsplash.com/photo-1519238263530-99bdd11df2ea?q=80&w=1200&auto=format&fit=crop",
    tags: ["Rompers", "Bodysuits", "Onesies"],
    specs: [
      "100% Combed Cotton",
      "GOTS Organic Certified",
      "Anti-Allergenic Snaps",
    ],
  },
  {
    id: 2,
    name: "Cozy Sleepsuits & Babygrows",
    category: "KIDS",
    subcategory: "Sleepsuits, Babygrows",
    description:
      "Engineered with expandable necklines and flexible rib-knit cuffs for all-night comfort.",
    image:
      "https://images.unsplash.com/photo-1514090458221-65bb69cf63e6?q=80&w=1200&auto=format&fit=crop",
    tags: ["Sleepsuits", "Babygrows", "Lounge"],
    specs: [
      "Interlock Fabric",
      "Expandable Shoulders",
      "Thermal Comfort",
    ],
  },
  {
    id: 3,
    name: "Premium Pyjama Sets & Playsuits",
    category: "KIDS",
    subcategory: "Pyjama Sets, Tops & Bottom Sets",
    description:
      "Cozy matching sets crafted from light, stretchable materials.",
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?q=80&w=1200&auto=format&fit=crop",
    tags: ["Pyjamas", "Matching Sets", "Playwear"],
    specs: ["2-Piece Set", "Tagless Necklines", "High Elasticity"],
  },
  {
    id: 4,
    name: "Kids Comfort Wear & Accessories",
    category: "KIDS",
    subcategory:
      "Leggings, Shorts, Dresses, Caps & Accessories",
    description:
      "Durable stretch leggings, soft dresses, casual shorts, and everyday accessories.",
    image:
      "https://images.unsplash.com/photo-1518831959646-742c3a14ebf7?q=80&w=1200&auto=format&fit=crop",
    tags: ["Leggings", "Dresses", "Shorts", "Caps"],
    specs: [
      "Non-toxic Dyes",
      "Reinforced Seams",
      "Soft Rib Elastic",
    ],
  },

  // MENS
  {
    id: 5,
    name: "Engineered Crew & V-Neck Tees",
    category: "MENS",
    subcategory: "T-Shirts",
    description:
      "Premium combed cotton shirts with tailored structure and superior softness.",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1200&auto=format&fit=crop",
    tags: ["T-Shirts", "Crewneck", "V-Neck"],
    specs: [
      "180 - 200 GSM",
      "100% Combed Cotton",
      "Pre-shrunk Weave",
    ],
  },
  {
    id: 6,
    name: "Luxury Pique Polo Shirts",
    category: "MENS",
    subcategory: "Polo T-Shirts",
    description:
      "Premium polo shirts engineered with shape-retaining collars and elegant structure.",
    image:
      "https://images.unsplash.com/photo-1589310243389-96a5483213a8?q=80&w=1200&auto=format&fit=crop",
    tags: ["Polos", "Pique Knit", "Sports Casual"],
    specs: [
      "220 GSM",
      "Engineered Collars",
      "Reinforced Plackets",
    ],
  },
  {
    id: 7,
    name: "Smart Lounge Pants & Pyjamas",
    category: "MENS",
    subcategory:
      "Pyjamas & Lounge Pants, Nightwear Sets",
    description:
      "Relaxed trousers and matching sleepwear sets designed for maximum comfort.",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1200&auto=format&fit=crop",
    tags: ["Pyjamas", "Lounge Pants", "Nightwear"],
    specs: [
      "French Terry Knit",
      "Adjustable Drawcords",
      "Anti-pilling Finish",
    ],
  },
  {
    id: 8,
    name: "High-Stretch Trousers & Joggers",
    category: "MENS",
    subcategory:
      "Trousers, Track Pants & Joggers, Shorts",
    description:
      "Comfortable joggers and trousers with ergonomic tailoring and utility pockets.",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop",
    tags: ["Joggers", "Track Pants", "Trousers", "Shorts"],
    specs: [
      "Lycra Cotton Blend",
      "Ergonomic Pockets",
      "Flex Waistband",
    ],
  },

  // WOMENS
  {
    id: 9,
    name: "Premium Knit Tops & Tees",
    category: "WOMENS",
    subcategory: "Tops & T-Shirts",
    description:
      "Elegant rib tops and premium modal tees crafted for breathable comfort.",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=1200&auto=format&fit=crop",
    tags: ["Tops", "T-Shirts", "Fine-Jersey"],
    specs: [
      "Modal Cotton Blend",
      "Silky Touch",
      "High Shape Retention",
    ],
  },
  {
    id: 10,
    name: "Ethereal Lounge & Nightwear",
    category: "WOMENS",
    subcategory:
      "Pyjamas & Lounge Sets, Nightwear",
    description:
      "Luxury lounge and nightwear crafted from lightweight silky fabrics.",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?q=80&w=1200&auto=format&fit=crop",
    tags: ["Lounge Sets", "Nightwear", "Pyjamas"],
    specs: [
      "Silky Rayon Weave",
      "Contrast Satin Piping",
      "Relaxed Fit",
    ],
  },
  {
    id: 11,
    name: "Casual Dresses & Comfort Trousers",
    category: "WOMENS",
    subcategory:
      "Dresses (casual & daywear), Trousers & Comfort Pants",
    description:
      "Flowy dresses and ultra-comfort trousers for elevated casualwear.",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?q=80&w=1200&auto=format&fit=crop",
    tags: ["Dresses", "Comfort Pants", "Trousers"],
    specs: [
      "Linen Blend",
      "Natural Breathability",
      "Side Slash Pockets",
    ],
  },
  {
    id: 12,
    name: "Bespoke Tunics & Coordinates",
    category: "WOMENS",
    subcategory: "Tunics, Co-ord Sets",
    description:
      "Contemporary tunics and coordinated ensembles designed with premium silhouettes.",
    image:
      "https://images.unsplash.com/photo-1495385794356-15371f348c31?q=80&w=1200&auto=format&fit=crop",
    tags: ["Tunics", "Co-ords", "Matched Sets"],
    specs: [
      "Eco-Vero Viscose",
      "Architectural Cut",
      "Flawless Silhouette",
    ],
  },
];

export default function Products() {
  const [activeCategory, setActiveCategory] =
    useState("ALL");

  const navigate = useNavigate();

  const filteredProducts =
    activeCategory === "ALL"
      ? productsList
      : productsList.filter(
          (p) => p.category === activeCategory
        );

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans relative overflow-x-hidden">

      {/* Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600;700&family=Outfit:wght@200;300;400;500;600;700&display=swap');

        .cormorant {
          font-family: 'Cormorant Garamond', serif;
        }

        .outfit {
          font-family: 'Outfit', sans-serif;
        }

        .gold-gradient-text {
          background: linear-gradient(
            90deg,
            #9E7A3B 0%,
            #C4A265 50%,
            #9E7A3B 100%
          );

          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      {/* Hero */}
      <section className="relative px-6 pt-24 pb-16 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-5"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#C4A265]/30 rounded-full bg-white/60 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#9E7A3B]" />

            <span className="outfit text-[10px] font-bold tracking-[0.3em] uppercase text-[#9E7A3B]">
              Honeywell Creation Portfolio
            </span>
          </div>

          <h1 className="cormorant text-5xl md:text-7xl font-light text-[#1A1410] leading-tight">
            Premium Apparel <br />

            <span className="italic gold-gradient-text">
              Export Inventory
            </span>
          </h1>

          <div className="w-20 h-[1px] bg-[#C4A265]/40 mx-auto"></div>

          <p className="outfit text-sm md:text-base text-[#7A6B5A] max-w-3xl mx-auto leading-relaxed">
            Explore our premium collections across kids,
            mens, and womens apparel crafted for global
            fashion brands.
          </p>
        </motion.div>
      </section>

      {/* Categories */}
      <section className="px-6 pb-14 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => {
            const active = activeCategory === cat;

            return (
              <motion.button
                key={cat}
                whileTap={{ scale: 0.96 }}
                whileHover={{ y: -1 }}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 outfit ${
                  active
                    ? "bg-[#9E7A3B] text-white"
                    : "bg-white border border-[#C4A265]/20 text-[#4A3F35] hover:bg-[#C4A265]/10"
                }`}
              >
                {cat}
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* Products Grid */}
      <section className="px-6 pb-28 max-w-7xl mx-auto">
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((p) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group bg-white rounded-3xl overflow-hidden border border-[#C4A265]/15 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 [filter:saturate(1.05)_contrast(1.02)]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full">
                    <span className="outfit text-[9px] font-bold uppercase tracking-wider text-[#9E7A3B]">
                      {p.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-7 space-y-4">
                  <span className="outfit text-[10px] tracking-[0.25em] uppercase text-[#9A9080]">
                    {p.subcategory}
                  </span>

                  <h3 className="cormorant text-3xl font-semibold text-[#1A1410]">
                    {p.name}
                  </h3>

                  <p className="outfit text-sm text-[#7A6B5A] leading-relaxed">
                    {p.description}
                  </p>

                  {/* Specs */}
                  <div className="space-y-2 pt-2">
                    {p.specs.map((spec, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-[#C4A265]" />

                        <span className="outfit text-xs text-[#4A3F35]">
                          {spec}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-3">
                    {p.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-[9px] uppercase tracking-widest px-3 py-1 rounded-full bg-[#C4A265]/10 text-[#9E7A3B] outfit"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <motion.button
                    whileTap={{ scale: 0.97 }}
                    onClick={() => navigate("/contact")}
                    className="w-full mt-5 flex items-center justify-center gap-2 py-3 rounded-2xl border border-[#C4A265] text-[#9E7A3B] hover:bg-[#9E7A3B] hover:text-white transition-all duration-300 text-sm font-semibold tracking-wider"
                  >
                    <span>Send Export Inquiry</span>

                    <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Footer CTA */}
      <section className="px-6 pb-24">
        <div className="max-w-5xl mx-auto rounded-3xl overflow-hidden bg-gradient-to-br from-[#1A1410] to-[#2D231C] text-white p-10 md:p-16 relative">

          <div className="relative z-10 text-center space-y-6">
            <Leaf className="w-8 h-8 text-[#C4A265] mx-auto" />

            <h2 className="cormorant text-4xl md:text-6xl font-light leading-tight">
              Ready to Partner <br />

              <span className="italic text-[#C4A265]">
                with India's Leading Creator?
              </span>
            </h2>

            <p className="outfit text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
              From organic kidswear to luxury loungewear,
              we manufacture world-class garments for
              international brands with speed,
              sustainability, and precision craftsmanship.
            </p>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate("/contact")}
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#9E7A3B] to-[#C4A265] text-white text-xs uppercase tracking-[0.25em] font-semibold"
            >
              <Mail className="w-4 h-4" />

              <span>Initiate Export Inquiry</span>
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}
