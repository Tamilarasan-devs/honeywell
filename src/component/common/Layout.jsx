import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout() {
    const location = useLocation();
    // Pages that want a full-screen bleed (background starting at the very top of the viewport)
    const isFullBleedPage = ["/", "/about"].includes(location.pathname);

    return (
        <>
            <Navbar />
            <main className={`min-h-screen ${isFullBleedPage ? "" : "pt-20"}`}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
}