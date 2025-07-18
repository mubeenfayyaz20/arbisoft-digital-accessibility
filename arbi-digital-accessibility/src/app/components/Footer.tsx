import React from "react";
import Link from "next/link";
import { EmailOutlined } from "@mui/icons-material";
import ScrollToTopButton from "./ScrollToTopButton";
import styles from "../styles/components/Footer.module.scss";


const Footer = () => {
  return (
    <div className={styles.bottomList}>
      <Link href="https://arbisoft.com/contact" target="_blank">
        <EmailOutlined aria-hidden="true" fontSize="large" />
        Our Support <span className="sr-only">(opens in a new tab)</span>
      </Link>
      <ScrollToTopButton />
    </div>
  );
};

export default Footer;
