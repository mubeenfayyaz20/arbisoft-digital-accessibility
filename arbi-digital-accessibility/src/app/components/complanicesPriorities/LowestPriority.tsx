import Link from "next/link";
import React from "react";
import AccessibleTable from "../Table";
import styles from "../../styles/components/Table.module.scss";

const LowestPriority = () => {
  return (
    <div className={styles.threeColTableWrapper}>
      <div className="text-center">
        <h1 className="text-center largeHeading ">Lowest Priority</h1>
      </div>

      <AccessibleTable
        caption="Medium Priority: Full List of Level A, AA, AAA and Requirements"
        headers={["Level", "Website", "Description"]}
        rows={[
          [
            "A",
            <Link
              key="2.3.1"
              href="https://www.w3.org/WAI/WCAG22/Understanding/three-flashes-or-below-threshold.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              2.3.1 Three Flashes or Below Threshold
            </Link>,
            "Content must not flash more than three times in any one second period. Important for users with photosensitive epilepsy.",
          ],
          [
            "AA",
            <Link
              key="1.4.13"
              href="https://www.w3.org/WAI/WCAG22/Understanding/content-on-hover-or-focus.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              1.4.13 Content on Hover or Focus
            </Link>,
            "Ensure that content displayed on hover or focus can be dismissed or interacted with easily. Enhances usability but is less critical.",
          ],
          [
            "AAA",
            <Link
              key="2.5.6"
              href="https://www.w3.org/WAI/WCAG22/Understanding/concurrent-input-mechanisms.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              2.5.6 Concurrent Input Mechanisms
            </Link>,
            "Ensure that users can perform actions using different input methods, accommodating a wider range of users.",
          ],
          [
            "A",
            <Link
              key="3.1.1"
              href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-page.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              3.1.1 Language of Page
            </Link>,
            "The default human language of each Web page can be programmatically determined. Helps assistive technologies convey information accurately.",
          ],
          [
            "AA",
            <Link
              key="3.1.2"
              href="https://www.w3.org/WAI/WCAG22/Understanding/language-of-parts.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              3.1.2 Language of Parts
            </Link>,
            "The language used in specific parts of content must be identified programmatically. Important for multilingual content.",
          ],
          [
            "A",
            <Link
              key="3.2.6"
              href="https://www.w3.org/WAI/WCAG22/Understanding/error-prevention-all.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              3.2.6 Consistent Help
            </Link>,
            "Provide consistent help across the site to assist users. Enhances understanding of functions.",
          ],
          [
            "A",
            <Link
              key="3.3.7"
              href="https://www.w3.org/WAI/WCAG22/Understanding/redundant-entry.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              3.3.7 Redundant Entry
            </Link>,
            "Aims to minimize the need for users to input the same information multiple times. Improves efficiency.",
          ],
          [
            "AA",
            <Link
              key="3.2.4"
              href="https://www.w3.org/WAI/WCAG22/Understanding/consistent-identification.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              3.2.4 Consistent Identification
            </Link>,
            "Components that have the same functionality should be identified consistently. Helps users understand how to interact with components.",
          ],
          [
            "AA",
            <Link
              key="4.1.3"
              href="https://www.w3.org/WAI/WCAG22/Understanding/status-messages.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              4.1.3 Status Messages
            </Link>,
            "Status messages should be programmatically identifiable. Ensures that users are aware of changes without relying on visual cues.",
          ],
        ]}
      />
    </div>
  );
};

export default LowestPriority;
