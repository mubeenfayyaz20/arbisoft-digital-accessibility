import Link from "next/link";
import React from "react";
import AccessibleTable from "../Table";
import styles from "../../styles/components/Table.module.scss";

const MediumPriority = () => {
  return (
    <div className={styles.threeColTableWrapper}>
      <div className="text-center">
        <h1 className="text-center largeHeading ">Medium Priority</h1>
      </div>
      <AccessibleTable
        caption="Medium Priority: Full List of Level A, AA, and Requirements"
        headers={["Level", "Website", "Description"]}
        rows={[
          [
            "AA",
            <Link
              key="1.2.5"
              href="https://www.w3.org/WAI/WCAG22/Understanding/audio-description-prerecorded.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              1.2.5 Audio Description (Prerecorded)
            </Link>,
            "Provide verbal descriptions of visual elements in prerecorded content. Important for users with visual impairments.",
          ],
          [
            "A",
            <Link
              key="1.4.2"
              href="https://www.w3.org/WAI/WCAG22/Understanding/audio-control.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              1.4.2 Audio Control
            </Link>,
            "Users must be able to control audio playback. Prevents interference for users relying on assistive technologies.",
          ],
          [
            "AA",
            <Link
              key="3.2.3"
              href="https://www.w3.org/WAI/WCAG22/Understanding/consistent-navigation.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              3.2.3 Consistent Navigation
            </Link>,
            "Navigation mechanisms should be consistent across pages. Helps users understand and predict navigation.",
          ],
          [
            "AA",
            <Link
              key="1.4.12"
              href="https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              1.4.12 Text Spacing
            </Link>,
            "Users should be able to adjust text spacing without losing content or functionality. Improves readability.",
          ],
          [
            "AA",
            <Link
              key="1.3.5"
              href="https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              1.3.5 Identify Input Purpose
            </Link>,
            "The purpose of each input field must be programmatically determined. Essential for assistive technology users.",
          ],
          [
            "AA",
            <Link
              key="1.4.10"
              href="https://www.w3.org/WAI/WCAG22/Understanding/reflow.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              1.4.10 Reflow
            </Link>,
            "Content must be displayed without losing information or functionality and should not require scrolling in two dimensions. Important for mobile users.",
          ],
          [
            "A",
            <Link
              key="2.5.3"
              href="https://www.w3.org/WAI/WCAG22/Understanding/label-in-name.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              2.5.3 Label in Name
            </Link>,
            "The visible label of a user interface component must be programmatically associated with its name. Enables voice input functionality.",
          ],
          [
            "A",
            <Link
              key="1.2.1"
              href="https://www.w3.org/WAI/WCAG22/Understanding/audio-only-and-video-only-prerecorded.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              1.2.1 Audio-only and Video-only (Prerecorded)
            </Link>,
            "Provide content in formats that can be easily consumed without visual or auditory elements. Helps users who cannot access audio or video content.",
          ],
        ]}
      />
    </div>
  );
};

export default MediumPriority;
