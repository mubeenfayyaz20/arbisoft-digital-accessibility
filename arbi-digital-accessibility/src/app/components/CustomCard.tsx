"use client";

import React from "react";
import Button from "./Button";
import styles from "../styles/components/CustomCard.module.scss"; // adjust if needed

interface CardProps {
  title: string;
  description: string;
  iconName?: string; // e.g. "school", "check", "star"
  buttonText?: string;
  buttonHref?: string;
  buttonTarget?: "_blank" | "_self"; // Optional target
  className?: string;
}

const Card = ({
  title,
  description,
  iconName,
  buttonText,
  buttonHref,
  buttonTarget,
  className = "",
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
        <div className={styles.description}>{description}</div>
        {buttonText && buttonHref && (
          <Button
            className="mt-4 mb-4"
            text={buttonText}
            rounded={false}
            variant="filled"
            icon="chevron_right"
            href={buttonHref}
            target={buttonTarget} // optional
          />
        )}
      </div>
    </div>
  );
};

export default Card;

// this is use without button
{
  /* <Card
  iconName="school"
  title="Empowered Learning for All"
  description="We believe accessibility is not just a requirement—it's a responsibility. Our platform serves as a dynamic space for individuals, developers, designers, and organizations to learn how to create digital experiences that are inclusive for everyone."
/> */
}

// this is use with button
{
  /* <Card
  iconName="school"
  title="Empowered Learning for All"
  description="We believe accessibility is not just a requirement—it's a responsibility. Our platform serves as a dynamic space for individuals, developers, designers, and organizations to learn how to create digital experiences that are inclusive for everyone."
  buttonText="Start Learning"
    buttonTarget="_blank"
  buttonHref="https://your-link-here.com"
/> */
}
