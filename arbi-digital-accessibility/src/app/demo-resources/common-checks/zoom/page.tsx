import React from "react";
import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import PageScrollTop from "@/app/components/PageScrollTop";

export const metadata: Metadata = {
  title: "Zoom Compliance | Arbi Digital Accessibility",
  description:
    "Learn what zoom compliance is, why supporting zoom and text resizing is essential for accessibility, and see good and bad real-world examples. Covers WCAG 1.4.4 compliance, responsive design, and best practices for scalable layouts.",
};

const page = () => {
  return (
    <>
      <PageScrollTop />
      <div className="text-center">
        <h1 className="text-center dark-color largeHeading">What is Zoom?</h1>
      </div>

      <p className="plainText">
        <strong>Zoom compliance</strong> (WCAG 1.4.4 – Resize Text) ensures that
        users can enlarge text content up to <strong>200%</strong> without loss
        of content or functionality. This is critical for people with low
        vision, older users, or anyone reading on smaller screens.
      </p>

      <h2 className="sub-title">Why is Zoom Important?</h2>
      <ul className="importantNote unListType plainText">
        <li>
          Helps users with low vision read content without assistive tools.
        </li>
        <li>
          Ensures content remains usable on smaller screens and high zoom
          levels.
        </li>
        <li>
          Required for WCAG 1.4.4 – “Resize Text” and WCAG 1.4.10 – “Reflow.”
        </li>
        <li>
          Improves mobile responsiveness and overall usability for all users.
        </li>
        <li>
          Prevents text from overlapping, being cut off, or forcing horizontal
          scrolling.
        </li>
      </ul>

      <div className="grid lg:grid-cols-1 lg:grid-cols-2 gap-8">
        {/* GOOD EXAMPLE – Responsive with Relative Units */}
        <CodeSnippet
          code={`body {
  font-size: 1rem; /* relative units */
}

.container {
  max-width: 100%; /* responsive */
  padding: 1em;
}

img {
  max-width: 100%; /* scales correctly */
  height: auto;
}`}
          preview={
            <div
              style={{
                border: "1px solid #ccc",
                padding: "8px",
                maxWidth: "200px",
              }}
            >
              When zoomed to 200%, text and images reflow properly without
              overlapping or cutting off.
            </div>
          }
          language="css"
          label="Good Example – Responsive with Relative Units"
          captionHeading="Why it's good:"
          captionColor="green"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>
                Uses relative units (<code>rem</code>, <code>em</code>) instead
                of fixed <code>px</code>.
              </li>
              <li>Container resizes fluidly with zoom.</li>
              <li>Images scale without breaking layout.</li>
            </ul>
          }
        />

        {/* BAD EXAMPLE – Fixed Pixel Sizes */}
        <CodeSnippet
          code={`body {
  font-size: 14px; /* fixed */
}

.container {
  width: 800px; /* fixed */
}

img {
  width: 400px; /* fixed */
  height: 200px;
}`}
          preview={
            <div
              style={{
                border: "1px solid #ccc",
                padding: "8px",
                maxWidth: "200px",
                overflow: "hidden",
              }}
            >
              At 200% zoom, text becomes clipped and horizontal scrolling is
              required.
            </div>
          }
          language="css"
          label="Bad Example – Fixed Pixel Sizes"
          showCopyButton={false}
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>
                Fixed <code>px</code> units prevent proper resizing.
              </li>
              <li>
                Content breaks or requires horizontal scrolling when zoomed.
              </li>
              <li>Fails WCAG 1.4.4 and 1.4.10 requirements.</li>
            </ul>
          }
        />

        {/* GOOD EXAMPLE – Viewport Meta for Mobile Zoom */}
        <CodeSnippet
          code={`<meta name="viewport" content="width=device-width, initial-scale=1">`}
          preview={
            <div style={{ border: "1px solid #ccc", padding: "8px" }}>
              Users on mobile can pinch-to-zoom and text resizes properly.
            </div>
          }
          language="html"
          label="Good Example – Viewport Supports Zoom"
          captionHeading="Why it's good:"
          captionColor="green"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>Allows scaling and zooming on mobile devices.</li>
              <li>Essential for accessibility and mobile responsiveness.</li>
              <li>Helps users with visual impairments.</li>
            </ul>
          }
        />

        {/* BAD EXAMPLE – Disabling User Zoom */}
        <CodeSnippet
          code={`<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">`}
          preview={
            <div style={{ border: "1px solid #ccc", padding: "8px" }}>
              Users cannot zoom in on mobile. Text stays tiny and unreadable.
            </div>
          }
          language="html"
          label="Bad Example – Zoom Disabled on Mobile"
          showCopyButton={false}
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>Disables pinch-to-zoom, locking users into small text.</li>
              <li>Major accessibility barrier for users with low vision.</li>
              <li>Explicitly fails WCAG 1.4.4 and 1.4.10.</li>
            </ul>
          }
        />

        {/* GOOD EXAMPLE – Responsive Flexible Layout */}
        <CodeSnippet
          code={`.container {
  max-width: 100%; /* adapts to screen size */
  display: flex;
  flex-wrap: wrap; /* allows reflow */
}

.sidebar {
  flex: 1 1 250px; /* flexible */
}

.main-content {
  flex: 2 1 600px; /* flexible */
}`}
          preview={
            <div style={{ border: "1px solid #ccc", padding: "8px" }}>
              At 200% zoom or smaller screens, content reflows vertically
              without horizontal scrolling.
            </div>
          }
          language="css"
          label="Good Example – Responsive Flexible Layout"
          captionHeading="Why it's good:"
          captionColor="green"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>
                Uses <code>flexbox</code> and <code>max-width</code> for fluid,
                responsive layouts.
              </li>
              <li>Content reflows instead of requiring horizontal scroll.</li>
              <li>Meets WCAG 1.4.10 (Reflow) and WCAG 1.4.4 (Zoom).</li>
            </ul>
          }
        />
        {/* BAD EXAMPLE – Layout Locked at 992px */}
        <CodeSnippet
          code={`.container {
  min-width: 992px; /* forces desktop view */
}

.sidebar {
  width: 300px;
  float: left;
}

.main-content {
  width: 600px;
  float: left;
}`}
          preview={
            <div
              style={{
                border: "1px solid #ccc",
                padding: "8px",
                overflowX: "auto",
              }}
            >
              At smaller widths or 200% zoom, horizontal scrolling is required.
              Content does not reflow because the layout is locked at 992px.
            </div>
          }
          language="css"
          label="Bad Example – Layout Locked at 992px"
          showCopyButton={false}
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>
                Uses <code>min-width: 992px</code>, which forces desktop layout
                even on smaller screens or at 200% zoom.
              </li>
              <li>Causes horizontal scrolling and clipped content.</li>
              <li>Fails WCAG 1.4.10 – Reflow.</li>
            </ul>
          }
        />
      </div>
    </>
  );
};

export default page;
