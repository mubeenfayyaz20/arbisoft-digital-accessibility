"use client";
import React from "react";
import "@/app/styles/globals.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/app/styles/components/Navbar.module.scss";
import SearchInput from "../components/SearchInput";

const Navbar = () => {
  const pathname = usePathname();


  const isActive = (href: string) => pathname === href;

  return (
    <header className={styles.internalMainNav}>
      <Link href="#main-content" className={styles.skipContent}>
        Skip to main content
      </Link>
      <div className="flex items-center gap-2 justify-between">
        <div className={styles.searchWrapper}>
          <SearchInput />
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
                  href="/all-tools"
                  className={isActive("/all-tools") ? styles.active : ""}
                >
                  All Tools
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
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
