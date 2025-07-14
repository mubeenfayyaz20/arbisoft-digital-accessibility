import React from "react";
import { Metadata } from "next";
import Link from "next/link";
import AccessibleTable from "../components/Table";
import styles from "../styles/components/Table.module.scss";

export const metadata: Metadata = {
  title: "Best Reference Links | Arbi Digital Accessibility",
  description:
    "Best Reference Links for all user developer and designer where they can easily learn about accessibility",
};
const BestReferencesLink = () => {
  return (
    <div className={styles.threeColTableWrapper}>
      <div className="text-center">
        <h1 className="text-center largeHeading ">  Best Reference Links</h1>
      </div>
      <AccessibleTable
        caption="Useful Links for All Developer & Designer "
        headers={["Website Name", "Website URL", "Description"]}
        rows={[
          [
            "Web Content Accessibility Guidelines (WCAG) ",
            <Link
              key={"WCAG22"}
              href="https://www.w3.org/WAI/WCAG22/quickref/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              WCAG
            </Link>,
            "A customizable quick reference to Web Content Accessibility Guidelines (WCAG) 2 requirements (success criteria) and techniques.",
          ],
          [
            "WCAG2Mobile",
            <Link
              key={"WCAG2Mobile"}
              href="https://www.w3.org/TR/wcag2mobile-22/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              WCAG2Mobile
            </Link>,
            "This document describes how Web Content Accessibility Guidelines (WCAG) 2.2 [WCAG22] principles, guidelines, and success criteria can be applied to mobile applications, including native mobile apps, mobile web apps and hybrid apps using web components inside native mobile apps.",
          ],
          [
            "Digitala11y Accessibility Partner",
            <Link
              key={"WAI-ARIA"}
              href="https://www.digitala11y.com/wai-aria-1-1-cheat-sheet/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Visit WAI-ARIA 1.2
            </Link>,
            "WAI-ARIA stands for Web Accessibility Initiative – Accessible Rich Internet Applications. WAI-ARIA help achieve the accessibility of complex widgets & dynamic content developed with Java Script, HTML, Ajax & other related technologies. ",
          ],
          [
            "w3School",
            <Link
              key={"w3School"}
              href="https://www.w3schools.com/accessibility/index.php"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Accessibility Tutorial
            </Link>,
            "Accessibility is about making web pages accessible for everyone, also people with disabilites.",
          ],
          [
            "HTML Element",
            <Link
              key={"HTML-lement"}
              href="https://thepaciellogroup.github.io/AT-browser-tests/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              HTML Element 2024
            </Link>,
            "This website explains the PASS criteria and provides multiple test cases for HTML, along with code examples showing how we can use them in our own HTML.",
          ],
          [
            "HTML5 Accessibility Cross Browser Testing",
            <Link
              key={"cross-browser-testing"}
              href="https://www.html5accessibility.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              HTML5 Accessibility Cross Browser Testing
            </Link>,
            "This site tests which newish HTML5 features are accessibly supported by major browsers. This includes if they are keyboard accessible, mapped to the platform accessibility APIs, and if any accessibility related features are supported.",
          ],
          [
            "STVDIO",
            <Link
              key={"STVDIO"}
              href="http://web-accessibility.carnegiemuseums.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              STVDIO
            </Link>,
            "The web is a powerful, and increasingly necessary, way of connecting with one another and the world. In order to provide equal access and opportunity to all, we must do our part to make the web accessible to those individuals with visual, auditory, physical, speech, cognitive, and neurological disabilities.",
          ],
          [
            "Magentaa11y",
            <Link
              key={"magentaa11y"}
              href="https://www.magentaa11y.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Magentaa11y
            </Link>,
            "Accessibility Acceptance Criteria Automatically generate test cases for Web, iOS and Android components",
          ],
          [
            "TheA11yproject",
            <Link
              key={"a11yproject"}
              href="https://www.a11yproject.com/checklist/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              The A11y project Checklist
            </Link>,
            "There are three levels of accessibility compliance in the WCAG, which reflect the priority of support: A: Essential, AA: Ideal Support, AAA: Specialized Support",
          ],
          [
            "ARIA Authoring Practices Guide",
            <Link
              key={"APG"}
              href="https://www.w3.org/WAI/ARIA/apg/patterns/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              ARIA Authoring Practices Guide
            </Link>,
            "Learn how to make accessible web components and widgets with ARIA roles, states and properties and by implementing keyboard support.",
          ],

          [
            "WebAIM's WCAG 2 Checklist",
            <Link
              key={"WebAIM's"}
              href="https://webaim.org/standards/wcag/checklist"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              WebAIM&apos;s WCAG 2 Checklist
            </Link>,
            "The experts at WebAIM can audit your web site and provide a detailed report to help you remediate accessibility and WCAG compliance issues.",
          ],
        ]}
      />
    </div>
  );
};

export default BestReferencesLink;
