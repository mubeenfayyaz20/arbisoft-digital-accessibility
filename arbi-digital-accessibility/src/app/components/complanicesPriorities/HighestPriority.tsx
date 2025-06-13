import Link from "next/link";
import React from "react";
import AccessibleTable from "../Table";
import styles from "../../styles/components/Table.module.scss";
const HighestPriority = () => {
  return (
    <div className={styles.threeColTableWrapper}>
      <div className="text-center">
        <h1 className="text-center largeHeading ">Highest Priority</h1>
      </div>
      <AccessibleTable
        caption="Highest Priority: Full List of Level A, AA, and Requirements"
        headers={["Level", "Website", "Description"]}
        rows={[
          [
            "A",
            <Link
              key="2.1.1"
              href="https://www.w3.org/WAI/WCAG22/Understanding/keyboard.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              2.1.1 Keyboard
            </Link>,
            "Keyboard accessibility is fundamental for users with motor impairments, as many cannot use a mouse. Non-compliance would completely block access for these users, making it critical for both usability and legal compliance under WCAG Level A, AA and Section 508.",
          ],
          [
            "A",
            <Link
              key="1.1.1"
              href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-content.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              1.1.1 Non-text Content
            </Link>,
            "Providing text alternatives for non-text content (like images or charts) is essential for users who rely on screen readers. Without this, visually impaired users would miss key information making this a fundamental accessibility requirement, especially under WCAG Level A and Section 508.",
          ],
          [
            "AA",
            <Link
              key="1.4.3"
              href="https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              1.4.3 Contrast (Minimum)
            </Link>,
            "Insufficient contrast makes text difficult to read for users with low vision. This impacts a wide range of users and is frequently cited in legal cases for non-compliance, making it a high-priority requirement under WCAG Level AA.",
          ],
          [
            "A",
            <Link
              key="4.1.2"
              href="https://www.w3.org/WAI/WCAG22/Understanding/name-role-value.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              4.1.2 Name, Role, Value
            </Link>,
            "Assistive technologies depend on programmatically defined states and properties to interact with user interface components. If these are not defined, users who rely on assistive technologies will be unable to use the website effectively. This is crucial for screen reader functionality and WCAG Level A compliance.",
          ],
          [
            "A",
            <Link
              key="2.1.2"
              href="https://www.w3.org/WAI/WCAG22/Understanding/no-keyboard-trap.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              2.1.2 No Keyboard Trap
            </Link>,
            "A keyboard trap can completely block navigation for users relying on keyboards, rendering parts of the site unusable. Avoiding this is essential for usability and compliance with WCAG Level A.",
          ],
          [
            "A",
            <Link
              key="1.3.1"
              href="https://www.w3.org/WAI/WCAG22/Understanding/info-and-relationships.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              1.3.1 Info and Relationships
            </Link>,
            "Defining the structure of content programmatically ensures that assistive technologies can correctly interpret the relationships between elements, enhancing comprehension for users with disabilities. This guideline is critical for users of screen readers and is required under WCAG Level A.",
          ],
          [
            "A",
            <Link
              key="2.4.3"
              href="https://www.w3.org/WAI/WCAG22/Understanding/focus-order.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              2.4.3 Focus Order
            </Link>,
            "A logical focus order ensures that users navigating via keyboard can move through interactive elements in an intuitive way. Improper focus order can confuse users, particularly those with motor or visual impairments, making this a necessary requirement for usability and WCAG Level A compliance.",
          ],
          [
            "AA",
            <Link
              key="2.4.7"
              href="https://www.w3.org/WAI/WCAG22/Understanding/focus-visible.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              2.4.7 Focus Visible
            </Link>,
            "A visible focus indicator is crucial for users who navigate via keyboard, ensuring they can track which element is currently selected. Lack of focus visibility can make navigation impossible, leading to non-compliance with WCAG Level AA.",
          ],
          [
            "AA",
            <Link
              key="1.4.4"
              href="https://www.w3.org/WAI/WCAG22/Understanding/resize-text.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              1.4.4 Resize Text
            </Link>,
            "Users with low vision often need to resize text to read it comfortably. Ensuring that text can be resized without breaking content or layout ensures accessibility for a wide range of users, making it a key requirement under WCAG Level AA.",
          ],
          [
            "AA",
            <Link
              key="1.4.11"
              href="https://www.w3.org/WAI/WCAG22/Understanding/non-text-contrast.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              1.4.11 Non-text Contrast
            </Link>,
            "Adequate contrast for non-text elements, such as buttons or form fields, ensures that all users, particularly those with low vision, can perceive and interact with the UI. Non-compliance would reduce usability, making this a WCAG Level AA requirement.",
          ],
          [
            "A",
            <Link
              key="2.4.4"
              href="https://www.w3.org/WAI/WCAG22/Understanding/link-purpose-in-context.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              2.4.4 Link Purpose (In Context)
            </Link>,
            "Ensuring that the purpose of each link is clear from its context helps screen readers and users with cognitive disabilities understand where the link leads. This is vital for navigation and usability under WCAG Level AA.",
          ],
          [
            "A",
            <Link
              key="1.4.1"
              href="https://www.w3.org/WAI/WCAG22/Understanding/use-of-color.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              1.4.1 Use of Color
            </Link>,
            "Relying on color alone to convey information excludes users who are color blind or have low vision. This is essential for accessibility and compliance with WCAG Level A.",
          ],
          [
            "AA",
            <Link
              key="2.4.6"
              href="https://www.w3.org/WAI/WCAG22/Understanding/headings-and-labels.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              2.4.6 Headings and Labels
            </Link>,
            "Descriptive headings and labels help users, particularly those with cognitive impairments or using assistive technology, understand the structure and content of the page. This improves usability and is required for compliance with WCAG Level AA.",
          ],
          [
            "A",
            <Link
              key="1.3.2"
              href="https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              1.3.2 Meaningful Sequence
            </Link>,
            "A logical content sequence is essential for users who rely on screen readers or keyboard navigation. If the sequence is disorganized, it can lead to confusion, making this a key requirement under WCAG Level A.",
          ],
          [
            "A",
            <Link
              key="2.4.1"
              href="https://www.w3.org/WAI/WCAG22/Understanding/bypass-blocks.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              2.4.1 Bypass Blocks
            </Link>,
            "Allowing users to bypass repetitive content like navigation menus enhances efficiency, particularly for users navigating with a keyboard or assistive technology. This is a requirement for improving usability and compliance with WCAG Level A.",
          ],
        ]}
      />
    </div>
  );
};

export default HighestPriority;
