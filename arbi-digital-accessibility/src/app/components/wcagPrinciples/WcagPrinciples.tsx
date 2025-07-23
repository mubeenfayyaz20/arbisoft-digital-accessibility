"use client";
import { Tabs, Tab } from "../Tabs";
import Perceivable from "./perceivable";
import Operable from "./operable";
import Understandable from "./understandable";
import Robust from "./robust";
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
