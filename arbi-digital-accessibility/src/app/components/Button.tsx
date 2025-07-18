"use client";

import React from "react";
import Link from "next/link";
import { cn } from "../lib/utils";
import style from "../styles/components/Button.module.scss";

interface ButtonProps {
  text?: string;
  icon?: React.ReactNode; // now accepts real MUI icon component
  iconPosition?: "left" | "right";
  variant?: "filled" | "outline";
  rounded?: boolean;
  className?: string;
  href?: string;
  onClick?: () => void;
  target?: "_blank" | "_self";
}

const Button = ({
  text,
  icon,
  iconPosition = "right",
  variant = "filled",
  rounded = false,
  className,
  href,
  onClick,
  target = "_self",
}: ButtonProps) => {
  const isExternal = href?.startsWith("http");
  const base = "inline-flex items-center gap-1 transition duration-200";
  const styles = {
    filled: `${style.buttonFilled} text-white`,
    outline: `${style.buttonOutline} text-white`,
  };
  const radius = rounded ? "rounded-full" : "rounded-md";
  const classes = cn(base, styles[variant], radius, className);

  const content = (
    <>
      {icon && iconPosition === "left" && <span aria-hidden="true">{icon}</span>}
      {text && <span>{text}</span>}
      {icon && iconPosition === "right" && <span aria-hidden="true">{icon}</span>}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target={target}
          rel="noopener noreferrer"
          className={classes}
        >
          {content}
        </a>
      );
    }

    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
};

export default Button;
