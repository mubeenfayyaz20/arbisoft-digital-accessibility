"use client";

import React from "react";
import Button from "./Button";
import Image from "next/image";
import type { StaticImageData } from 'next/image';
import styles from "../styles/components/CustomCard.module.scss";

interface CardProps {
  title: string;
  description?: string;
imageSrc?: string | StaticImageData // Update this line// Optional image instead of description
  iconName?: string;
  buttonText?: string;
  buttonHref?: string;
  buttonTarget?: "_blank" | "_self";
  className?: string;
  imageAlt?: string; // Optional alt text for image
}

const Card = ({
  title,
  description,
  imageSrc,
  iconName,
  buttonText,
  buttonHref,
  buttonTarget,
  className = "",
  imageAlt = "Card image",
}: CardProps) => {
  return (
    <div className={`${styles.card} ${className}`}>
      <div className={styles.topBar}></div>
      <div className={styles.contentCard}>
        {iconName && (
          <div className={styles.cardIcon}>
            <span className="material-symbols-outlined">{iconName}</span>
          </div>
        )}
        <div className={styles.title}>{title}</div>

        {imageSrc ? (
          <Image src={imageSrc} alt={imageAlt} className={styles.cardImage} width={400} height={200} />
        ) : (
          description && <div className={styles.description}>{description}</div>
        )}

        {buttonText && buttonHref && (
          <Button
            className="mt-4 mb-4"
            text={buttonText}
            rounded={false}
            variant="filled"
            icon="chevron_right"
            href={buttonHref}
            target={buttonTarget}
          />
        )}
      </div>
    </div>
  );
};

export default Card;



// With description

{/* <Card
  title="ARC Toolkit"
  description="The ARC Toolkit is a comprehensive suite for assessing and improving web accessibility..."
  buttonText="ARC Toolkit Download"
  buttonTarget="_blank"
  buttonHref="https://chromewebstore.google.com/detail/arc-toolkit/chdkkkccnlfncngelccgbgfmjebmkmce"
/> */}

// with image
{/* <Card
  title="New Feature"
  imageSrc="/images/feature-screenshot.png"
  imageAlt="Screenshot of the new feature"
  buttonText="Learn More"
  buttonTarget="_blank"
  buttonHref="https://example.com/feature"
/> */}
