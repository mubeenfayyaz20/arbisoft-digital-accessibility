"use client";

import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Button from "./Button";
import styles from "../styles/components/CustomCard.module.scss";
import { ChevronRightOutlined } from "@mui/icons-material";

interface CardProps {
  title: string;
  titlePosition?: "top" | "bottom" | "both";
  description?: string;
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
  icon?: React.ReactNode;
  buttonText?: string;
  buttonHref?: string;
  buttonTarget?: "_blank" | "_self";
  className?: string;
  socialLinks?: React.ReactNode; // ✅ supports multiple icons
}

const Card = ({
  title,
  titlePosition = "top", // ✅ Default same as old behavior
  description,
  imageSrc,
  icon,
  buttonText,
  buttonHref,
  buttonTarget = "_self",
  className = "",
  imageAlt = "Card image",
  socialLinks,
}: CardProps) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.topBar}></div>

      <div className={styles.contentCard}>
        {/* Optional Icon */}
        {icon && <div className={styles.cardIcon}>{icon}</div>}

        {/* ✅ Title on TOP */}
        {(titlePosition === "top" || titlePosition === "both") && (
          <div className={styles.title}>{title}</div>
        )}

        {/* ✅ Image */}
        {imageSrc && (
          <Image
            src={imageSrc}
            alt={imageAlt}
            className={styles.cardImage}
            width={400}
            height={300}
          />
        )}



        {/* ✅ Title on BOTTOM */}
        {(titlePosition === "bottom" || titlePosition === "both") && (
          <div className={styles.title}>{title}</div>
        )}
                {/* ✅ Description (even if image exists) */}
        {description && <div className={styles.description}>{description}</div>}

        {/* ✅ Button */}
        {buttonText && buttonHref && (
          <Button
            className="mt-4 mb-4"
            text={buttonText}
            rounded={false}
            variant="filled"
            icon={<ChevronRightOutlined fontSize="large" />}
            href={buttonHref}
            target={buttonTarget}
          />
        )}

        {/* ✅ Social Links (any number of icons) */}
        {socialLinks && <div className={styles.socialLinks}>{socialLinks}</div>}
      </div>
    </div>
  );
};

export default Card;
