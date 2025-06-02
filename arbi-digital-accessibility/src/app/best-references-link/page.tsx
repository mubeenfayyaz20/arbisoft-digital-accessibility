import React from "react";
import { Metadata } from "next";
import AccessibleTable from "../components/Table";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Best Reference Links | Arbi Digital Accessibility",
  description: "Best Reference Links for all user developer and designer where they can easily learn about accessibility"
};
const BestReferencesLink = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-center largeHeading ">Best Reference Links</h1>
      </div>
      <AccessibleTable
        caption="Useful Links for All Developer && Designer "
        headers={["Website Name", "Website Link", "Description"]}
        rows={[
          [
            "Magentaa11y",
            <Link
            key={"magentaa11y"}
              href="https://www.magentaa11y.com/web/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Visit Magentaa11y
            </Link>,
            "Helps users pause, stop, or hide moving content. Great for cognitive or visual impairments.",
          ],
          [
            "W3C WAI",
            <Link
            key={"w3cwai"}
              href="https://www.w3.org/WAI/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline hover:text-blue-800"
            >
              Visit W3C WAI
            </Link>,
            "Official accessibility standards and guidelines by the W3C.",
          ],
        ]}
      />
    </>
  );
};

export default BestReferencesLink;
