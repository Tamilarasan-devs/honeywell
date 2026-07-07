import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";

import img1 from '../../assets/product/1.png'
import img2 from '../../assets/product/2.png'
import img3 from '../../assets/product/3.png'
import img4 from '../../assets/product/4.png'
import img5 from '../../assets/product/5.png'
import img6 from '../../assets/product/6.png'
import img7 from '../../assets/product/7.png'
import img8 from '../../assets/product/8.png'
import img9 from '../../assets/product/9.png'
import img10 from '../../assets/product/10.png'
import img11 from '../../assets/product/11.png'
import img12 from '../../assets/product/12.png'
import img13 from '../../assets/product/13.png'
import img14 from '../../assets/product/14.png'
import img15 from '../../assets/product/15.png'
import img16 from '../../assets/product/16.png'
import img17 from '../../assets/product/17.png'
import img18 from '../../assets/product/18.png'
import img19 from '../../assets/product/19.png'
import img20 from '../../assets/product/20.png'
import img21 from '../../assets/product/21.png'
import img22 from '../../assets/product/22.png'
import img23 from '../../assets/product/23.png'
import img24 from '../../assets/product/24.png'
import img25 from '../../assets/product/25.png'
import img26 from '../../assets/product/26.png'
import img27 from '../../assets/product/27.png'
import img28 from '../../assets/product/28.png'
import img29 from '../../assets/product/29.png'
import img30 from '../../assets/product/30.png'
import img31 from '../../assets/product/31.png'
import img32 from '../../assets/product/32.png'
import img33 from '../../assets/product/33.png'
import img34 from '../../assets/product/34.png'
import img35 from '../../assets/product/35.png'

export default function Products() {
    const [activeTab, setActiveTab] = useState("All");

    // Strictly categorized based on your request
    const categories = {
        Kids: [
            img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, 
            img13, img14, img15, img16, img17, img18, img19, img20, img21, img22, img23,
            img1, img2, img3
        ],
        Mens: [
            img24, img25, img26, img27, img28
        ],
        Womens: [
            img29, img30, img31, img32, img33, img34, img35
        ]
    };

    const categoriesToRender = activeTab === "All" ? Object.keys(categories) : [activeTab];

    return (
        <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-white selection:text-black font-sans">
            
            {/* Structured Hero */}
            <section className="relative h-[55vh] border-b border-white/10 overflow-hidden bg-zinc-900">
                <img
                    src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d"
                    alt="Collection Banner"
                    className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-[#0A0A0A]/50" />
                <div className="relative z-10 h-full flex flex-col justify-end pb-12 px-6 md:px-12 max-w-[1600px] mx-auto">
                    <p className="text-zinc-400 uppercase tracking-[0.2em] text-xs font-semibold mb-4">
                        Seasonal Release
                    </p>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
                        The Collection
                    </h1>
                    <p className="text-zinc-400 max-w-xl text-lg">
                        Engineered for performance and designed for everyday elegance. Discover the new standard.
                    </p>
                </div>
            </section>

            {/* Sticky Professional Navigation */}
            <section className="sticky top-0 z-40 bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-white/10">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 flex items-center overflow-x-auto hide-scrollbar">
                    <div className="flex items-center gap-8 md:gap-12 min-w-max">
                        {["All", ...Object.keys(categories)].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`text-xs md:text-sm tracking-widest uppercase transition-colors relative py-6 ${
                                    activeTab === tab ? "text-white font-bold" : "text-zinc-500 hover:text-zinc-300"
                                }`}
                            >
                                {tab}
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="tab-indicator"
                                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-white"
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>
            </section>

            {/* Product Grids */}
            <section className="max-w-[1600px] mx-auto px-6 md:px-12 py-16 space-y-24">
                {categoriesToRender.map((catKey) => (
                    <div key={catKey}>
                        {/* Section Header (Only visible in 'All' view) */}
                        {activeTab === "All" && (
                            <div className="mb-10 flex items-center gap-4">
                                <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest">{catKey}</h2>
                                <div className="h-px bg-white/10 flex-1" />
                            </div>
                        )}
                        
                        {/* Masonry Layout for Full Images */}
                        <motion.div 
                            layout
                            className="columns-2 md:columns-3 lg:columns-4 gap-4 md:gap-6 space-y-4 md:space-y-6"
                        >
                            <AnimatePresence mode="popLayout">
                                {categories[catKey].map((imgSrc, index) => (
                                    <motion.div
                                        layout
                                        initial={{ opacity: 0, scale: 0.98 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        exit={{ opacity: 0, scale: 0.98 }}
                                        transition={{ duration: 0.4 }}
                                        key={`${catKey}-${index}`}
                                        className="group relative cursor-pointer flex flex-col break-inside-avoid"
                                    >
                                        {/* Image Container */}
                                        <div className="relative overflow-hidden bg-zinc-900 rounded-sm">
                                            <img
                                                src={imgSrc}
                                                alt={`${catKey} product`}
                                                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                                                loading="lazy"
                                            />
                                            
                                            {/* Subtle Dark Overlay */}
                                            <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </motion.div>
                    </div>
                ))}
            </section>
            
            {/* Professional Footer Banner */}
            <section className="border-t border-white/10 mt-12 py-24">
                <div className="max-w-[1600px] mx-auto px-6 md:px-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
                        Explore The Lookbook
                    </h2>
                    <p className="text-zinc-400 max-w-lg mx-auto mb-10">
                        View our manufacturing excellence and behind-the-scenes processes in our visual showcase.
                    </p>
                    <button className="inline-flex items-center gap-3 px-8 py-4 border border-white hover:bg-white hover:text-black transition-colors rounded-sm uppercase tracking-widest text-xs font-bold">
                        View Gallery <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </section>
        </div>
    );
}