import React from "react";

export default function Products() {
    const Kids = [{ category: "Kids", subCategory: [{ name: "Rompers", img: "https://www.luvlap.com/cdn/shop/files/905248-905251FSRomperPO3_Frame_1.jpg?v=1763125121&width=533" }, { name: "Onesies", img: "https://m.media-amazon.com/images/I/817CVbs6GEL.jpg" }, { name: "Sleepsuits", img: "https://m.media-amazon.com/images/I/817CVbs6GEL.jpg" }, { name: "Babygrows", img: "https://m.media-amazon.com/images/I/817CVbs6GEL.jpg" }, { name: "Pyjama Sets", img: "https://m.media-amazon.com/images/I/817CVbs6GEL.jpg" }, { name: "Tops & Bottom Sets", img: "https://m.media-amazon.com/images/I/817CVbs6GEL.jpg" }, { name: "Sleepsuits", img: "https://m.media-amazon.com/images/I/817CVbs6GEL.jpg" }, { name: "Leggings", img: "https://m.media-amazon.com/images/I/817CVbs6GEL.jpg" }, { name: "Shorts", img: "https://m.media-amazon.com/images/I/817CVbs6GEL.jpg" }, { name: "Dresses", img: "https://m.media-amazon.com/images/I/817CVbs6GEL.jpg" }, { name: "Caps & Basic Accessories", img: "https://m.media-amazon.com/images/I/817CVbs6GEL.jpg" },] }, { catergory: "mens", subCategory: [{ name: "T-Shirts", img: "https://uspoloassn.in/cdn/shop/files/1_fc6c3130-5e03-49c3-984b-b28e90d3cdc5_500x.jpg?v=1769097059" }, { name: "Polo T-Shirts", img: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_300,h_300/global/687093/02/mod01/fnd/IND/fmt/png/Men's-Slim-Fit-Polo-T-shirt" }, { name: "Pyjamas & Lounge Pants", img: "https://brownliving.in/cdn/shop/products/mens-combo-pack-of-2-lounge-pants-blue-and-grey-gsm-170-free-size-verified-sustainable-products-on-brown-living-140408.jpg?v=1700481160&width=1200" }, { name: "Nightwear Sets", img: "https://m.media-amazon.com/images/I/41JwngGVJ1L.jpg" }, { name: "Trousers", img: "https://tigc.in/cdn/shop/files/0625-BGNLRXTR-04_8.jpg?v=1778070886" }, { name: "Track Pants & Joggers", img: "https://images-na.ssl-images-amazon.com/images/I/71b+W8e8sOL.jpg" }, { name: "Shorts", img: "https://www.montecarlo.in/cdn/shop/files/2260105406-1-38_1.jpg?v=1771847767&width=1080" },] }, { catergory: "womens", subCategory: [{ name: 'Tops & T-Shirts', img: 'https://m.media-amazon.com/images/I/51yLBBW5eQL._AC._SR180,230.jpg' }, { name: 'Pyjamas & Lounge Sets', img: 'https://m.media-amazon.com/images/I/71uxhLpSoTL.jpg' }, { name: 'Nightwear', img: 'https://blanc9.com/cdn/shop/files/Blanc9WomenBlack_WhiteCheckeredNightwearWithPinkPiping-1.jpg?v=1743764527&width=1080' }, { name: 'Trousers & Comfort Pants', img: 'https://m.media-amazon.com/images/I/610u2-1F6mL.jpg' }, { name: 'Dresses (casual & daywear)', img: 'https://www.lavanyathelabel.com/cdn/shop/articles/photo-collage.png_13_1.png?v=1741786181&width=1500' }, { name: 'Tunics', img: 'https://m.media-amazon.com/images/I/71dX6gWxQVL.jpg' }, { name: 'Co-ord Sets', img: 'https://janasya.com/cdn/shop/files/JAC26CD04415.jpg?v=1778062235&width=1080' },] }]
    const categories = Kids;

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white">
            {/* Hero Section */}
            <section className="relative h-[90vh] overflow-hidden">
                <img
                    src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b"
                    alt=""
                    className="absolute inset-0 w-full h-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/60 to-transparent" />

                <div className="relative z-10 flex flex-col justify-center h-full px-8 md:px-20">
                    <p className="uppercase tracking-[10px] text-zinc-300 mb-4">
                        New Collection
                    </p>

                    <h1 className="text-6xl md:text-8xl font-black leading-none">
                        STYLE
                        <br />
                        REDEFINED
                    </h1>

                    <p className="mt-6 text-zinc-300 max-w-xl">
                        Discover premium collections crafted for modern lifestyles.
                    </p>

                    <button className="mt-8 w-fit px-8 py-4 rounded-full bg-white text-black font-semibold hover:scale-105 transition">
                        Explore Now
                    </button>
                </div>
            </section>

            {/* Categories */}
            <div className="max-w-[1600px] mx-auto px-6 py-24 space-y-32">
                {categories.map((category, categoryIndex) => (
                    <section key={categoryIndex}>
                        {/* Heading */}
                        <div className="flex items-end justify-between mb-10">
                            <div>
                                <p className="text-zinc-500 uppercase tracking-[5px] mb-3">
                                    Collection
                                </p>

                                <h2 className="text-5xl md:text-7xl font-black uppercase">
                                    {category.category || category.catergory}
                                </h2>
                            </div>

                            <button className="hidden md:block border border-zinc-700 px-6 py-3 rounded-full hover:bg-white hover:text-black transition">
                                View All
                            </button>
                        </div>

                        {/* Modern Layout */}
                        <div className="grid md:grid-cols-12 gap-6">
                            {category.subCategory.map((item, index) => {
                                const large =
                                    index === 0 || index === 4 || index === 7;

                                return (
                                    <div
                                        key={index}
                                        className={`
                      group
                      relative
                      overflow-hidden
                      rounded-[35px]
                      cursor-pointer
                      ${large
                                                ? "md:col-span-6 h-[550px]"
                                                : "md:col-span-3 h-[270px]"
                                            }
                    `}
                                    >
                                        <img
                                            src={item.img}
                                            alt={item.name}
                                            className="
                        absolute
                        inset-0
                        w-full
                        h-full
                        object-cover
                        transition-all
                        duration-700
                        group-hover:scale-110
                      "
                                        />

                                        <div
                                            className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-black
                        via-black/20
                        to-transparent
                      "
                                        />

                                        <div className="absolute bottom-0 left-0 p-6">
                                            <span className="text-xs tracking-[4px] uppercase text-zinc-300">
                                                Trending
                                            </span>

                                            <h3 className="text-2xl font-bold mt-2">
                                                {item.name}
                                            </h3>
                                        </div>

                                        <div
                                            className="
                        absolute
                        top-5
                        right-5
                        w-12
                        h-12
                        rounded-full
                        bg-white/10
                        backdrop-blur-lg
                        flex
                        items-center
                        justify-center
                        opacity-0
                        group-hover:opacity-100
                        transition
                      "
                                        >
                                            →
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </section>
                ))}
            </div>

            {/* Bottom Banner */}
            <section className="px-6 pb-20">
                <div
                    className="
            max-w-[1600px]
            mx-auto
            rounded-[40px]
            overflow-hidden
            relative
            h-[400px]
          "
                >
                    <img
                        src="https://images.unsplash.com/photo-1483985988355-763728e1935b"
                        alt=""
                        className="absolute inset-0 w-full h-full object-cover"
                    />

                    <div className="absolute inset-0 bg-black/60" />

                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
                        <h2 className="text-5xl font-black">
                            Wear The Future
                        </h2>

                        <p className="text-zinc-300 mt-4">
                            Fashion that blends comfort, luxury and modern design.
                        </p>

                        <button className="mt-8 px-8 py-4 bg-white text-black rounded-full font-semibold">
                            Shop Collection
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
}