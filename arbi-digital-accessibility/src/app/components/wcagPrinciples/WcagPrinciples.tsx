"use client";
import { Tabs, Tab } from "../Tabs";
import Perceivable from "../wcagPrinciples/perceivable/perceivable";
import Operable from "../wcagPrinciples/operable/operable";
import Understandable from "../wcagPrinciples/understandable/understandable";
import Robust from "../wcagPrinciples/robust/robust";
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
