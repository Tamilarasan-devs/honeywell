import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, ZoomIn, X, Compass, Cpu, Leaf, Layers } from "lucide-react";

const galleryFilters = ["All", "Machinery", "Production Line", "Design & CAD", "Couture Garments"];

const galleryItems = [
  {
    id: 1,
    title: "Japanese CNC Circular Loom",
    filter: "Machinery",
    description: "Highly automated knitting cylinders running flat-tension control systems for seamless garment weaves.",
    image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&w=1200&q=80",
    icon: <Cpu className="w-4 h-4 text-[#C4A265]" />,
    cols: "col-span-1 lg:col-span-2"
  },
  {
    id: 2,
    title: "Precision Japanese Stitching",
    filter: "Production Line",
    description: "Laser-aligned computerized stitch modules ensuring completely micro-calibrated seam stress margins.",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?auto=format&fit=crop&w=800&q=80",
    icon: <Compass className="w-4 h-4 text-[#C4A265]" />,
    cols: "col-span-1"
  },
  {
    id: 3,
    title: "3D Pattern & CAD Draping",
    filter: "Design & CAD",
    description: "Fully digital fitting simulations and virtual drape testing to maximize fabric nested yields.",
    image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80",
    icon: <Layers className="w-4 h-4 text-[#C4A265]" />,
    cols: "col-span-1"
  },
  {
    id: 4,
    title: "Zero-Waste Ecological Dyeing",
    filter: "Production Line",
    description: "Closed-loop, plant-pigment dyeing tanks using state-of-the-art bio-reclamation water loops.",
    image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?auto=format&fit=crop&w=800&q=80",
    icon: <Leaf className="w-4 h-4 text-[#C4A265]" />,
    cols: "col-span-1 lg:col-span-2"
  },
  {
    id: 5,
    title: "Premium Pique Polo Finishes",
    filter: "Couture Garments",
    description: "Perfect collar stiffness, double-lock shoulder stitching, and mother-of-pearl buttons in final QC.",
    image: "https://images.unsplash.com/photo-1614975058789-41316d0e2e9c?auto=format&fit=crop&w=800&q=80",
    icon: <Compass className="w-4 h-4 text-[#C4A265]" />,
    cols: "col-span-1"
  },
  {
    id: 6,
    title: "Automated Yarn Nesting Lab",
    filter: "Machinery",
    description: "Robotic warp arrays providing instant feedback on single yarn tensile strengths before knitting.",
    image: "https://images.unsplash.com/photo-1556905055-8f358a7a47b2?auto=format&fit=crop&w=1200&q=80",
    icon: <Cpu className="w-4 h-4 text-[#C4A265]" />,
    cols: "col-span-1"
  }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = activeFilter === "All"
    ? galleryItems
    : galleryItems.filter(item => item.filter === activeFilter);

  return (
    <div className="min-h-screen bg-[#FAF9F6] font-sans relative overflow-x-hidden">
      {/* Editorial CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=Outfit:wght@200;300;400;500;600;700&display=swap');
        .cormorant { font-family: 'Cormorant Garamond', Georgia, serif; }
        .outfit { font-family: 'Outfit', sans-serif; }
        .gold-gradient-text {
          background: linear-gradient(90deg, #9E7A3B 0%, #C4A265 50%, #9E7A3B 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

      {/* Decorative grids */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]" style={{
        backgroundImage: "radial-gradient(#1A1410 1px, transparent 1px)",
        backgroundSize: "32px 32px"
      }} />

      {/* Title section */}
      <section className="relative px-6 pt-24 pb-16 max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 border border-[#C4A265]/30 rounded-full bg-white/60 backdrop-blur-md">
            <Camera className="w-3.5 h-3.5 text-[#9E7A3B]" />
            <span className="outfit text-[10px] font-bold tracking-[0.3em] uppercase text-[#9E7A3B]">
              Visual Showcase
            </span>
          </div>

          <h1 className="cormorant text-5xl md:text-7xl font-light text-[#1A1410] tracking-tight">
            Factory Floor & <br />
            <span className="italic gold-gradient-text font-normal">Couture Art</span>
          </h1>

          <div className="w-16 h-0.5 bg-[#C4A265]/40 mx-auto my-6" />

          <p className="outfit text-sm md:text-base text-[#7A6B5A] tracking-[0.05em] leading-relaxed max-w-2xl mx-auto font-light">
            A behind-the-scenes aesthetic review of our smart industrial capabilities, sustainable dyes, CAD labs, and final tailored creations.
          </p>
        </motion.div>
      </section>

      {/* Filters */}
      <section className="px-6 pb-12 max-w-7xl mx-auto">
        <div className="flex flex-wrap items-center justify-center gap-2.5">
          {galleryFilters.map((filter) => {
            const active = activeFilter === filter;
            return (
              <motion.button
                key={filter}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveFilter(filter)}
                className={`outfit px-5 py-3 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 ${
                  active
                    ? "bg-[#9E7A3B] text-white shadow-md shadow-[#9E7A3B]/10"
                    : "bg-white text-[#4A3F35] border border-[#C4A265]/20 hover:bg-[#C4A265]/5 hover:text-[#9E7A3B]"
                }`}
              >
                {filter}
              </motion.button>
            );
          })}
        </div>
      </section>

      {/* Masonry / Grid */}
      <section className="px-6 pb-32 max-w-7xl mx-auto">
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className={`group relative overflow-hidden rounded-3xl border border-[#C4A265]/15 aspect-[4/3] bg-white cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 ${item.cols}`}
                onClick={() => setSelectedImage(item)}
              >
                {/* Photo */}
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Luxury overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/5 opacity-80 lg:opacity-0 lg:group-hover:opacity-90 transition-all duration-500" />

                {/* Filter label overlay */}
                <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#C4A265]/20">
                  <span className="outfit text-[9px] font-bold uppercase tracking-wider text-[#9E7A3B]">
                    {item.filter}
                  </span>
                </div>

                {/* Title & Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 transition-transform duration-500 flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    {item.icon}
                    <h3 className="cormorant text-2xl font-bold tracking-wide">
                      {item.title}
                    </h3>
                  </div>
                  <p className="outfit text-[11px] text-slate-300 leading-relaxed font-light max-w-md lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {item.description}
                  </p>

                  <div className="flex items-center gap-1.5 text-xs text-[#C4A265] mt-1 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500">
                    <ZoomIn className="w-3.5 h-3.5" />
                    <span className="outfit text-[9px] uppercase tracking-wider font-semibold">Zoom Image</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>

      {/* Lightbox / Zoom Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </motion.button>

            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 220 }}
              className="max-w-4xl w-full bg-[#1A1410] rounded-3xl border border-[#C4A265]/20 overflow-hidden shadow-2xl flex flex-col lg:flex-row"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Photo */}
              <div className="lg:w-2/3 max-h-[60vh] lg:max-h-[80vh] overflow-hidden bg-black flex items-center">
                <img 
                  src={selectedImage.image} 
                  alt={selectedImage.title}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Text / Info */}
              <div className="lg:w-1/3 p-8 lg:p-10 flex flex-col justify-between text-white space-y-6">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-[#C4A265]/30 rounded-full bg-white/5">
                    {selectedImage.icon}
                    <span className="outfit text-[9px] font-bold uppercase tracking-wider text-[#C4A265]">
                      {selectedImage.filter}
                    </span>
                  </div>

                  <h3 className="cormorant text-3xl font-bold tracking-wide leading-tight">
                    {selectedImage.title}
                  </h3>

                  <div className="w-10 h-0.5 bg-[#C4A265]/40" />

                  <p className="outfit text-xs text-slate-300 leading-relaxed font-light">
                    {selectedImage.description}
                  </p>
                </div>

                <div className="pt-6 border-t border-white/10">
                  <p className="outfit text-[9px] uppercase tracking-widest text-[#C4A265] font-semibold">
                    Honeywell Creation
                  </p>
                  <p className="outfit text-[9px] text-slate-500 uppercase tracking-widest mt-1">
                    Smart Textile manufacturing · Tirupur
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
