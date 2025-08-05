"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/components/Sidebar.module.scss";
import Accordion from "./Accordion";
import Button from "../components/Button";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { ChevronRightOutlined } from "@mui/icons-material";

const Sidebar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className={styles.sidebar}>
      <Link href="/" className={styles.logoWrap}>
        <Image
          src="/accessibility-logo.svg"
          className={styles.logo}
          alt="Arbi Digital Accessibility logo"
          width={180}
          height={80}
        />
      </Link>

      <div className={styles.sidebarMenuWrap}>
        <div className={styles.sidebarLinksWrap}>
          <span className={styles.demoLabel}>
            <ListAltIcon fontSize="large" aria-hidden="true" /> Demo Resources
          </span>
          <div className="sidebarInnerLinks">
            <Accordion
              title="Common checks"
              isOpen={openIndex === 0}
              onToggle={() => handleToggle(0)}
            >
              Content for section 1.
            </Accordion>

            <Accordion
              title="Audio/Visual Checks"
              isOpen={openIndex === 1}
              onToggle={() => handleToggle(1)}
            >
              Content for section 2.
            </Accordion>

            <Accordion
              title="Form Checks"
              isOpen={openIndex === 2}
              onToggle={() => handleToggle(2)}
              className={styles.generalFormAccordion}
            >
              <ul>
                <li>
                  <Link href="/demo-resources/forms-checks/general-form-patterns">
                    General Form Patterns
                  </Link>
                </li>
                <li>
                  <Link href="/demo-resources/forms-checks/top-error-summary">
                    Top Error Summary
                  </Link>
                </li>
                <li>
                  <Link href="/demo-resources/forms-checks/date-input-field">
                    Date Input Field
                  </Link>
                </li>
                <li>
                  <Link href="/demo-resources/forms-checks/age-input-field">
                    Age Field
                  </Link>
                </li>
              </ul>
            </Accordion>
            </div>
          </div>
        <div className={styles.sidebarNotification}>
          Click this button to learn web accessibility in the best way.
          <Button
            className="mt-2"
            text="Best Reference Links"
            rounded={false}
            variant="filled"
            icon={<ChevronRightOutlined fontSize="large" />}
            href="/best-references-link"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
