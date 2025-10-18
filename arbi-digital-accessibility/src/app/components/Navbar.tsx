"use client";
import React, { useRef, useEffect } from "react";
import "@/app/styles/globals.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/app/styles/components/Navbar.module.scss";
import Image from "next/image";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";

interface NavbarProps {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
  toggleButtonRef: React.RefObject<HTMLButtonElement | null>;
}

const Navbar = ({ isSidebarOpen, toggleSidebar, toggleButtonRef }: NavbarProps) => {
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  const lastNavLinkRef = useRef<HTMLAnchorElement | null>(null);

  const focusMain = () => {
    const main = document.getElementById("main-content") as HTMLElement | null;
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
    const sidebar = document.getElementById("sidebar") as HTMLElement | null;
    if (!sidebar) return;

    const focusableSelector =
      'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, [tabindex]';
    const focusables = Array.from(
      sidebar.querySelectorAll<HTMLElement>(focusableSelector)
    );

    if (isSidebarOpen) {
      sidebar.removeAttribute("aria-hidden");
      sidebar.removeAttribute("inert");
      // Some browsers support `HTMLElement.inert`
      (sidebar as HTMLElement & { inert?: boolean }).inert = false;

      focusables.forEach((el) => {
        const orig = el.getAttribute("data-orig-tabindex");
        if (orig !== null) {
          el.setAttribute("tabindex", orig);
          el.removeAttribute("data-orig-tabindex");
        } else if (el.getAttribute("tabindex") === "-1") {
          el.removeAttribute("tabindex");
        }
      });
    } else {
      sidebar.setAttribute("aria-hidden", "true");
      sidebar.setAttribute("inert", "");
      (sidebar as HTMLElement & { inert?: boolean }).inert = true;

      focusables.forEach((el) => {
        const cur = el.getAttribute("tabindex");
        if (cur !== null) el.setAttribute("data-orig-tabindex", cur);
        el.setAttribute("tabindex", "-1");
      });
    }
  }, [isSidebarOpen]);

  return (
    <header className={styles.internalMainNav}>
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

      <div className={styles.logoMainWrap}>
        <button
          ref={toggleButtonRef}
          onClick={toggleSidebar}
          className={styles.menuIcon}
          aria-label={isSidebarOpen ? "Close menu" : "Open menu"}
          aria-expanded={isSidebarOpen}
          aria-controls="sidebar"
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

      <div className="flex items-center gap-2 justify-end w-full navMainTop">
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
                  className={isActive("/our-certifications") ? styles.active : ""}
                >
                  Our Certifications
                </Link>
              </li>

              {/* ✅ LAST LINK */}
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
