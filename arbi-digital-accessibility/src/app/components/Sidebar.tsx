"use client";
import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/components/Sidebar.module.scss";
import Accordion from "./Accordion";
import Button from "../components/Button";
import ListAltIcon from "@mui/icons-material/ListAlt";
import SearchInput from "./SearchInput";
import ChevronRightOutlined from "@mui/icons-material/ChevronRightOutlined";
import CloseIcon from "@mui/icons-material/Close";

const cx = (...tokens: Array<string | false | null | undefined>) =>
  tokens.filter(Boolean).join(" ");

interface SidebarProps {
  isOpen: boolean;
  onClose?: () => void;
  sidebarRef: React.RefObject<HTMLElement | null>;
}

const Sidebar = ({ isOpen, onClose, sidebarRef }: SidebarProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const pathname = usePathname() || "";

  const skipLinkRef = useRef<HTMLAnchorElement | null>(null);
  const sidebarLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  const getLinkClass = (href: string) => {
    const isActive = pathname === href || pathname.startsWith(href + "/");
    const base =
      styles?.sidebarLink ||
      "block px-3 py-2 text-gray-700 hover:text-blue-700 rounded-md focus:outline-none focus-visible:ring";
    const active =
      styles?.activeLink ||
      "font-semibold text-blue-700 bg-blue-50 border-l-4 border-blue-600";
    return cx(base, isActive && active);
  };

  // ✅ Focus handling for arrow key navigation
  const handleArrowNavigation = useCallback((e: KeyboardEvent) => {
    const focusableLinks = sidebarLinksRef.current.filter(Boolean);
    const currentIndex = focusableLinks.findIndex(
      (el) => el === document.activeElement
    );

    if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = (currentIndex + 1) % focusableLinks.length;
      focusableLinks[next]?.focus();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const prev =
        (currentIndex - 1 + focusableLinks.length) % focusableLinks.length;
      focusableLinks[prev]?.focus();
    }
  }, []);

  useEffect(() => {
    const sidebar = sidebarRef.current;
    if (!sidebar) return;

    const handleKeydown = (e: KeyboardEvent) => handleArrowNavigation(e);

    sidebar.addEventListener("keydown", handleKeydown);
    return () => {
      sidebar.removeEventListener("keydown", handleKeydown);
    };
  }, [handleArrowNavigation]);

  // ✅ When a link is clicked, close sidebar and move focus to skip link
  const handleLinkAction = () => {
    if (onClose) onClose();
    setTimeout(() => skipLinkRef.current?.focus(), 100);
  };

  // ✅ Skip link behavior: move to main content
  const handleSkipToContent = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const mainEl = document.querySelector("main");
    if (mainEl) {
      mainEl.setAttribute("tabindex", "-1");
      (mainEl as HTMLElement).focus();
    }
  };

  return (
    <>
      {/* ✅ Hidden skip link (focus target after sidebar link selection) */}
      <a
        ref={skipLinkRef}
        href="#main-content"
        onClick={handleSkipToContent}
        className="sr-only focus:not-sr-only absolute top-2 left-2 bg-blue-700 text-white px-3 py-2 rounded z-50"
      >
        Skip to main content
      </a>

      <aside
        id="sidebar"
        ref={sidebarRef}
        className={cx(styles.sidebar, isOpen && styles.open)}
        aria-hidden={isOpen ? "false" : "true"}
      >
          <SearchInput />
        <div className={styles.sidebarMenuWrap}>
          {onClose && (
            <div style={{ display: "flex", justifyContent: "flex-end" }}>
              <button
                onClick={onClose}
                className={styles.closeButton}
                aria-label="Close sidebar"
              >
                <CloseIcon fontSize="medium" />
              </button>
            </div>
          )}

          <div className={styles.sidebarLinksWrap}>
            {/* <span className={styles.demoLabel}>
              <ListAltIcon fontSize="large" aria-hidden="true" /> Demo Resources
            </span> */}

            <div className="sidebarInnerLinks">
              {/* Accordion 1 */}
              <Accordion
                title="Common Checks"
                isOpen={openIndex === 0}
                onToggle={() => handleToggle(0)}
                className={styles.generalFormAccordion}
              >
                <ul>
                  {[
                    {
                      href: "/demo-resources/common-checks/image-alternative-text",
                      label: "Image Alternative Text",
                    },
                    {
                      href: "/demo-resources/common-checks/page-title",
                      label: "Page Title",
                    },
                    {
                      href: "/demo-resources/common-checks/heading-structure",
                      label: "Heading Structure",
                    },
                    {
                      href: "/demo-resources/common-checks/color-contrast",
                      label: "Color Contrast",
                    },
                    {
                      href: "/demo-resources/common-checks/skip-link",
                      label: "Skip Link",
                    },
                    {
                      href: "/demo-resources/common-checks/keyboard-focus",
                      label: "Keyboard Focus",
                    },
                    {
                      href: "/demo-resources/common-checks/language-of-page",
                      label: "Language of Page",
                    },
                    {
                      href: "/demo-resources/common-checks/zoom",
                      label: "Zoom",
                    },
                  ].map(({ href, label }, i) => (
                    <li key={href}>
                      <Link href={href} legacyBehavior passHref>
                        <a
                          ref={(el) => (sidebarLinksRef.current[i] = el)}
                          className={getLinkClass(href)}
                          onClick={handleLinkAction}
                        >
                          {label}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Accordion>

              {/* Accordion 2 */}
              <Accordion
                title="Audio/Visual Checks"
                isOpen={openIndex === 1}
                onToggle={() => handleToggle(1)}
                className={styles.generalFormAccordion}
              >
                <ul>
                  {[
                    {
                      href: "/demo-resources/audio-visual-checks/captions",
                      label: "Captions",
                    },
                    {
                      href: "/demo-resources/audio-visual-checks/transcripts",
                      label: "Transcripts",
                    },
                    {
                      href: "/demo-resources/audio-visual-checks/audio-description",
                      label: "Audio Description",
                    },
                  ].map(({ href, label }, i) => (
                    <li key={href}>
                      <Link href={href} legacyBehavior passHref>
                        <a
                          ref={(el) => (sidebarLinksRef.current[10 + i] = el)} // offset index
                          className={getLinkClass(href)}
                          onClick={handleLinkAction}
                        >
                          {label}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Accordion>

              {/* Accordion 3 */}
              <Accordion
                title="Form Checks"
                isOpen={openIndex === 2}
                onToggle={() => handleToggle(2)}
                className={styles.generalFormAccordion}
              >
                <ul>
                  {[
                    {
                      href: "/demo-resources/forms-checks/general-form-patterns",
                      label: "General Form Patterns",
                    },
                    {
                      href: "/demo-resources/forms-checks/top-error-summary",
                      label: "Top Error Summary",
                    },
                    {
                      href: "/demo-resources/forms-checks/date-input-field",
                      label: "Date Input Field",
                    },
                    {
                      href: "/demo-resources/forms-checks/age-input-field",
                      label: "Age Field",
                    },
                  ].map(({ href, label }, i) => (
                    <li key={href}>
                      <Link href={href} legacyBehavior passHref>
                        <a
                          ref={(el) => (sidebarLinksRef.current[20 + i] = el)} // offset index
                          className={getLinkClass(href)}
                          onClick={handleLinkAction}
                        >
                          {label}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </Accordion>
            </div>
          </div>

          {/* ✅ Bottom Notification */}
          <div className={styles.sidebarNotification}>
            <span className={styles.learnMore}>Learn More</span>
            <p className={styles.notificationText}>
              Click this button to learn web accessibility in the best way.
            </p>
            <Button
              className="mt-2"
              text="Reference Materials"
              rounded={false}
              variant="filled"
              icon={<ChevronRightOutlined fontSize="large" />}
              href="/best-references-link"
            />
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
