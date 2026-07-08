import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Globe,
  ArrowRight,
} from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../../assets/logo.png";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setMobileOpen(false);
    navigate(href);
  };

  return (
    <>
      {/* HEADER */}
      <motion.header
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
            ? "bg-[#FAF9F6]/90 backdrop-blur-2xl border-b border-[#C4A265]/20 shadow-[0_8px_30px_rgba(158,122,59,0.05)]"
            : "bg-[#FAF9F6]/40 backdrop-blur-md border-b border-[#C4A265]/10"
          }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="h-20 flex items-center justify-between">
            {/* LOGO */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate("/")}
              className="flex items-center gap-3"
            >
              <div className="relative">
                <div className="w-24 h-20 flex items-center justify-center">
                  <img src={logo} alt="Logo" className="w-full h-full object-contain" />
                </div>
              </div>

              {/* <div className="hidden sm:flex flex-col leading-tight text-left">
                <span
                  className="font-display text-xl font-bold tracking-tight text-[#1A1410]"
                >
                  Honeywell
                </span>

                <span
                  className="font-display text-sm tracking-[0.25em] uppercase text-[#9E7A3B]"
                >
                  Creation
                </span>
              </div> */}
            </motion.button>

            {/* DESKTOP NAV */}
            <div className="hidden lg:flex items-center gap-3">
              {/* NAVIGATION */}
              <div
                className="flex items-center gap-1 px-2 py-2 rounded-2xl transition-all duration-300 bg-white/60 border border-[#C4A265]/15 backdrop-blur-md shadow-sm"
              >
                {navItems.map((item) => {
                  const active =
                    location.pathname === item.href;

                  return (
                    <motion.button
                      key={item.label}
                      whileHover={{ y: -1 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => handleNav(item.href)}
                      className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${active
                          ? "bg-[#C4A265]/12 text-[#9E7A3B]"
                          : "text-[#4A3F35] hover:text-[#9E7A3B] hover:bg-[#C4A265]/05"
                        }`}
                    >
                      {item.label}

                      {active && (
                        <motion.div
                          layoutId="active-navbar"
                          className="absolute inset-0 rounded-xl border border-[#C4A265]/35"
                          transition={{
                            type: "spring",
                            stiffness: 280,
                            damping: 30,
                          }}
                        />
                      )}
                    </motion.button>
                  );
                })}
              </div>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => navigate("/contact")}
                className="group relative overflow-hidden ml-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-[#9E7A3B] to-[#C4A265] text-white font-semibold shadow-xl shadow-[#9E7A3B]/20"
              >
                <span className="relative z-10 flex items-center gap-2 text-sm">
                  <Globe className="w-4 h-4" />

                  Export Inquiry

                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>

                <div className="absolute inset-0 bg-gradient-to-r from-[#9E7A3B] to-[#C4A265] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.button>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2.5 rounded-xl transition-all bg-white/60 border border-[#C4A265]/15 backdrop-blur-md text-[#1A1410]"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/50 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{
                type: "spring",
                damping: 26,
                stiffness: 240,
              }}
              className="absolute top-0 right-0 h-full w-[88%] max-w-sm bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* TOP */}
              <div className="flex items-center justify-between p-6 border-b border-[#C4A265]/10">
                <div>
                  <h2 className="font-display text-xl font-bold text-[#1A1410]">
                    Honeywell
                  </h2>

                  <p className="text-sm text-[#9E7A3B] tracking-widest uppercase">
                    Creation
                  </p>
                </div>

                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-2 rounded-xl hover:bg-[#C4A265]/05 transition-colors"
                >
                  <X className="w-5 h-5 text-[#4A3F35]" />
                </button>
              </div>

              {/* NAV ITEMS */}
              <div className="p-5 space-y-2">
                {navItems.map((item, i) => {
                  const active =
                    location.pathname === item.href;

                  return (
                    <motion.button
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => handleNav(item.href)}
                      className={`w-full flex items-center justify-between px-4 py-4 rounded-2xl text-left transition-all duration-300 ${active
                          ? "bg-[#C4A265]/08 border border-[#C4A265]/20 text-[#9E7A3B]"
                          : "text-[#4A3F35] hover:bg-[#C4A265]/05 hover:text-[#9E7A3B]"
                        }`}
                    >
                      <span className="font-medium">
                        {item.label}
                      </span>

                      <ArrowRight className="w-4 h-4 opacity-60" />
                    </motion.button>
                  );
                })}
              </div>

              {/* BOTTOM CTA */}
              <div className="absolute bottom-0 left-0 right-0 p-5 border-t border-[#C4A265]/10 bg-white">
                <motion.button
                  whileTap={{ scale: 0.97 }}
                  onClick={() => {
                    setMobileOpen(false);
                    navigate("/contact");
                  }}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-[#9E7A3B] to-[#C4A265] text-white font-semibold shadow-lg shadow-[#9E7A3B]/20"
                >
                  <span className="flex items-center justify-center gap-2">
                    <Globe className="w-4 h-4" />
                    Export Inquiry
                  </span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}