import React from "react";
import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import PageScrollTop from "@/app/components/PageScrollTop";

export const metadata: Metadata = {
  title: "Page Title | Arbi Digital Accessibility",
  description:
    "Learn what a page title is, why it's important for accessibility, and see good and bad real-world examples. Covers WCAG compliance, SEO, and best practices for writing effective, descriptive page titles.",
};

const page = () => {
  return (
    <>
      <PageScrollTop />
      <div className="text-center">
        <h1 className="text-center dark-color largeHeading">What is a Page Title?</h1>
      </div>

      <p className="plainText">
        A <strong>page title</strong> is the text that appears in the browser tab and search engine results, set in the <code>&lt;title&gt;</code> element in the HTML <code>&lt;head&gt;</code>. It should clearly describe the page’s purpose or content. 
      </p>

      <h2 className="sub-title">Why is a Page Title Important?</h2>
      <ul className="importantNote unListType plainText">
        <li>
          Helps users understand where they are — especially important for screen reader navigation.
        </li>
        <li>
          Appears in search engine results and impacts SEO.
        </li>
        <li>
          Displays in bookmarks, tabs, and browser history for quick identification.
        </li>
        <li>
          Required for WCAG 2.4.2 — “Page Titled.”
        </li>
        <li>
          Aids users with cognitive disabilities in orienting themselves on a site.
        </li>
      </ul>

      <div className="grid lg:grid-cols-1 lg:grid-cols-2 gap-8">
        {/* GOOD EXAMPLE – Descriptive Page Title */}
        <CodeSnippet
          code={`<title>Contact Us - Arbi Digital Accessibility</title>`}
          preview={<div style={{ border: "1px solid #ccc", padding: "8px" }}>
            <strong>Browser Tab:</strong> Contact Us - Arbi Digital Accessibility
          </div>}
          language="html"
          label="Good Example – Descriptive Page Title"
          captionHeading="Why it's good:"
          captionColor="green"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>Clearly describes what the page is about.</li>
              <li>Includes brand name for recognition.</li>
              <li>Helps users and search engines understand the page’s purpose.</li>
            </ul>
          }
        />

        {/* BAD EXAMPLE – Generic Page Title */}
        <CodeSnippet
          code={`<title>Home</title>`}
          preview={<div style={{ border: "1px solid #ccc", padding: "8px" }}>
            <strong>Browser Tab:</strong> Home
          </div>}
          language="html"
          label="Bad Example – Generic Page Title"
          showCopyButton={false}
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>Too vague — doesn’t describe what makes the page unique.</li>
              <li>Unhelpful for users navigating multiple tabs or bookmarks.</li>
              <li>Hurts SEO because search engines can’t tell what the page is about.</li>
            </ul>
          }
        />

        {/* GOOD EXAMPLE – Dynamic Title per Page */}
        <CodeSnippet
          code={`<title>Products - Summer Collection | Arbi Fashion</title>`}
          preview={<div style={{ border: "1px solid #ccc", padding: "8px" }}>
            <strong>Browser Tab:</strong> Products - Summer Collection | Arbi Fashion
          </div>}
          language="html"
          label="Good Example – Dynamic, Contextual Title"
          captionHeading="Why it's good:"
          captionColor="green"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>Tailored to the specific page content (Summer Collection).</li>
              <li>Gives both content context and brand visibility.</li>
              <li>Improves SEO by including relevant keywords naturally.</li>
            </ul>
          }
        />

        {/* BAD EXAMPLE – Keyword Stuffing */}
        <CodeSnippet
          code={`<title>Buy Shoes, Best Shoes, Cheap Shoes, Shoes Online, Shoes Store</title>`}
          preview={<div style={{ border: "1px solid #ccc", padding: "8px" }}>
            <strong>Browser Tab:</strong> Buy Shoes, Best Shoes, Cheap Shoes, Shoes Online, Shoes Store
          </div>}
          language="html"
          label="Bad Example – Keyword Stuffing"
          showCopyButton={false}
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>Hard to read and sounds spammy.</li>
              <li>Prioritizes SEO tricks over real usability.</li>
              <li>May be penalized by search engines for keyword stuffing.</li>
            </ul>
          }
        />
      </div>
    </>
  );
};

export default page;
