"use client";

import Head from "next/head";
import { Inter } from "next/font/google";
import "@/app/styles/globals.scss";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";


import React, { useEffect, useRef, useCallback, useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter-slab",
  display: "swap",
    weight: ["400", "500", "600", "700"], // optional: choose your needed weights
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // ✅ 1. Default CLOSED
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [openedByUser, setOpenedByUser] = useState(false);

  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);
  const sidebarRef = useRef<HTMLElement | null>(null);
  const mainContentRef = useRef<HTMLElement | null>(null);

  // ✅ 2. Toggle function
  const toggleSidebar = useCallback(() => {
    setOpenedByUser(true);
    setIsSidebarOpen((prev) => !prev);
  }, []);

  const getFocusableElements = useCallback((container: HTMLElement | null) => {
    if (!container) return [] as HTMLElement[];
    const selector =
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
    const els = Array.from(container.querySelectorAll<HTMLElement>(selector));
    return els.filter((el) => {
      try {
        return (
          el.offsetWidth > 0 ||
          el.offsetHeight > 0 ||
          el.getClientRects().length > 0
        );
      } catch {
        return false;
      }
    });
  }, []);

  // ✅ 3. DO NOT auto-open on desktop anymore
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        setIsSidebarOpen(false); // mobile = closed
      } else {
        setIsSidebarOpen(false); // desktop = STILL closed ✅
      }
    };

    handleResize(); // run on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // ✅ 4. Focus trap and focus restore logic
  useEffect(() => {
    const sidebarEl = sidebarRef.current;

    if (!isSidebarOpen) {
      mainContentRef.current?.setAttribute("aria-hidden", "false");
      toggleButtonRef.current?.focus?.();
      return;
    }

    if (!openedByUser) {
      mainContentRef.current?.setAttribute("aria-hidden", "true");
      return;
    }

    mainContentRef.current?.setAttribute("aria-hidden", "true");

    const raf = requestAnimationFrame(() => {
      const focusableEls = getFocusableElements(sidebarEl!);
      if (focusableEls.length > 0) {
        focusableEls[0].focus();
      } else {
        sidebarEl?.setAttribute("tabindex", "-1");
        sidebarEl?.focus();
      }
    });

    setOpenedByUser(false);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setIsSidebarOpen(false);
        return;
      }

      if (e.key === "Tab") {
        const els = getFocusableElements(sidebarEl!);
        if (els.length === 0) {
          e.preventDefault();
          sidebarEl?.focus();
          return;
        }
        const firstEl = els[0];
        const lastEl = els[els.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        } else if (!e.shiftKey && document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown, true);

    return () => {
      cancelAnimationFrame(raf);
      document.removeEventListener("keydown", handleKeyDown, true);
      if (sidebarEl?.hasAttribute("tabindex")) {
        sidebarEl.removeAttribute("tabindex");
      }
    };
  }, [isSidebarOpen, openedByUser, getFocusableElements]);

  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="../../public/favicon.ico" />
      </Head>
      <body className={`${inter.variable}`}>
        <div className="bodyWrapper">
          <Navbar
            isSidebarOpen={isSidebarOpen}
            toggleSidebar={toggleSidebar}
            toggleButtonRef={toggleButtonRef}
          />

          <div className="mainWrapper d-flex">
            <Sidebar
              isOpen={isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
              sidebarRef={sidebarRef}
            />

            <main
              className={`mainContent ${!isSidebarOpen ? "fullWidth" : ""}`}
              id="main-content"
              tabIndex={-1}
              ref={mainContentRef as React.RefObject<HTMLElement>}
            >
          
              {children}
            </main>
          </div>

          <Footer
            className={`mainContent ${!isSidebarOpen ? "fullWidth" : ""}`}
          />
        </div>
      </body>
    </html>
  );
}
