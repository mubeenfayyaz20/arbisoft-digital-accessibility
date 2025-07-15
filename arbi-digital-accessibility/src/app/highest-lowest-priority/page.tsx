import React from "react";
import { Metadata } from "next";
import { Tabs, Tab } from "../components/Tabs";
import HighestPriority from "../components/complanicesPriorities/HighestPriority";
import HighPriority from "../components/complanicesPriorities/HighPriority";
import MediumPriority from "../components/complanicesPriorities/MediumPriority";
import LowPriority from "../components/complanicesPriorities/LowPriority";
import LowestPriority from "../components/complanicesPriorities/LowestPriority";


export const metadata: Metadata = {
  title: "Highest to Lowest Priority of Compliances | Arbi Digital Accessibility",
  description:
    "Understand the hierarchy of accessibility compliance levels, from highest to lowest priority, to help you meet legal requirements and improve user experience effectively.",
};
const HigestLowestPriority = () => {
  return (
    <>
      <Tabs>
        <Tab label="Highest Priority">
          <HighestPriority />
        </Tab>
        <Tab label="High Priority">
          <HighPriority />
        </Tab>
        <Tab label="Medium Priority">
          <MediumPriority />
        </Tab>
        <Tab label="Lowest Priority">
          <LowestPriority />

        </Tab>
        <Tab label="Low Priority">
          <LowPriority />

        </Tab>
      </Tabs>
    </>
  );
};

export default HigestLowestPriority;
