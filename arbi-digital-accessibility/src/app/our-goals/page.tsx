import React from "react";
import Card from "../components/CustomCard";

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
          description="  We believe accessibility is not just a requirement—it's a
              responsibility. Our platform serves as a dynamic space for
              individuals, developers, designers, and organizations to learn how
              to create digital experiences that are inclusive for everyone."
        />
        <Card
          iconName="diversity_2"
          title="Coding Accessibility (Demo Resources)"
          description="  Our mission is to promote awareness of web accessibility. Sadly,
              many websites remain inaccessible to countless users. we’ve built
              a comprehensive knowledge base, offering everything from WCAG
              guidelines and ARIA practices to testing tools, code samples, and
              implementation tips."
        />
      </div>
    </>
  );
};

export default OurGoals;
