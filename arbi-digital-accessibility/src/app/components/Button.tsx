"use client";

import React from "react";
import Link from "next/link";
import { cn } from "../lib/utils";
import style from "../styles/components/Button.module.scss";

interface ButtonProps {
  text?: string;
  icon?: string;
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
      {text && <span>{text}</span>}
      {icon && <span className="material-symbols-outlined">{icon}</span>}
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

    // Internal link: use Next.js Link for client-side nav (no reload)
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  // Regular button
  return (
    <button onClick={onClick} className={classes}>
      {content}
    </button>
  );
};

export default Button;

// Internal (Fast, No Reload)
{
  /* <Button href="/all-tools" text="See All Tools" icon="chevron_right" /> */
}

// External (New Tab)
{
  /* <Button href="https://example.com" target="_blank" text="Visit Site" /> */
}

// Clickable Button
{
  /* <Button text="Click Me" onClick={() => alert("Hi!")} /> */
}
