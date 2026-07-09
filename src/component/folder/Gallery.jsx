import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, Sparkles } from "lucide-react";

// Images
import img1 from '../../assets/CATALOGUE/1.png'
import img2 from '../../assets/CATALOGUE/2.png'
import img3 from '../../assets/CATALOGUE/3.png'
import img4 from '../../assets/CATALOGUE/4.png'
import img5 from '../../assets/CATALOGUE/5.png'
import img6 from '../../assets/CATALOGUE/6.png'
import img7 from '../../assets/CATALOGUE/7.png'
import img8 from '../../assets/CATALOGUE/8.png'
import img9 from '../../assets/CATALOGUE/9.png'
import img10 from '../../assets/CATALOGUE/10.png'
import img11 from '../../assets/CATALOGUE/11.png'
import img12 from '../../assets/CATALOGUE/12.png'
import img13 from '../../assets/CATALOGUE/13.png'
import img14 from '../../assets/CATALOGUE/14.png'
import img15 from '../../assets/CATALOGUE/15.png'
import img16 from '../../assets/CATALOGUE/16.png'
import img17 from '../../assets/CATALOGUE/17.png'
import img18 from '../../assets/CATALOGUE/18.png'
import img19 from '../../assets/CATALOGUE/19.png'
import img20 from '../../assets/CATALOGUE/20.png'
import img21 from '../../assets/CATALOGUE/21.png'
import img22 from '../../assets/CATALOGUE/22.png'

const catalogImages = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11,
    img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22,
    img1, img2
];

export default function Gallery() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-[#4da4cc] selection:text-black">
            {/* Header Section */}
            <section className="relative pt-32 pb-16 px-6 md:px-20 max-w-[1600px] mx-auto flex flex-col items-center text-center">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8"
                >
                    <Sparkles className="w-4 h-4 text-[#4da4cc]" />
                    <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-[#4da4cc]">
                        The Lookbook
                    </span>
                </motion.div>

                <motion.h1 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-5xl md:text-8xl font-black tracking-tighter uppercase leading-[0.9]"
                >
                    Curated <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4da4cc] to-[#E8D099]">
                        Elegance
                    </span>
                </motion.h1>

                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-8 text-zinc-400 max-w-xl text-lg font-light"
                >
                    Explore our definitive collection. Every piece is a testament to uncompromising quality and modern aesthetic.
                </motion.p>
            </section>

            {/* Gallery Grid */}
            <section className="px-6 pb-32 max-w-[1600px] mx-auto">
                <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
                    {catalogImages.map((imgSrc, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
                            onClick={() => setSelectedImage(imgSrc)}
                            className="
                                group
                                relative
                                overflow-hidden
                                rounded-3xl
                                cursor-pointer
                                break-inside-avoid
                                border border-white/5
                                bg-zinc-900/50
                            "
                        >
                            <img
                                src={imgSrc}
                                alt={`Look ${index + 1}`}
                                className="
                                    w-full
                                    h-auto
                                    object-cover
                                    transition-transform
                                    duration-1000
                                    ease-out
                                    group-hover:scale-105
                                "
                                loading="lazy"
                            />
                            
                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            {/* Hover Content */}
                            <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <p className="text-[#4da4cc] text-[10px] uppercase tracking-[3px] font-bold mb-2">
                                    Look #{String(index + 1).padStart(2, '0')}
                                </p>
                                <div className="flex items-center justify-between">
                                    <h3 className="text-xl font-medium text-white">View Details</h3>
                                    <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
                                        <ZoomIn className="w-4 h-4 text-white" />
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Fullscreen Lightbox */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-12"
                        onClick={() => setSelectedImage(null)}
                    >
                        {/* Close Button */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            className="absolute top-6 right-6 md:top-10 md:right-10 w-14 h-14 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-colors z-[60]"
                            onClick={() => setSelectedImage(null)}
                        >
                            <X className="w-6 h-6" />
                        </motion.button>

                        {/* Image Container */}
                        <motion.div
                            initial={{ scale: 0.9, y: 20, opacity: 0 }}
                            animate={{ scale: 1, y: 0, opacity: 1 }}
                            exit={{ scale: 0.9, y: 20, opacity: 0 }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="relative max-w-5xl w-full max-h-full rounded-2xl overflow-hidden shadow-2xl flex justify-center"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <img
                                src={selectedImage}
                                alt="Selected Look"
                                className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-2xl"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}