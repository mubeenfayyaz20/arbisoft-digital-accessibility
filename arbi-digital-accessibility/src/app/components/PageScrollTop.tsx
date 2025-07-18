"use client"; // Must be at the top

import { useEffect } from "react";

const PageScrollTop = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return null; // no need for empty fragment
};

export default PageScrollTop;

