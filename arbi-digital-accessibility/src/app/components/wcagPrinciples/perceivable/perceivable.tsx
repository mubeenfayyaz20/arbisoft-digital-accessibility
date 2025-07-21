import React, { useState, useEffect } from "react";
import Accordion from "../../Accordion";
import GuidelinesOne from "./GuidelinesOne";
import GuidelinesTwo from "./GuidelinesTwo";
import GuidelinesThree from "./GuidelinesThree";
import GuidelinesFour from "./GuidelinesFour";
import { TaskAltOutlined } from "@mui/icons-material";

const Perceivable = () => {
  // this code is for back button trigger login line 10 to 50
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const savedAccordionIndex = localStorage.getItem("accordionIndex");
    const lastFocusedId = localStorage.getItem("lastFocusedId");
    const backToPath = localStorage.getItem("backToPath");

    if (backToPath !== window.location.pathname) {
      localStorage.removeItem("accordionIndex");
      localStorage.removeItem("lastFocusedId");
      localStorage.removeItem("backToPath");
      return;
    }

    if (savedAccordionIndex !== null) {
      setOpenIndex(Number(savedAccordionIndex));
    } else {
      // No accordion index — close all accordions
      setOpenIndex(null);
    }

    if (lastFocusedId) {
      setTimeout(() => {
        const el = document.getElementById(lastFocusedId);
        if (el) {
          el.focus();
        }
      }, 200);
    }

    return () => {
      localStorage.removeItem("accordionIndex");
      localStorage.removeItem("lastFocusedId");
      localStorage.removeItem("backToPath");
    };
  }, []);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <p className="plainText">
        In web accessibility,
        <strong> *Perceivable*</strong> means that information and user
        interface components must be presented to users in ways they can sense
        whether through sight, hearing, or touch—ensuring that content is
        accessible to individuals with sensory disabilities.
      </p>
      <div className="filledAccordion">
        <Accordion
          title={
            <>
              <TaskAltOutlined fontSize="large" aria-hidden="true" />
              Guideline 1.1 – Text Alternatives
            </>
          }
          isOpen={openIndex === 0}
          onToggle={() => handleToggle(0)}
        >
          <GuidelinesOne />
        </Accordion>
        <Accordion
          title={
            <>
              <TaskAltOutlined fontSize="large" aria-hidden="true" />
              Guideline 1.2 - Time-based Media
            </>
          }
          isOpen={openIndex === 1}
          onToggle={() => handleToggle(1)}
        >
          <GuidelinesTwo />
        </Accordion>
        <Accordion
          title={
            <>
              <TaskAltOutlined fontSize="large" aria-hidden="true" />
              Guideline 1.3 - Adaptable
            </>
          }
          isOpen={openIndex === 2}
          onToggle={() => handleToggle(2)}
        >
          <GuidelinesThree />
        </Accordion>
        <Accordion
          title={
            <>
              <TaskAltOutlined fontSize="large" aria-hidden="true" />
              Guideline 1.4 - Distinguishable
            </>
          }
          isOpen={openIndex === 3}
          onToggle={() => handleToggle(3)}
        >
          <GuidelinesFour />
        </Accordion>
      </div>
    </div>
  );
};

export default Perceivable;
