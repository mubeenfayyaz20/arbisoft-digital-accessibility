import React, { useState } from "react";
import Accordion from "../../Accordion";
import GuidelinesOne from "./GuidelinesOne";
import { TaskAltOutlined } from "@mui/icons-material";

const Robust = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div>
      <p className="plainText">
        In web accessibility,
        <strong> *Robust*</strong> means that content must be compatible with a
        wide range of current and future technologies, including various
        assistive devices. This principle emphasizes creating content that can
        be reliably interpreted by different browsers, screen readers, and other
        tools so that all users can access it, regardless of the technology they
        use.
      </p>
      <div className="filledAccordion">
        <Accordion
          title={
            <>
             <TaskAltOutlined fontSize="large" aria-hidden="true" />
              Guideline 4.1 - Compatible
            </>
          }
          isOpen={openIndex === 0}
          onToggle={() => handleToggle(0)}
        >
          <GuidelinesOne />
        </Accordion>
      </div>
    </div>
  );
};

export default Robust;
