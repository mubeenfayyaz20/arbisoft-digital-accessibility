import React, { useState } from "react";
import Accordion from "../../Accordion";
import GuidelinesOne from "./GuidelinesOne";
import GuidelinesTwo from "./GuidelinesTwo";
import GuidelinesThree from "./GuidelinesThree";
import { TaskAltOutlined } from "@mui/icons-material";

const Understandable = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div>
      <p className="plainText">
        In web accessibility,
        <strong> *Understandable*</strong> means that content and user interface
        elements must be clear and easy for users to comprehend. This includes
        using straightforward language, offering instructions for complex
        interactions, providing consistent navigation, and minimizing any
        unexpected behaviors. The goal is to ensure that all users can process
        and use the information without confusion.
      </p>
      <div className="filledAccordion">
        <Accordion
          title={
            <>
              <TaskAltOutlined fontSize="large" aria-hidden="true" />
              Guideline 3.1 - Readable
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
              Guideline 3.2 - Predictable
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
              Guideline 3.3 - Input Assistance
            </>
          }
          isOpen={openIndex === 2}
          onToggle={() => handleToggle(2)}
        >
          <GuidelinesThree />
        </Accordion>
    
      </div>
    </div>
  );
};

export default Understandable;
