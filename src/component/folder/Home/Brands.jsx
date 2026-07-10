import React from "react";

import img1 from "../../../assets/Brands/img1.jpg";
import img2 from "../../../assets/Brands/img2.jpg";
import img3 from "../../../assets/Brands/img3.jpg";
import img4 from "../../../assets/Brands/img4.jpg";
import img5 from "../../../assets/Brands/img5.jpg";
import img6 from "../../../assets/Brands/img6.jpg";
import img7 from "../../../assets/Brands/img7.jpg";
import img8 from "../../../assets/Brands/img8.jpg";
import img9 from "../../../assets/Brands/img9.jpg";
import img10 from "../../../assets/Brands/img10.jpg";
import img11 from "../../../assets/Brands/img11.jpg";
import img12 from "../../../assets/Brands/img12.jpg";
import img13 from "../../../assets/Brands/img13.jpg";
import img14 from "../../../assets/Brands/img14.jpg";
import img15 from "../../../assets/Brands/img15.jpg";
import img16 from "../../../assets/Brands/img16.jpg";
import img17 from "../../../assets/Brands/img17.jpg";
import img18 from "../../../assets/Brands/img18.jpg";
import img19 from "../../../assets/Brands/img19.jpg";
import img20 from "../../../assets/Brands/img20.jpg";
import img21 from "../../../assets/Brands/img21.jpg";
import img22 from "../../../assets/Brands/img22.jpg";
import img23 from "../../../assets/Brands/img23.jpg";
import img24 from "../../../assets/Brands/img24.jpg";
import img25 from "../../../assets/Brands/img25.jpg";
import img26 from "../../../assets/Brands/img26.jpg";
import img27 from "../../../assets/Brands/img27.jpg";
import img28 from "../../../assets/Brands/img28.jpg";
import img29 from "../../../assets/Brands/img29.jpg";
import img30 from "../../../assets/Brands/img30.jpg";
import img31 from "../../../assets/Brands/img31.jpg";
import img32 from "../../../assets/Brands/img32.jpg";
import img33 from "../../../assets/Brands/img33.jpg";
import img34 from "../../../assets/Brands/img34.jpg";
import img35 from "../../../assets/Brands/img35.jpg";
import img36 from "../../../assets/Brands/img36.jpg";

export default function Brands() {
  const brands = [
    { name: "BLOOMERRY", img: img1 },
    { name: "WOOLWORTH", img: img2 },
    { name: "ORCHESTRA", img: img3 },
    { name: "HAMLEYS", img: img4 },
    { name: "M-CARE", img: img5 },
    { name: "MYNTRA", img: img6 },
    { name: "BACCI", img: img7 },
    { name: "EMMAR", img: img8 },
    { name: "MIGROS", img: img9 },
    { name: "OVS", img: img10 },
    { name: "NASTROVJE", img: img11 },
    { name: "E PLUS M", img: img12 },
    { name: "SAHINLER", img: img13 },
    { name: "BEAUMANOIR", img: img14 },
    { name: "DISTRI CENTRE", img: img15 },
    { name: "TEDI", img: img16 },
    { name: "ROFU", img: img17 },
    { name: "BAUM TRADING", img: img18 },
    { name: "TRUE RELIGION", img: img19 },
    { name: "BASTEX", img: img20 },
    { name: "SANTEX", img: img21 },
    { name: "JOMO", img: img22 },
    { name: "ENERGIERS", img: img23 },
    { name: "COTTON N MORE", img: img24 },
    { name: "MAMAS PAPAS", img: img25 },
    { name: "COPA", img: img26 },
    { name: "MELON FASHION", img: img27 },
    { name: "ACE CONNEXXIONSCORP - DKNY", img: img28 },
    { name: "EPLUSM", img: img29 },
    { name: "ACE CONNEXXIONSCORP - TRUE RELIGION", img: img30 },
    { name: "BOOTS", img: img31 },
    { name: "AMALTAS (RASHTI BABY & RASHTI KIDS)", img: img32 },
    { name: "HIS-NYC", img: img33 },
    { name: "VAN-DOS / TEXVALL PREMIUM", img: img34 },
    { name: "SCOTIC DESIGN", img: img35 },
    { name: "LC WAIKIKI", img: img36 },
  ];

  const firstRow = brands.slice(0, 18);
  const secondRow = brands.slice(18);

  return (
  <>
    <style>{`
      .marquee {
        overflow: hidden;
        width: 100%;
        margin: 30px 0;
      }

      .track {
        display: flex;
        width: max-content;
        gap: 50px;
      }

      /* Slower speed */
      .track-left {
        animation: leftToRight 40s linear infinite;
      }

      .track-right {
        animation: rightToLeft 40s linear infinite;
      }

      .logo {
        flex-shrink: 0;
        width: 200px;
        height: 120px;
        display: flex;
        justify-content: center;
        align-items: center;
      }

      .logo img {
        width: 160px;
        height: 100px;
        object-fit: contain;
        transition: transform .3s ease;
      }

      .logo img:hover{
        transform: scale(1.08);
      }

      @keyframes leftToRight {
        from {
          transform: translateX(-50%);
        }
        to {
          transform: translateX(0%);
        }
      }

      @keyframes rightToLeft {
        from {
          transform: translateX(0%);
        }
        to {
          transform: translateX(-50%);
        }
      }
    `}</style>

    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-[#1E88E5] font-semibold uppercase tracking-[4px]">
            Our Global Partners
          </span>

          <h2 className="text-4xl font-bold text-gray-900 mt-3">
            Brands We Work With
          </h2>

          <p className="max-w-3xl mx-auto mt-5 text-gray-600 leading-8 text-lg">
            We are proud to collaborate with leading international retailers,
            fashion brands, and lifestyle companies across Europe, the Middle
            East, and Asia. Our commitment to quality, innovation, and timely
            delivery has helped us build long-term partnerships with globally
            recognized brands.
          </p>
        </div>

        {/* Row 1 */}
        <div className="marquee">
          <div className="track track-left">
            {[...firstRow, ...firstRow].map((brand, index) => (
              <div className="logo" key={index}>
                <img src={brand.img} alt={brand.name} />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 */}
        <div className="marquee">
          <div className="track track-right">
            {[...secondRow, ...secondRow].map((brand, index) => (
              <div className="logo" key={index}>
                <img src={brand.img} alt={brand.name} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  </>
);
}