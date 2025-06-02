"use client";

import React from "react";
import styles from "../styles/components/Table.module.scss";

interface TableProps {
  caption: string;
  headers: string[];
  rows: (string | React.ReactNode)[][];
}

const AccessibleTable: React.FC<TableProps> = ({ caption, headers, rows }) => {
  const captionId = caption.toLowerCase().replace(/\s+/g, "-") + "-caption";

  return (
    <div className="overflow-x-auto">
      <table
        className="min-w-full table-auto border border-gray-300"
        aria-labelledby={captionId}
      >
        <caption
          id={captionId}
          className={`${styles.tableCaption} text-left font-semibold mb-2`}
        >
          {caption}
        </caption>
        <thead className="bg-gray-200">
          <tr>
            {headers.map((header, idx) => (
              <th
                key={idx}
                scope="col"
                className={`${styles.tableHeader} px-4 py-2 text-left text-sm font-medium text-gray-700`}
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="even:bg-gray-50 hover:bg-blue-50">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className={`${styles.tableData} px-4 py-2 text-sm text-gray-800`}
                >
                  {typeof cell === "string" ? cell : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccessibleTable;



// Gneric use with clickable if any

{/* <AccessibleTable
  caption="Useful Accessibility Resources"
  headers={["Website Name", "Website Link", "Description"]}
  rows={[
    [
      "Magentaa11y",
      <a
        href="https://www.magentaa11y.com/web/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800"
      >
        Visit Magentaa11y
      </a>,
      "Helps users pause, stop, or hide moving content. Great for cognitive or visual impairments.",
    ],
    [
      "W3C WAI",
      <a
        href="https://www.w3.org/WAI/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 underline hover:text-blue-800"
      >
        Visit W3C WAI
      </a>,
      "Official accessibility standards and guidelines by the W3C.",
    ],
  ]}
/> */}
