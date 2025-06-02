import Link from "next/link";
import React from "react";
import styles from "../styles/components/Footer.module.scss";
import ScrollToTopButton from "./ScrollToTopButton";

const Footer = () => {
  return (
    <div className={styles.bottomList}>
      <Link href="mailto:contact@arbisoft.com"> <span className="material-symbols-outlined">mail</span>Our Support</Link>
      <ScrollToTopButton />
    </div>
  );
};

export default Footer;
