"use client";
import { Tabs, Tab } from "../Tabs";
import Perceivable from "./perceivable/Perceivable";
import Operable from "./operable/Operable";
import Understandable from "./understandable/Understandable";
import Robust from "./robust/Robust";
import React from "react";

const WcagPrinciples = () => {
  return (
    <div className="mainTabs">
      <Tabs>
        <Tab label="Perceivable">
          <Perceivable />
        </Tab>
        <Tab label="Operable">
          <Operable />
        </Tab>
        <Tab label="Understandable">
          <Understandable />
        </Tab>
        <Tab label="Robust">
          <Robust />
        </Tab>
      </Tabs>
    </div>
  );
};

export default WcagPrinciples;
