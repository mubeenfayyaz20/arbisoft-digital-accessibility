"use client";
import { useState } from "react";
import styles from "../styles/components/Common.module.scss";

interface CodeSnippetProps {
  code: string;
  language?: string;
  label?: string; // optional aria-label
  showCopyButton?: boolean; // NEW prop
}

const CodeSnippet = ({
  code,
  language = "text",
  label,
  showCopyButton = true,
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
