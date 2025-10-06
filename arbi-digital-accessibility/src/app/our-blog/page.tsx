import React from "react";
import { Metadata } from "next";
import Card from "../components/CustomCard";

export const metadata: Metadata = {
  title:
    "Accessibility Compliance Priority Levels (A, AA, AAA) | Arbi Digital Accessibility",
  description:
    "Explore the priority levels of accessibility compliance from A to AAA. Understand which WCAG level your website should meet to ensure inclusivity, usability, and legal accessibility standards.",
};

const OurBlog = () => {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <Card
          title="Developing for Colorblind Users: Practical Accessibility Tips"
          buttonText="Colorblind Users"
          buttonHref="https://arbisoft.com/blogs/developing-for-colorblind-users-practical-accessibility-tips"
          buttonTarget="_blank"
          imageSrc={
            "/Developing_for_Colorblind_Users_Practical_Accessibility.jpg"
          }
          imageAlt="Developing for Colorblind Users: Practical Accessibility Tips"
        />
        <Card
          title="Document Accessibility Made Easy: A Practical Guide for Everyone"
          buttonText="Document Accessibility"
          buttonHref="https://arbisoft.com/blogs/document-accessibility-made-easy-a-practical-guide-for-everyone"
          buttonTarget="_blank"
          imageSrc={
            "/AWC_Blog_Document_Accessibility_Made_Easy_A_Practical_Guide_for_Everyone.jpg"
          }
          imageAlt="Document Accessibility Made Easy: A Practical Guide for Everyone"
        />
        <Card
          title="Shifting Accessibility Left: How to Empower Developers, QA and Designers Together"
          buttonText="Shifting Accessibility Left"
          buttonHref="https://arbisoft.com/blogs/shifting-accessibility-left-how-to-empower-developers-qa-and-designers-together"
          buttonTarget="_blank"
          imageSrc={"/how-to-empower-developers-QA-and-esigners-together.jpg"}
          imageAlt="Shifting Accessibility Left: How to Empower Developers, QA and Designers Together"
        />
        <Card
          title="EAA Compliance 2025: How to Keep Your App in the EU Market"
          buttonText="EAA Compliance 2025"
          buttonHref="https://arbisoft.com/blogs/eaa-compliance-2025-how-to-keep-your-app-in-the-eu-market"
          buttonTarget="_blank"
          imageSrc={"/how-to-keep-your-app-in-the-eu-market.jpg"}
          imageAlt=" EAA Compliance 2025: How to Keep Your App in the EU Market"
        />
        <Card
          title="How to Make a Website More Accessible: A Beginner's Guide"
          buttonText="How to Make a Website More Accessible"
          buttonHref="https://arbisoft.com/blogs/how-to-make-a-website-more-accessible-a-beginner-s-guide"
          buttonTarget="_blank"
          imageSrc={
            "/how-to-make-a-website-more-accessible-a-beginner-s-guide.jpg"
          }
          imageAlt="How to Make a Website More Accessible: A Beginner's Guide"
        />
        <Card
          title="Making Mobile Apps Accessible: Why It Matters and How to Begin"
          buttonText="Making Mobile Apps Accessible"
          buttonHref="https://arbisoft.com/blogs/making-mobile-apps-accessible-why-it-matters-and-how-to-begin"
          buttonTarget="_blank"
          imageSrc={
            "/making-mobile-apps-accessible-why-it-matters-and-how-to-begin.jpg"
          }
          imageAlt="Making Mobile Apps Accessible: Why It Matters and How to Begin"
        />

        <Card
          title="Accessibility in Software Development: 3 Questions Every Tech Professional Should Ask"
          buttonText="Accessibility in Software Development"
          buttonHref="https://arbisoft.com/blogs/accessibility-in-software-development-3-questions-every-tech-professional-should-ask"
          buttonTarget="_blank"
          imageSrc={
            "/accessibility-in-software-development-3-questions-every-tech-professional-should-ask.jpg"
          }
          imageAlt="Accessibility in Software Development"
        />
        <Card
          title="Mastering ARIA Roles, States & Properties for Accessible Interfaces"
          buttonText="Mastering ARIA Roles"
          buttonHref="https://arbisoft.com/blogs/mastering-aria-roles-states-and-properties-for-accessible-interfaces"
          buttonTarget="_blank"
          imageSrc={
            "/mastering-aria-roles-states-and-properties-for-accessible-interfaces.jpg"
          }
          imageAlt="Mastering ARIA Roles, States & Properties for Accessible Interfaces"
        />
        <Card
          title="Designing for Accessibility - WCAG Guidelines"
          buttonText="Designing for Accessibility"
          buttonHref="https://arbisoft.com/blogs/designing-for-accessibility-wcag-guidelines"
          buttonTarget="_blank"
          imageSrc={"/designing-for-accessibility-wcag-guidelines.jpg"}
          imageAlt="Designing for Accessibility - WCAG Guidelines"
        />

        <Card
          title="Accessibility Testing: Ensuring Inclusivity"
          buttonText="Accessibility Testing"
          buttonHref="https://arbisoft.com/blogs/accessibility-testing-ensuring-inclusivity"
          buttonTarget="_blank"
          imageSrc={"/accessibility-testing-ensuring-inclusivity.jpg"}
          imageAlt="Accessibility Testing: Ensuring Inclusivity"
        />

               <Card
          title="Is Web Content Accessibility Key to Business Success?"
          buttonText="Is Web Content Accessibility Key to Business Success?"
          buttonHref="https://arbisoft.com/blogs/is-web-content-accessibility-key-to-business-success"
          buttonTarget="_blank"
          imageSrc={"/is-web-content-accessibility-key-to-business-success.jpg"}
          imageAlt="Is Web Content Accessibility Key to Business Success?"
        />
      </div>
    </>
  );
};

export default OurBlog;
