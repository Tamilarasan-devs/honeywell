import { motion } from "framer-motion";
import { MapPin, Phone, Mail, ArrowRight, Send, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import React from "react";
const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Contact", href: "/contact" },
];

const exportMarkets = [
  "United States", "United Kingdom", "Germany", "France",
  "UAE", "Japan", "Australia", "Singapore",
];

const certifications = [
  "GOTS Certified", "OEKO-TEX", "ISO 9001:2015",
  "BSCI Compliant", "WRAP Certified", "SEDEX",
];

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="relative bg-[#FAF8F5] overflow-hidden border-t border-[#C9A66B]/20">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#A88028]/30 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(168,128,40,0.03)_0%,_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#A88028] to-[#C9A66B] flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div>
                <span className="font-display font-bold text-xl text-[#1A1410]">Honeywell</span>
                <span className="font-display font-light text-xl text-[#A88028]"> Creation</span>
              </div>
            </div>
            <p className="text-[#6B6256] text-sm leading-relaxed mb-6 max-w-sm">
              Engineering premium textile excellence for global markets.
              Trusted manufacturer and exporter since 2007.
            </p>
            <div className="space-y-2.5">
              {[
                { icon: MapPin, text: "Tirupur, Tamil Nadu, India" },
                { icon: Phone, text: "+91 98765 43210" },
                { icon: Mail, text: "info@honeywellcreation.com" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2.5 text-sm text-[#6B6256] hover:text-[#A88028] transition-colors">
                  <item.icon className="w-4 h-4 text-[#A88028]" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-[#1A1410] font-bold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => navigate(link.href)}
                    className="text-[#6B6256] text-sm hover:text-[#A88028] transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-[#A88028]" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#1A1410] font-bold text-sm mb-4 uppercase tracking-wider">Export Markets</h4>
            <ul className="space-y-2">
              {exportMarkets.map((market) => (
                <li key={market} className="text-[#6B6256] text-sm hover:text-[#A88028] transition-colors cursor-default">
                  {market}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[#1A1410] font-bold text-sm mb-4 uppercase tracking-wider">Certifications</h4>
            <ul className="space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-[#6B6256] text-sm hover:text-[#A88028] transition-colors cursor-default">
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#C9A66B]/15 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[#8A7D6E] text-sm">
              &copy; {new Date().getFullYear()} Honeywell Creation. All rights reserved.
            </p>
            <div className="flex gap-4">
              {["LinkedIn", "Twitter", "Facebook", "Instagram"].map((social) => (
                <span
                  key={social}
                  className="px-3 py-1.5 text-xs text-[#8A7D6E] border border-[#C9A66B]/20 rounded-full hover:border-[#A88028]/60 hover:text-[#A88028] transition-all cursor-pointer"
                >
                  {social}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
