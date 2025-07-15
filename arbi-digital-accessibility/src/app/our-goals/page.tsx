import React from "react";
import { Metadata } from "next";
import Card from "../components/CustomCard";

export const metadata: Metadata = {
  title: "Our Goals | Arbi Digital Accessibility",
  description:
    "Discover our core goals and mission focused on advancing digital accessibility, promoting inclusive design, and empowering all users through accessible technology.",
};

const OurGoals = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-center largeHeading ">
          Why Arbi digital accessibility
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-8 ">
        <Card
          iconName="school"
          title="Empowered Learning for All"
          description="We believe accessibility is not just a requirement—it's a responsibility. Our platform serves as a dynamic space for individuals, developers, designers, and organizations to learn how to create digital experiences that are inclusive for everyone."
        />
        <Card
          iconName="visibility"
          title="Raising Accessibility Awareness"
          description=" Our mission is to promote awareness of web accessibility. Sadly,
              many websites remain inaccessible to countless users. we’ve built
              a comprehensive knowledge base, offering everything from WCAG
              guidelines and ARIA practices to testing tools, code samples, and
              implementation tips."
        />
        <Card
          iconName="recommend"
          title="Best References Links For Learning"
          description="The ARBI Digital team has hand-picked a selection of high-quality resources to help our organization build a more accessible website and deepen its understanding of accessibility—covering everything from UI design principles to practical implementation of WCAG guidelines. Explore these articles and materials to guide you every step of your a11y journey."
        />
        <Card
          iconName="diversity_2"
          title="Coding Accessibility (Demo Resources)"
          description="The team is actively building a backlog and repository of commonly used components that require accessibility (A11y) attention. These components have been reviewed and enhanced to ensure they meet accessibility standards, making them easy to pick up and use across any project you're working on.
Our goal is to continue expanding this library across frequently used technologies, so you can seamlessly integrate accessible components into your work."
        />
      </div>
    </>
  );
};

export default OurGoals;
