import React from "react";
import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import PageScrollTop from "@/app/components/PageScrollTop";

export const metadata: Metadata = {
  title: "Heading Structure | Arbi Digital Accessibility",
  description:
    "Learn what heading structure is, why it's important for accessibility, and see good and bad real-world examples. Covers WCAG compliance, screen reader usability, and best practices for writing logical, hierarchical headings.",
};

const headingStyles = {
  h1: { fontSize: "2rem", fontWeight: "700" },
  h2: { fontSize: "1.5rem", fontWeight: "600" },
  h3: { fontSize: "1.25rem", fontWeight: "500" },
  h4: { fontSize: "1.1rem", fontWeight: "500", color: "#555" },
  h5: { fontSize: "1rem", fontWeight: "500", color: "#666" },
};

const page = () => {
  return (
    <>
      <PageScrollTop />
      <div className="text-center">
        <h1 className="text-center dark-color largeHeading">
          What is Heading Structure?
        </h1>
      </div>

      <p className="plainText">
        <strong>Heading structure</strong> refers to the logical order and hierarchy of headings
        (<code>&lt;h1&gt;</code> through <code>&lt;h6&gt;</code>) on a page. It helps both sighted and
        non-sighted users quickly understand the content organization and navigate efficiently.
      </p>

      <h2 className="sub-title">Why is Heading Structure Important?</h2>
      <ul className="importantNote unListType plainText">
        <li>Allows screen reader users to jump between sections using heading shortcuts.</li>
        <li>Improves SEO by signaling the importance and structure of content to search engines.</li>
        <li>Helps all users scan content quickly and find relevant information.</li>
        <li>Required for WCAG 2.4.6 — “Headings and Labels.”</li>
        <li>Makes large pages more digestible by breaking them into logical sections.</li>
      </ul>

      <div className="grid lg:grid-cols-1 lg:grid-cols-2 gap-8">
        {/* GOOD EXAMPLE – Proper Hierarchy */}
        <CodeSnippet
          code={`<h1>About Our Company</h1>
<h2>Our Mission</h2>
<p>We aim to make the web accessible for everyone.</p>
<h2>Our Team</h2>
<h3>Leadership</h3>
<p>Meet our experienced leaders.</p>`}
          preview={
            <div style={{ border: "1px solid #ccc", padding: "8px" }}>
              <h1 style={headingStyles.h1}>About Our Company</h1>
              <h2 style={headingStyles.h2}>Our Mission</h2>
              <p>We aim to make the web accessible for everyone.</p>
              <h2 style={headingStyles.h2}>Our Team</h2>
              <h3 style={headingStyles.h3}>Leadership</h3>
              <p>Meet our experienced leaders.</p>
            </div>
          }
          language="html"
          label="Good Example – Logical Heading Hierarchy"
          captionHeading="Why it's good:"
          captionColor="green"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>Starts with a single <code>&lt;h1&gt;</code> describing the page’s main topic.</li>
              <li>Uses <code>&lt;h2&gt;</code> for main sections and <code>&lt;h3&gt;</code> for subsections.</li>
              <li>Matches the visual hierarchy with semantic structure.</li>
            </ul>
          }
        />

        {/* BAD EXAMPLE – Skipping Levels */}
        <CodeSnippet
          code={`<h1>About Our Company</h1>
<h4>Our Mission</h4>
<p>We aim to make the web accessible for everyone.</p>
<h2>Our Team</h2>
<h5>Leadership</h5>`}
          preview={
            <div style={{ border: "1px solid #ccc", padding: "8px" }}>
              <h1 style={headingStyles.h1}>About Our Company</h1>
              <h4 style={headingStyles.h4}>Our Mission</h4>
              <p>We aim to make the web accessible for everyone.</p>
              <h2 style={headingStyles.h2}>Our Team</h2>
              <h5 style={headingStyles.h5}>Leadership</h5>
            </div>
          }
          language="html"
          label="Bad Example – Skipping Heading Levels"
          showCopyButton={false}
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>Jumps from <code>&lt;h1&gt;</code> to <code>&lt;h4&gt;</code>, which can confuse assistive tech users.</li>
              <li>Inconsistent hierarchy makes content harder to follow.</li>
              <li>Visually may look fine, but semantically it’s broken.</li>
            </ul>
          }
        />

        {/* GOOD EXAMPLE – Section Headings */}
        <CodeSnippet
          code={`<h1>Accessibility Guidelines</h1>
<section>
  <h2>Text Alternatives</h2>
  <p>Provide alt text for images.</p>
</section>
<section>
  <h2>Keyboard Accessibility</h2>
  <p>All functionality should be available from a keyboard.</p>
</section>`}
          preview={
            <div style={{ border: "1px solid #ccc", padding: "8px" }}>
              <h1 style={headingStyles.h1}>Accessibility Guidelines</h1>
              <h2 style={headingStyles.h2}>Text Alternatives</h2>
              <p>Provide alt text for images.</p>
              <h2 style={headingStyles.h2}>Keyboard Accessibility</h2>
              <p>All functionality should be available from a keyboard.</p>
            </div>
          }
          language="html"
          label="Good Example – Sectioned Headings"
          captionHeading="Why it's good:"
          captionColor="green"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>Groups related content under meaningful section headings.</li>
              <li>Makes navigation faster for screen reader users.</li>
              <li>Each section heading is clear and descriptive.</li>
            </ul>
          }
        />

        {/* BAD EXAMPLE – Using Bold Instead of Headings */}
        <CodeSnippet
          code={`<b>Our Mission</b>
<p>We aim to make the web accessible for everyone.</p>`}
          preview={
            <div style={{ border: "1px solid #ccc", padding: "8px" }}>
              <b>Our Mission</b>
              <p>We aim to make the web accessible for everyone.</p>
            </div>
          }
          language="html"
          label="Bad Example – No Real Headings"
          showCopyButton={false}
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>Bold text is not announced as a heading by screen readers.</li>
              <li>Loses the navigation benefits of semantic headings.</li>
              <li>Hurts both accessibility and SEO.</li>
            </ul>
          }
        />

        {/* GOOD EXAMPLE – Accessible Heading with Label */}
        <CodeSnippet
          code={`<h1 class="text-center largeHeading" aria-label="Free Web Accessibility Testing Tools For Web">
  <span aria-hidden="true" class="flex gap-4 items-center justify-center">
    Free Web Accessibility Testing Tools
    <span class="pills">For Web</span>
  </span>
</h1>`}
          preview={
            <div style={{ border: "1px solid #ccc", padding: "8px" }}>
              <h1
                style={headingStyles.h1}
                className="text-center largeHeading"
                aria-label="Free Web Accessibility Testing Tools For Web"
              >
                <span aria-hidden="true" className="flex gap-4 items-center justify-center">
                  Free Web Accessibility Testing Tools
                  <span className="pills">For Web</span>
                </span>
              </h1>
            </div>
          }
          language="html"
          label="Good Example – Accessible Heading with Label"
          captionHeading="Why it's good:"
          captionColor="green"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>Clear, complete label for assistive tech via <code>aria-label</code>.</li>
              <li>Decorative span hidden from screen readers using <code>aria-hidden</code>.</li>
              <li>Maintains semantic heading structure for navigation.</li>
            </ul>
          }
        />

        {/* BAD EXAMPLE – Missing Accessible Label */}
        <CodeSnippet
          code={`<h1 class="text-center largeHeading">
  <span class="flex gap-4 items-center justify-center">
    Free Web Accessibility Testing Tools
    <span class="pills">For Web</span>
  </span>
</h1>`}
          preview={
            <div style={{ border: "1px solid #ccc", padding: "8px" }}>
              <h1 style={headingStyles.h1} className="text-center largeHeading">
                <span className="flex gap-4 items-center justify-center">
                  Free Web Accessibility Testing Tools
                  <span className="pills">For Web</span>
                </span>
              </h1>
            </div>
          }
          language="html"
          label="Bad Example – Missing Accessible Label"
          showCopyButton={false}
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>No <code>aria-label</code>, risking missing or awkwardly read text for screen readers.</li>
              <li>Decorative text may be skipped or misread.</li>
              <li>Not fully descriptive for assistive tech users.</li>
            </ul>
          }
        />
      </div>
    </>
  );
};

export default page;
