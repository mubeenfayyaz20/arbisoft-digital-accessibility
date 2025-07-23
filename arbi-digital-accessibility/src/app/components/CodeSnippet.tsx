"use client";
import { useState } from "react";
import styles from "../styles/components/Common.module.scss";

interface CodeSnippetProps {
  code: string;
  language?: string;
  label?: string; // optional aria-label
  showCopyButton?: boolean; // NEW prop
  caption?: string | React.ReactNode; // optional caption for the code snippet
  captionHeading?: string; // optional heading for the caption
  captionColor?: "default" | "green" | "red"; // add more if needed
}

const CodeSnippet = ({
  code,
  language = "text",
  label,
  showCopyButton = true,
  caption,
  captionHeading,
  captionColor = "default", // default color
}: CodeSnippetProps) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };
  const colorClass =
    captionColor === "green"
      ? styles.captionGreen
      : captionColor === "red"
      ? styles.captionRed
      : "";

  return (
    <div className={styles.codeSnippet}>
      {/* 1. Visible label for screen readers and sighted users */}
      {label && (
        <p id="code-label" className={styles.labelWrapper}>
          {label}
        </p>
      )}

      <pre className={styles.preCodeSinppet}>
        <code className={`language-${language}`}>{code}</code>
      </pre>
      <h6 className={`${styles.captionHeading} ${colorClass}`}>
        {captionHeading}
      </h6>

      {caption && (
        <div className={`${styles.caption} ${colorClass}`}>
          {typeof caption === "string" ? <p>{caption}</p> : caption}
        </div>
      )}

      {showCopyButton && code.trim() && (
        <button
          onClick={handleCopy}
          aria-live="polite"
          className="absolute top-2 right-2 back-link"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      )}
    </div>
  );
};

export default CodeSnippet;
