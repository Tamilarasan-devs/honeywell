import React from "react";

export default function Certification() {
    const certifications = [
        {
            name: "OEKO-TEX®",
            fullForm: "Confidence in Textiles",
            image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Oeko_tex_-_umbrella_brand_-_11_2022.svg/250px-Oeko_tex_-_umbrella_brand_-_11_2022.svg.png?utm_source=www.wikidata.org&amp;utm_campaign=index&amp;utm_content=thumbnail",
        },
        {
            name: "GOTS",
            fullForm: "Global Organic Textile Standard",
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8jU14hBW4KodvTUXPoVGfvoBV5uA02R1wNA&s",
        },
        {
            name: "BSCI",
            fullForm: "Business Social Compliance Initiative",
            image:
                "https://cabinetnpm.com/wp-content/uploads/2024/11/bsci-certification-service-300x300.jpg",
        },
        {
            name: "WRAP",
            fullForm: "Worldwide Responsible Accredited Production",
            image:
                "https://upload.wikimedia.org/wikipedia/commons/a/a1/WRAP_Logo.png",
        },
        {
            name: "GRS",
            fullForm: "Global Recycled Standard",
            image:
                "https://cdn.scsglobalservices.com/files/GRS_Color.png?VersionId=s1HGw1N6Chq5bo7643kk2xzF2jTZ4VxN",
        },
        {
            name: "SEDEX",
            fullForm: "Supplier Ethical Data Exchange",
            image:
                "https://5.imimg.com/data5/KL/YH/MY-6578222/supplier-ethical-data-exchange-sedex.png",
        },
        {
            name: "Walmart",
            fullForm: "Walmart Approved Supplier",
            image:
                "https://itechplast.com/wp-content/uploads/2025/07/fcca-year-2025.jpg",
        },
        {
            name: "Disney",
            fullForm: "Disney FAMA Compliance",
            image: "https://www.ekolbelgelendirme.com/upload/disney-fama-belgesi.jpg",
        },
    ];

    return (
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-4xl font-bold text-[#E30016]">
                        Trusted & <span className="text-[#009EE0]">Certified</span>
                    </h2>
                    <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                        International certifications that reflect our ethical practices,
                        sustainability, and global compliance standards.
                    </p>
                </div>

                {/* 4 x 4 Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl border border-gray-200 p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                        >
                            {/* Logo */}
                            <div className="flex items-center justify-center h-32 mb-4">
                                <img
                                    src={cert.image}
                                    alt={cert.name}
                                    className="max-h-24 object-contain w-auto"
                                    loading="lazy"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-sm font-semibold text-gray-900">
                                {cert.name}
                            </h3>

                            {/* Subtitle */}
                            <p className="mt-1 text-xs text-gray-500 leading-snug">
                                {cert.fullForm}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
