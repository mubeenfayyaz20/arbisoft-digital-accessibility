import Link from "next/link";
import React from "react";
import AccessibleTable from "../Table";
import styles from "../../styles/components/Table.module.scss";

const LowPriority = () => {
  return (
    <div className={styles.threeColTableWrapper}>
      <div className="text-center">
        <h1 className="text-center largeHeading ">Low Priority</h1>
      </div>

      <AccessibleTable
         caption="Low Priority: Full List of Level A, AA, and Requirements"
        headers={["Level", "Website", "Description"]}
        rows={[
          [
            "A",
            <Link
              key="2.2.2"
              href="https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              2.2.2 Pause Stop Hide
            </Link>,
            "Users must have the option to pause, stop, or hide moving content that starts automatically. Important for users with cognitive or visual impairments.",
          ],
          [
            "AA",
            <Link
              key="1.2.4"
              href="https://www.w3.org/WAI/WCAG22/Understanding/captions-live.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              1.2.4 Captions (Live)
            </Link>,
            "Captions must be provided for live audio content. Important for real-time accessibility but less common.",
          ],
          [
            "AA",
            <Link
              key="2.5.7"
              href="https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              2.5.7 Dragging Movements
            </Link>,
            "Ensure that draggable elements can also be activated using alternative methods. Important for accessibility.",
          ],
          [
            "A",
            <Link
              key="2.5.1"
              href="https://www.w3.org/WAI/WCAG22/Understanding/pointer-gestures.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              2.5.1 Pointer Gestures
            </Link>,
            "Users should be able to perform actions using single-pointer gestures with alternatives provided for those who cannot use complex gestures.",
          ],
          [
            "A",
            <Link
              key="2.5.4"
              href="https://www.w3.org/WAI/WCAG22/Understanding/motion-actuation.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              2.5.4 Motion Actuation
            </Link>,
            "Users should have an alternative way to perform actions that rely on motion gestures. Ensures accessibility for those who cannot use such gestures.",
          ],
          [
            "A",
            <Link
              key="2.5.2"
              href="https://www.w3.org/WAI/WCAG22/Understanding/pointer-cancellation.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              2.5.2 Pointer Cancellation
            </Link>,
            "Actions triggered by pointer gestures must have a way to cancel or undo the action. Enhances user control.",
          ],
          [
            "AA",
            <Link
              key="2.4.5"
              href="https://www.w3.org/WAI/WCAG22/Understanding/multiple-ways.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              2.4.5 Multiple Ways
            </Link>,
            "More than one way should be available to locate a Web page. Enhances navigation.",
          ],
        ]}
      />
    </div>
  );
};

export default LowPriority;
