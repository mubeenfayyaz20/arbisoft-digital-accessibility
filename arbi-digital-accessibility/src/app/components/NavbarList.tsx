"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import styles from "@/app/styles/components/Navbar.module.scss";
const NavbarList: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const menuRef = useRef<HTMLUListElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

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
          className="absolute right-0 mt-2  bg-white border border-gray-200 rounded-md shadow-lg z-50 "
        >
          <li role="none">
            <Link
              href="/our-certifications"
              role="menuitem"
              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100"
            >
              Overview
            </Link>
          </li>
          <li role="none">
            <Link
              href="/our-certifications/wcag"
              role="menuitem"
              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100"
            >
              WCAG
            </Link>
          </li>
          <li role="none">
            <Link
              href="/our-certifications/section508"
              role="menuitem"
              className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100"
            >
              Section 508
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default NavbarList;
