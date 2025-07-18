"use client";

import React from "react";
import Image from "next/image";
import type { StaticImageData } from "next/image";
import Button from "./Button";
import styles from "../styles/components/CustomCard.module.scss";
import { ChevronRightOutlined } from "@mui/icons-material";

interface CardProps {
  title: string;
  description?: string;
  imageSrc?: string | StaticImageData;
  icon?: React.ReactNode; // MUI icon component
  buttonText?: string;
  buttonHref?: string;
  buttonTarget?: "_blank" | "_self";
  className?: string;
  imageAlt?: string;
}

const Card = ({
  title,
  description,
  imageSrc,
  icon,
  buttonText,
  buttonHref,
  buttonTarget = "_self",
  className = "",
  imageAlt = "Card image",
}: CardProps) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.topBar}></div>
      <div className={styles.contentCard}>
        {icon && (
          <div className={styles.cardIcon}>
            {icon}
          </div>
        )}

        <div className={styles.title}>{title}</div>

        {imageSrc ? (
          <Image
            src={imageSrc}
            alt={imageAlt}
            className={styles.cardImage}
            width={400}
            height={300}
          />
        ) : (
          description && <div className={styles.description}>{description}</div>
        )}

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
      </div>
    </div>
  );
};

export default Card;
