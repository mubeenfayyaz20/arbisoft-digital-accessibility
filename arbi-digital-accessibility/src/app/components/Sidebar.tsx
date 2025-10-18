"use client";
import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "../styles/components/Sidebar.module.scss";
import Accordion from "./Accordion";
import Button from "../components/Button";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ChevronRightOutlined from "@mui/icons-material/ChevronRightOutlined";
import CloseIcon from "@mui/icons-material/Close";

// helper for class merging
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

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
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

  return (
    <aside
      id="sidebar"
      ref={sidebarRef}
      className={cx(styles.sidebar, isOpen && styles.open)}
      aria-hidden={isOpen ? "false" : "true"}
    >
      <div className={styles.sidebarMenuWrap}>
        {/* ✅ Close button at the top for predictable first focus */}
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
          <span className={styles.demoLabel}>
            <ListAltIcon fontSize="large" aria-hidden="true" /> Demo Resources
          </span>

          <div className="sidebarInnerLinks">
            {/* ✅ 1. Common Checks */}
            <Accordion
              title="Common Checks"
              isOpen={openIndex === 0}
              onToggle={() => handleToggle(0)}
              className={styles.generalFormAccordion}
            >
              <ul>
                <li>
                  <Link
                    href="/demo-resources/common-checks/image-alternative-text"
                    className={getLinkClass(
                      "/demo-resources/common-checks/image-alternative-text"
                    )}
                  >
                    Image Alternative Text
                  </Link>
                </li>
                <li>
                  <Link
                    href="/demo-resources/common-checks/page-title"
                    className={getLinkClass(
                      "/demo-resources/common-checks/page-title"
                    )}
                  >
                    Page Title
                  </Link>
                </li>
                <li>
                  <Link
                    href="/demo-resources/common-checks/heading-structure"
                    className={getLinkClass(
                      "/demo-resources/common-checks/heading-structure"
                    )}
                  >
                    Heading Structure
                  </Link>
                </li>
                <li>
                  <Link
                    href="/demo-resources/common-checks/color-contrast"
                    className={getLinkClass(
                      "/demo-resources/common-checks/color-contrast"
                    )}
                  >
                    Color Contrast
                  </Link>
                </li>
                <li>
                  <Link
                    href="/demo-resources/common-checks/skip-link"
                    className={getLinkClass(
                      "/demo-resources/common-checks/skip-link"
                    )}
                  >
                    Skip Link
                  </Link>
                </li>
                <li>
                  <Link
                    href="/demo-resources/common-checks/keyboard-focus"
                    className={getLinkClass(
                      "/demo-resources/common-checks/keyboard-focus"
                    )}
                  >
                    Keyboard Focus
                  </Link>
                </li>
                <li>
                  <Link
                    href="/demo-resources/common-checks/language-of-page"
                    className={getLinkClass(
                      "/demo-resources/common-checks/language-of-page"
                    )}
                  >
                    Language of Page
                  </Link>
                </li>
                <li>
                  <Link
                    href="/demo-resources/common-checks/zoom"
                    className={getLinkClass(
                      "/demo-resources/common-checks/zoom"
                    )}
                  >
                    Zoom
                  </Link>
                </li>
              </ul>
            </Accordion>

            {/* ✅ 2. Audio/Visual Checks */}
            <Accordion
              title="Audio/Visual Checks"
              isOpen={openIndex === 1}
              onToggle={() => handleToggle(1)}
              className={styles.generalFormAccordion}
            >
              <ul>
                <li>
                  <Link
                    href="/demo-resources/audio-visual-checks/captions"
                    className={getLinkClass(
                      "/demo-resources/audio-visual-checks/captions"
                    )}
                  >
                    Captions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/demo-resources/audio-visual-checks/transcripts"
                    className={getLinkClass(
                      "/demo-resources/audio-visual-checks/transcripts"
                    )}
                  >
                    Transcripts
                  </Link>
                </li>
                <li>
                  <Link
                    href="/demo-resources/audio-visual-checks/audio-description"
                    className={getLinkClass(
                      "/demo-resources/audio-visual-checks/audio-description"
                    )}
                  >
                    Audio Description
                  </Link>
                </li>
              </ul>
            </Accordion>

            {/* ✅ 3. Form Checks */}
            <Accordion
              title="Form Checks"
              isOpen={openIndex === 2}
              onToggle={() => handleToggle(2)}
              className={styles.generalFormAccordion}
            >
              <ul>
                <li>
                  <Link
                    href="/demo-resources/forms-checks/general-form-patterns"
                    className={getLinkClass(
                      "/demo-resources/forms-checks/general-form-patterns"
                    )}
                  >
                    General Form Patterns
                  </Link>
                </li>
                <li>
                  <Link
                    href="/demo-resources/forms-checks/top-error-summary"
                    className={getLinkClass(
                      "/demo-resources/forms-checks/top-error-summary"
                    )}
                  >
                    Top Error Summary
                  </Link>
                </li>
                <li>
                  <Link
                    href="/demo-resources/forms-checks/date-input-field"
                    className={getLinkClass(
                      "/demo-resources/forms-checks/date-input-field"
                    )}
                  >
                    Date Input Field
                  </Link>
                </li>
                <li>
                  <Link
                    href="/demo-resources/forms-checks/age-input-field"
                    className={getLinkClass(
                      "/demo-resources/forms-checks/age-input-field"
                    )}
                  >
                    Age Field
                  </Link>
                </li>
              </ul>
            </Accordion>
          </div>
        </div>

        {/* ✅ Bottom Notification Section */}
        <div className={styles.sidebarNotification}>
          <span className={styles.learnMore}>Learn More</span>
          <p className={styles.notificationText}>
            Click this button to learn web accessibility in the best way.
          </p>
          <Button
            className="mt-2"
            text="View Reference Materials"
            rounded={false}
            variant="filled"
            icon={<ChevronRightOutlined fontSize="large" />}
            href="/best-references-link"
          />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
