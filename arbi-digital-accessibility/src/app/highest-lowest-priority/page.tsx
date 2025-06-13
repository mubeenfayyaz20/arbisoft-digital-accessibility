import React from "react";
import { Tabs, Tab } from "../components/Tabs";
import HighestPriority from "../components/complanicesPriorities/HighestPriority";
import HighPriority from "../components/complanicesPriorities/HighPriority";
import MediumPriority from "../components/complanicesPriorities/MediumPriority";
import LowPriority from "../components/complanicesPriorities/LowPriority";
import LowestPriority from "../components/complanicesPriorities/LowestPriority";

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
