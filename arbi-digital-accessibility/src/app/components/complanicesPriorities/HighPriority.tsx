import Link from "next/link";
import React from "react";
import AccessibleTable from "../Table";
import styles from "../../styles/components/Table.module.scss";
const HighPriority = () => {
  return (
    <div className={styles.threeColTableWrapper}>
      <div className="text-center">
        <h1 className="text-center largeHeading ">High Priority</h1>
      </div>
      <AccessibleTable
        caption="High Priority: Full List of Level A, AA, and AAA Requirements"
        headers={["Level", "Website", "Description"]}
        rows={[
          [
            "AAA",
            <Link
              key="2.4.13"
              href="https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              2.4.13 Focus Appearance
            </Link>,
            "A visible focus indicator ensures that users, especially those navigating with a keyboard, can clearly identify the element in focus. The lack of this feature impairs usability for many users, particularly those with visual or motor impairments, making it a critical requirement under WCAG Level AA.",
          ],
          [
            "AA",
            <Link
              key="1.4.5"
              href="https://www.w3.org/WAI/WCAG22/Understanding/images-of-text.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              1.4.5 Images of Text
            </Link>,
            "Using text instead of images of text ensures that content is scalable and accessible to users with low vision or those relying on screen readers. Non-compliance can make content difficult to interact with, reducing usability across devices and screen sizes.",
          ],
          [
            "A",
            <Link
              key="3.2.1"
              href="https://www.w3.org/WAI/WCAG22/Understanding/on-focus.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              3.2.1 On Focus
            </Link>,
            "Ensuring that focus does not trigger a context change prevents confusion and enhances user control, particularly for those using screen readers or keyboard navigation. Compliance with this guideline is crucial for maintaining user orientation.",
          ],
          [
            "A",
            <Link
              key="3.2.2"
              href="https://www.w3.org/WAI/WCAG22/Understanding/on-input.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              3.2.2 On Input
            </Link>,
            "Input changes should not automatically trigger context changes unless explicitly communicated to the user. This guideline helps maintain user control and prevents disorientation, especially for users with cognitive disabilities or those using assistive technologies.",
          ],
          [
            "A",
            <Link
              key="1.2.2"
              href="https://www.w3.org/WAI/WCAG22/Understanding/captions-prerecorded.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              1.2.2 Captions (Prerecorded)
            </Link>,
            "Captions must be provided for all prerecorded audio content. Essential for users who are deaf or hard of hearing.",
          ],
          [
            "AA",
            <Link
              key="2.5.8"
              href="https://www.w3.org/WAI/WCAG22/Understanding/target-size-minimum.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              2.5.8 Target Size (Minimum)
            </Link>,
            "The size of the target for pointer inputs must be at least 24 by 24 CSS pixels. Ensures accessibility for users with motor impairments.",
          ],
          [
            "A",
            <Link
              key="2.2.1"
              href="https://www.w3.org/WAI/WCAG22/Understanding/timing-adjustable.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              2.2.1 Timing Adjustable
            </Link>,
            "Users should have the ability to adjust or turn off time limits for completing tasks. Critical for users with cognitive disabilities.",
          ],
          [
            "A",
            <Link
              key="3.3.2"
              href="https://www.w3.org/WAI/WCAG22/Understanding/labels-or-instructions.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              3.3.2 Labels or Instructions
            </Link>,
            "Clear labels or instructions must be provided for form fields. Enhances usability and comprehension.",
          ],
          [
            "A",
            <Link
              key="3.3.1"
              href="https://www.w3.org/WAI/WCAG22/Understanding/error-identification.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              3.3.1 Error Identification
            </Link>,
            "Users must be informed when an input error occurs. Critical for helping users correct mistakes.",
          ],
          [
            "AA",
            <Link
              key="3.3.4"
              href="https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-legal-financial-data.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              3.3.4 Error Prevention
            </Link>,
            "Users should be able to review information before finalizing high-impact submissions. Improves usability.",
          ],
          [
            "AA",
            <Link
              key="3.3.3"
              href="https://www.w3.org/WAI/WCAG22/Understanding/error-suggestion.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              3.3.3 Error Suggestion
            </Link>,
            "When users make an input error, suggestions for correcting the error should be provided. Enhances user experience.",
          ],
          [
            "AA",
            <Link
              key="3.3.8"
              href="https://www.w3.org/WAI/WCAG22/Understanding/accessible-authentication-minimum.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              3.3.8 Accessible Authentication
            </Link>,
            "Provide accessible ways for users to authenticate. Enhances usability but may not be critical.",
          ],
        ]}
      />
    </div>
  );
};

export default HighPriority;
