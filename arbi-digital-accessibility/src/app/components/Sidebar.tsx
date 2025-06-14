"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/components/Sidebar.module.scss";
import Accordion from "./Accordion";
import Logo from "../../../public/accessibility-logo.svg";
import Button from "../components/Button";
import Link from "next/link";

const Sidebar = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div className={styles.sidebar}>
      <Link href="/" className={styles.logoWrap}>
        <Image
          src={Logo}
          className={styles.logo}
          alt="Arbi Digital Accessibility logo"
          width={180}
          height={80}
        />
      </Link>

      <div className={styles.sidebarMenuWrap}>
        <div className={styles.sidebarLinksWrap}>
          <span className={styles.demoLabel}>
            {" "}
            <span className="material-symbols-outlined">ad_group</span> Demo
            Resources
          </span>
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
          >
            Content for section 3.
          </Accordion>
        </div>
        <div className={styles.sidebarNotification}>
          Click this button to learn web accessibility in the best way.
          <Button
            className="mt-2"
            text="Best Reference Links"
            rounded={false}
            variant="filled"
            icon="chevron_right"
            href="/best-references-link"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
