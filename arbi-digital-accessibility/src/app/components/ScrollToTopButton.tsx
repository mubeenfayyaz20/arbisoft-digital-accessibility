"use client";
import { useEffect, useState } from "react";
import { ArrowCircleUpOutlined } from "@mui/icons-material";

export default function ScrollToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScrollToTop = () => {
    // Scroll to top smoothly
    window.scrollTo({ top: 0, behavior: "smooth" });

    // Wait a bit for the scroll to finish before trying to focus
    setTimeout(() => {
      const focusableSelectors =
        'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])';
      const firstFocusable = document.querySelector(focusableSelectors);

      // Only focus if an interactive element is found
      if (firstFocusable) {
        (firstFocusable as HTMLElement).focus();
      }
    }, 500);
  };

  if (!visible) return null;

  return (
    <button onClick={handleScrollToTop} className="flex gap-2 cursor-pointer btnFocus">
      <ArrowCircleUpOutlined fontSize="large"  aria-hidden="true" />
      Scroll Up
    </button>
  );
}
