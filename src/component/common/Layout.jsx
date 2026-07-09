import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ArrowUp } from "lucide-react";
import Navbar from "./Navbar";
import Footer from "./Footer";

function ScrollToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    return (
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 z-50 p-3.5 rounded-full bg-gradient-to-br from-[#1b5e7d] to-[#2596be] text-white shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl active:scale-95 ${
                isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-75 pointer-events-none"
            }`}
            aria-label="Scroll to top"
        >
            <ArrowUp className="w-5 h-5 stroke-[2.5px]" />
        </button>
    );
}

export default function Layout() {
    const location = useLocation();

    // Reset scroll position to top of page on route navigation
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location]);

    // Pages that want a full-screen bleed (background starting at the very top of the viewport)
    const isFullBleedPage = ["/", "/about"].includes(location.pathname);

    return (
        <>
            <Navbar />
            <main className={`min-h-screen ${isFullBleedPage ? "" : "pt-20"}`}>
                <Outlet />
            </main>
            <Footer />
            <ScrollToTopButton />
        </>
    );
}