"use client";

import { useRouter } from "next/navigation";
import { useRef } from "react";
import { ArrowBack } from "@mui/icons-material";

interface BackButtonProps {
  label?: string;
  tabIndex?: number;
}

const BackButton = ({ label = "Go Back" }: BackButtonProps) => {
  const router = useRouter();
  const buttonRef = useRef<HTMLButtonElement>(null);


  const handleBack = () => {
    router.back();
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleBack}
      className="back-link"
      aria-label={label}
      tabIndex={0}
    >
      <ArrowBack aria-hidden="true" /> {label}
    </button>
  );
};

export default BackButton;
