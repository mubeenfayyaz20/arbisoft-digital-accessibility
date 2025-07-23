import React, { useState } from "react";
import Accordion from "../../Accordion";
import GuidelinesOne from "./GuidelinesOne";
import GuidelinesTwo from "./GuidelinesTwo";
import GuidelinesThree from "./GuidelinesThree";
import GuidelinesFour from "./GuidelinesFour";
import GuidelinesFive from "./GuidelinesFive";
import { TaskAltOutlined } from "@mui/icons-material";


const Operable = () => {
  // this code is for back button trigger login line 10 to 50
  const [openIndex, setOpenIndex] = useState<number | null>(null);


  const handleToggle = (index: number) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <p className="plainText">
        In web accessibility,
        <strong> *Operable*</strong> means that users must be able to navigate
        and interact with a website or application, regardless of their physical
        or cognitive abilities. This includes ensuring that all functionality is
        accessible via keyboard (not just a mouse), providing enough time for
        users to interact with content, and designing navigation that avoids
        causing seizures or physical reactions.
      </p>
      <div className="filledAccordion">
        <Accordion
          title={
            <>
              <TaskAltOutlined fontSize="large" aria-hidden="true" />
              Guideline 2.1 – Keyboard Accessible
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
              Guideline 2.2 - Enough Time
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
              Guideline 2.3 - Seizures and Physical Reactions
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
              Guideline 2.4 - Navigable
            </>
          }
          isOpen={openIndex === 3}
          onToggle={() => handleToggle(3)}
        >
          <GuidelinesFour />
        </Accordion>

        <Accordion
          title={
            <>
              <TaskAltOutlined fontSize="large" aria-hidden="true" />
              Guideline 2.5 - Input Modalities
            </>
          }
          isOpen={openIndex === 4}
          onToggle={() => handleToggle(4)}
        >
          <GuidelinesFive />
        </Accordion>
      </div>
    </div>
  );
};

export default Operable;
