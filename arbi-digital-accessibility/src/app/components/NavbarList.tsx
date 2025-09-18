"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "@/app/styles/components/Navbar.module.scss";
import { usePathname } from "next/navigation";
const NavbarList: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  // Close when clicking outside (mobile-friendly)
  useEffect(() => {
    const onDocClick = (e: MouseEvent) => {
      if (!containerRef.current) return;
      if (!containerRef.current.contains(e.target as Node)) setIsOpen(false);
    };
    document.addEventListener("mousedown", onDocClick);
    return () => document.removeEventListener("mousedown", onDocClick);
  }, []);

  // When opened, focus the first menu item (good for keyboard navigation)
  useEffect(() => {
    if (isOpen) {
      const first = menuRef.current?.querySelector<HTMLAnchorElement>("a");
      first?.focus();
    }
  }, [isOpen]);

  // Arrow Up/Down + Enter/Space behavior
  const handleKeyDown = (e: React.KeyboardEvent) => {
    const items = menuRef.current?.querySelectorAll<HTMLAnchorElement>("a");
    if (!items || items.length === 0) return;

    const active = document.activeElement as HTMLAnchorElement;
    let idx = Array.prototype.indexOf.call(items, active);
    if (idx === -1) idx = 0;

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = items[(idx + 1) % items.length];
      next.focus();
    }

    if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev = items[(idx - 1 + items.length) % items.length];
      prev.focus();
    }

    // Activate with Enter or Space (useful if keyboard is used)
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      items[idx]?.click();
    }
  };

  return (
    <div
      ref={containerRef}
      className="relative inline-block w-full sm:w-auto text-left"
    >
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((s) => !s)}
        className={styles.menuListIcon}
      >
        <MoreVertIcon />
        <span className="sr-only">Toggle menu</span>
      </button>

      {/* Absolute positioned menu with z-index */}
      {isOpen && (
        <ul
          ref={menuRef}
          role="menu"
          onKeyDown={handleKeyDown}
          className="absolute right-0 mt-2  bg-white border border-gray-200 rounded-md shadow-lg z-50 navbarListData"
        >
          <li className={isActive("/our-goals") ? styles.active : ""}>
            <Link href="/our-goals">Our Goals</Link>
          </li>
          <li>
            <Link href="https://arbisoft.com/about" target="_blank">
              About Us
            </Link>
          </li>
          <li className={isActive("/all-tools") ? styles.active : ""}>
            <Link href="/all-tools">All Tools</Link>
          </li>
          <li className={isActive("/our-certifications") ? styles.active : ""}>
            <Link href="/our-certifications">Our Certifications</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavbarList;
