"use client";
import React from "react";
import "@/app/styles/globals.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/app/styles/components/Navbar.module.scss";
import SearchInput from "../components/SearchInput";
import Image from "next/image";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { useEffect } from "react";
import NavbarList from "./NavbarList";

interface NavbarProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }: NavbarProps) => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  useEffect(() => {
    // Function to check screen width
    const handleResize = () => {
      if (window.innerWidth <= 992) {
        setIsSidebarOpen(false); // close sidebar
      } else {
        setIsSidebarOpen(true); // open sidebar on larger screens
      }
    };

    // Run once on mount
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup on unmount
    return () => window.removeEventListener("resize", handleResize);
  }, [setIsSidebarOpen]);
  return (
    <header className={styles.internalMainNav}>
      <Link
        href="#main-content"
        className={styles.skipContent}
        onClick={(e) => {
          e.preventDefault();
          const main = document.getElementById("main-content");
          main?.focus();
        }}
      >
        Skip to main content
      </Link>

      <div className={styles.logoMainWrap}>
        {/* Toggle button */}
        <button
          onClick={() => setIsSidebarOpen((prev) => !prev)}
          className={styles.menuIcon}
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
        >
          {isSidebarOpen ? (
            <MenuOpenIcon />
          ) : (
            <MenuOpenIcon style={{ transform: "rotate(180deg)" }} />
          )}
        </button>

        <Link href="/" className={styles.logoWrap}>
          <Image
            src="/accessibility-logo.svg"
            className={styles.desktopLogo}
            alt="Arbi Digital Accessibility logo"
            width={160}
            height={80}
          />
        </Link>
      </div>

      <div className="flex items-center gap-2 justify-between w-full navMainTop">
        <div className={styles.searchWrapper}>
          <SearchInput />
        </div>
        <div className={styles.mobileMenuList}>
          <NavbarList />
        </div>
        <div className={styles.navContainer}>
          <nav>
            <ul>
              <li>
                <Link
                  href="/our-goals"
                  className={isActive("/our-goals") ? styles.active : ""}
                >
                  Our Goals
                </Link>
              </li>
              <li>
                <Link href="https://arbisoft.com/about" target="_blank">
                  About Us
                </Link>
              </li>
   <li>
                <Link
                  href="/our-activity"
                  className={isActive("/our-activity") ? styles.active : ""}
                >
                     Our Activity
                </Link>
              </li>
            
              <li>
                <Link
                  href="/all-tools"
                  className={isActive("/all-tools") ? styles.active : ""}
                >
                  Useful Tools
                </Link>
              </li>
              <li>
                <Link
                  href="/our-certifications"
                  className={
                    isActive("/our-certifications") ? styles.active : ""
                  }
                >
                  Our Certifications
                </Link>
              </li>
                   <li>
                <Link
                  href="/our-blog"
                  className={
                    isActive("/our-blog") ? styles.active : ""
                  }
                >
                  Our Blogs
                </Link>
              </li>
            
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
