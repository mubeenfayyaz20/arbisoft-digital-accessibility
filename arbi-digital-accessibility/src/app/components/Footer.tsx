import Link from "next/link";
import React from "react";
import styles from "../styles/components/Footer.module.scss";
import ScrollToTopButton from "./ScrollToTopButton";

const Footer = () => {
  return (
    <div className={styles.bottomList}>
      <Link href="https://arbisoft.com/contact" target="_blank"> <span className="material-symbols-outlined" aria-hidden="true">mail</span>Our Support <span className="sr-only">(opens in a new tab)</span></Link>
      <ScrollToTopButton />
    </div>
  );
};

export default Footer;
