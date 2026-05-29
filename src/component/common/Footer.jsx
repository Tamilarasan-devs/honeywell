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
    <footer className="relative bg-navy-900 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(197,165,90,0.05)_0%,_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-8">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold-500 to-gold-700 flex items-center justify-center">
                <span className="text-white font-bold text-xl">H</span>
              </div>
              <div>
                <span className="font-display font-bold text-xl text-white">Honeywell</span>
                <span className="font-display font-light text-xl text-gold-400"> Creation</span>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6 max-w-sm">
              Engineering premium textile excellence for global markets.
              Trusted manufacturer and exporter since 2007.
            </p>
            <div className="space-y-2.5">
              {[
                { icon: MapPin, text: "Tirupur, Tamil Nadu, India" },
                { icon: Phone, text: "+91 98765 43210" },
                { icon: Mail, text: "info@honeywellcreation.com" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2.5 text-sm text-white/50 hover:text-gold-400 transition-colors">
                  <item.icon className="w-4 h-4 text-gold-400" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => navigate(link.href)}
                    className="text-white/50 text-sm hover:text-gold-400 transition-colors flex items-center gap-1 group"
                  >
                    <ChevronRight className="w-3 h-3 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Export Markets</h4>
            <ul className="space-y-2">
              {exportMarkets.map((market) => (
                <li key={market} className="text-white/50 text-sm hover:text-gold-400 transition-colors cursor-default">
                  {market}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-wider">Certifications</h4>
            <ul className="space-y-2">
              {certifications.map((cert) => (
                <li key={cert} className="text-white/50 text-sm hover:text-gold-400 transition-colors cursor-default">
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} Honeywell Creation. All rights reserved.
            </p>
            <div className="flex gap-4">
              {["LinkedIn", "Twitter", "Facebook", "Instagram"].map((social) => (
                <span
                  key={social}
                  className="px-3 py-1.5 text-xs text-white/40 border border-white/10 rounded-full hover:border-gold-500/50 hover:text-gold-400 transition-all cursor-pointer"
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
