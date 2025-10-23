"use client";
import React, { useRef, useEffect, useState } from "react";
import "@/app/styles/globals.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/app/styles/components/Navbar.module.scss";
import Image from "next/image";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

interface NavbarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  toggleButtonRef: React.RefObject<HTMLButtonElement | null>;
}

const Navbar = ({
  isSidebarOpen,
  toggleSidebar,
  toggleButtonRef,
}: NavbarProps) => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const lastNavLinkRef = useRef<HTMLAnchorElement | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLLIElement | null>(null);

  const focusMain = () => {
    const main = document.getElementById("main-content");
    if (!main) return;
    main.setAttribute("tabindex", "-1");
    main.focus();
    const onBlur = () => {
      main.removeAttribute("tabindex");
      main.removeEventListener("blur", onBlur);
    };
    main.addEventListener("blur", onBlur);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const sidebar = document.getElementById("sidebar");
    if (!sidebar) return;
    const focusableSelector =
      "a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex]";
    const focusables = Array.from(
      sidebar.querySelectorAll<HTMLElement>(focusableSelector)
    );

    if (isSidebarOpen) {
      sidebar.removeAttribute("aria-hidden");
      sidebar.removeAttribute("inert");
      (sidebar as HTMLElement & { inert?: boolean }).inert = false;
    } else {
      sidebar.setAttribute("aria-hidden", "true");
      sidebar.setAttribute("inert", "");
      (sidebar as HTMLElement & { inert?: boolean }).inert = true;
    }

    focusables.forEach((el) => {
      if (isSidebarOpen) el.removeAttribute("tabindex");
      else el.setAttribute("tabindex", "-1");
    });
  }, [isSidebarOpen]);

  return (
    <header className={styles.internalMainNav}>
      {/* Skip link */}
      <Link
        href="#main-content"
        className={styles.skipContent}
        onClick={(event) => {
          event.preventDefault();
          focusMain();
        }}
      >
        Skip to main content
      </Link>

      {/* Logo & Menu button */}
      <div className={styles.logoMainWrap}>
        <button
          ref={toggleButtonRef}
          onClick={toggleSidebar}
          className={styles.menuIcon}
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
          aria-expanded={isSidebarOpen}
          aria-controls="sidebar"
        >
          <MenuOpenIcon
            style={{
              transform: isSidebarOpen ? "rotate(0deg)" : "rotate(180deg)",
            }}
          />
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

      {/* Nav links */}
      <div className="flex items-center gap-2 justify-end w-full navMainTop">
        <div className={styles.navContainer}>
          <nav>
            <ul className="flex items-center gap-6">
              <li>
                <Link
                  href="/our-goals"
                  className={isActive("/our-goals") ? styles.active : ""}
                >
                  Our Goals
                </Link>
              </li>

              {/* ✅ Accessible Dropdown */}
              <li className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsDropdownOpen((prev) => !prev)}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setIsDropdownOpen(false);
                    if (e.key === "ArrowDown") {
                      e.preventDefault();
                      const firstItem = dropdownRef.current?.querySelector("a");
                      firstItem?.focus();
                    }
                  }}
                  aria-haspopup="true"
                  aria-expanded={isDropdownOpen}
                  className="flex items-center gap-1"
                >
                  About Us
                  <ExpandMoreIcon
                    className={`transition-transform duration-200 ${
                      isDropdownOpen ? "rotate-180" : "rotate-0"
                    }`}
                  />
                </button>

                {isDropdownOpen && (
                  <ul
                  className={styles.dropdownMenu}
                    role="menu"
                  >
                    <li>
                      <Link
                        href="/our-goals"
                        role="menuitem"
                        tabIndex={0}
                     
                        onKeyDown={(e) => {
                          if (e.key === "Escape") setIsDropdownOpen(false);
                        }}
                      >
                        Our Goals
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/our-team"
                        role="menuitem"
                        tabIndex={0}
                      
                        onKeyDown={(e) => {
                          if (e.key === "Escape") setIsDropdownOpen(false);
                        }}
                      >
                        Our Team
                      </Link>
                    </li>
                  </ul>
                )}
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
                  ref={lastNavLinkRef}
                  className={isActive("/our-blog") ? styles.active : ""}
                  onKeyDown={(e) => {
                    if (e.key === "Tab" && !e.shiftKey) {
                      e.preventDefault();
                      focusMain();
                    }
                  }}
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




// This is for dropdown menu before accessibility improvements
//   <button>Resources <ExpandMoreIcon /></button>
//   <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg border rounded-md py-1 z-50">
//     <li><Link href="/docs">Docs</Link></li>
//     <li><Link href="/tutorials">Tutorials</Link></li>
//   </ul>
// </li>
