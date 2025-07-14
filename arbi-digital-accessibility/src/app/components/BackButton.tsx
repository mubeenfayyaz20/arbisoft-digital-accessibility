"use client";

import { useRouter } from "next/navigation";
import { useEffect, useRef } from "react";

interface BackButtonProps {
  label?: string;
}

const BackButton = ({ label = "Go Back" }: BackButtonProps) => {
  const router = useRouter();
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Optional: Set focus on button when mounted
    buttonRef.current?.focus();
  }, []);

  const handleBack = () => {
    router.back();
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleBack}
      className="back-link"
      aria-label={label}
    >
      ← {label}
    </button>
  );
};

export default BackButton;
