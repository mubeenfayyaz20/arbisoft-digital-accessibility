import React from "react";
import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import PageScrollTop from "@/app/components/PageScrollTop";

export const metadata: Metadata = {
  title: "Color Contrast Accessibility | Arbi Digital Accessibility",
  description:
    "Learn what color contrast is, why it's important for accessibility, and see good and bad real-world examples. Covers WCAG compliance, readability, and best practices for designing with sufficient color contrast.",
};

const page = () => {
  return (
    <>
      <PageScrollTop />
      <div className="text-center">
        <h1 className="text-center dark-color largeHeading">
          What is Color Contrast?
        </h1>
      </div>

      <p className="plainText">
        <strong>Color contrast</strong> is the difference in brightness and
        color between text (or any foreground element) and its background.
        Sufficient contrast makes content readable for everyone, especially
        users with low vision, color blindness, or viewing screens in bright
        light.
      </p>

      <h2 className="sub-title">Why is Color Contrast Important?</h2>
      <ul className="importantNote unListType plainText">
        <li>Ensures text is readable for users with visual impairments.</li>
        <li>Improves usability in bright sunlight or low-light conditions.</li>
        <li>
          Meets WCAG 2.1 contrast ratio requirements (4.5:1 for normal text, 3:1
          for large text).
        </li>
        <li>Helps users with color vision deficiencies distinguish content.</li>
        <li>Supports better overall design clarity and professionalism.</li>
      </ul>

      <div className="grid lg:grid-cols-1 lg:grid-cols-2 gap-8">
        {/* GOOD EXAMPLE – High Contrast Text */}
        <CodeSnippet
          code={`<p style="color: #000000; background-color: #FFFFFF;">Black text on white background</p>`}
          preview={
            <div style={{ border: "1px solid #ccc", padding: "8px" }}>
              <p
                style={{
                  color: "#000",
                  backgroundColor: "#fff",
                  padding: "4px",
                }}
              >
                Black text on white background
              </p>
            </div>
          }
          language="html"
          label="Good Example – High Contrast"
          captionHeading="Why it's good:"
          captionColor="green"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>Meets and exceeds WCAG contrast ratio requirements.</li>
              <li>Readable in most lighting conditions.</li>
              <li>Works for users with color blindness.</li>
            </ul>
          }
        />

        {/* BAD EXAMPLE – Low Contrast Text */}
        <CodeSnippet
          code={`<p style="color: #777777; background-color: #FFFFFF;">Gray text on white background</p>`}
          preview={
            <div style={{ border: "1px solid #ccc", padding: "8px" }}>
              <p
                style={{
                  color: "#777",
                  backgroundColor: "#fff",
                  padding: "4px",
                }}
              >
                Gray text on white background
              </p>
            </div>
          }
          language="html"
          label="Bad Example – Low Contrast"
          showCopyButton={false}
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>Fails WCAG requirements for normal text.</li>
              <li>Hard to read for users with low vision.</li>
              <li>Almost invisible in bright light or low-quality screens.</li>
            </ul>
          }
        />

        {/* GOOD EXAMPLE – High Contrast on Buttons */}
        <CodeSnippet
          code={`<button style="background-color: #0055aa; color: #ffffff;">Submit</button>`}
          preview={
            <div style={{ border: "1px solid #ccc", padding: "8px" }}>
              <button
                style={{
                  backgroundColor: "#0055aa",
                  color: "#fff",
                  padding: "8px 12px",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                Submit
              </button>
            </div>
          }
          language="html"
          label="Good Example – Accessible Button Contrast"
          captionHeading="Why it's good:"
          captionColor="green"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>Strong contrast between text and button background.</li>
              <li>Meets WCAG standards for UI components.</li>
              <li>Clearly visible and legible to most users.</li>
            </ul>
          }
        />

        {/* BAD EXAMPLE – Low Contrast on Buttons */}
        <CodeSnippet
          code={`<button style="background-color: #eeeeee; color: #bbbbbb;">Submit</button>`}
          preview={
            <div style={{ border: "1px solid #ccc", padding: "8px" }}>
              <button
                style={{
                  backgroundColor: "#eee",
                  color: "#bbb",
                  padding: "8px 12px",
                  border: "none",
                  borderRadius: "4px",
                }}
              >
                Submit
              </button>
            </div>
          }
          language="html"
          label="Bad Example – Poor Button Contrast"
          showCopyButton={false}
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>Fails WCAG contrast ratio requirements.</li>
              <li>Blends with background and is hard to find.</li>
              <li>Users with low vision may miss it entirely.</li>
            </ul>
          }
        />

        {/* BAD EXAMPLE – Background to Background Contrast */}
        <CodeSnippet
          code={`<div style="background-color: #cccccc; padding: 20px;">
  <div style="background-color: #dddddd; padding: 10px;">Card Content</div>
</div>`}
          preview={
            <div
              style={{
                border: "1px solid #ccc",
                padding: "8px",
                backgroundColor: "#ccc",
              }}
            >
              <div style={{ backgroundColor: "#ddd", padding: "10px" }}>
                Card Content
              </div>
            </div>
          }
          language="html"
          label="Bad Example – Low Background-to-Background Contrast"
          showCopyButton={false}
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>Card and page backgrounds are too similar.</li>
              <li>Hard to distinguish content areas.</li>
              <li>Users with low vision may not see content boundaries.</li>
            </ul>
          }
        />

        {/* GOOD EXAMPLE – Distinct Background-to-Background Contrast */}
        <CodeSnippet
          code={`<div style="background-color: #f0f0f0; padding: 20px;">
  <div style="background-color: #ffffff; padding: 10px;">Card Content</div>
</div>`}
          preview={
            <div
              style={{
                border: "1px solid #ccc",
                padding: "8px",
                backgroundColor: "#f0f0f0",
              }}
            >
              <div style={{ backgroundColor: "#fff", padding: "10px" }}>
                Card Content
              </div>
            </div>
          }
          language="html"
          label="Good Example – Clear Background-to-Background Contrast"
          captionHeading="Why it's good:"
          captionColor="green"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>Clearly separates card content from page background.</li>
              <li>Improves visual clarity and hierarchy.</li>
              <li>
                Meets WCAG non-text contrast requirements for UI elements.
              </li>
            </ul>
          }
        />
        {/* Good Example – Link Contrast */}
        <CodeSnippet
          code={`<p>
  Visit our <a href="#" style="color: #0055aa;">accessibility page</a> for details.
</p>`}
          preview={
            <p>
              Visit our{" "}
              <a href="#" style={{ color: "#0055aa" }}>
                accessibility page
              </a>{" "}
              for details.
            </p>
          }
          language="html"
          label="Good Example – Link with High Contrast"
          captionHeading="Why it's good:"
          captionColor="green"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>
                Link color (#0055aa) has sufficient contrast against white
                background.
              </li>
              <li>Easy to identify as interactive content.</li>
              <li>Supports color-blind users by being visually distinct.</li>
            </ul>
          }
        />

        {/* Bad Example – Link Contrast */}
        <CodeSnippet
          code={`<p>
  Visit our <a href="#" style="color: #cccccc;">accessibility page</a> for details.
</p>`}
          preview={
            <p>
              Visit our{" "}
              <a href="#" style={{ color: "#cccccc" }}>
                accessibility page
              </a>{" "}
              for details.
            </p>
          }
          language="html"
          label="Bad Example – Link with Low Contrast"
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>Link color (#cccccc) blends into background.</li>
              <li>Difficult for users with low vision to see.</li>
              <li>Fails WCAG contrast requirements.</li>
            </ul>
          }
        />
        {/* Good Example – Placeholder Contrast */}
        <CodeSnippet
          code={`<input type="text" placeholder="Search..." 
  style="color: #333; font-size: 16px; padding: 5px;" />`}
          preview={
            <input
              type="text"
              placeholder="Search..."
              style={{ color: "#333", fontSize: "16px", padding: "5px" }}
            />
          }
          language="html"
          label="Good Example – Placeholder with Adequate Contrast"
          captionHeading="Why it's good:"
          captionColor="green"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>Text color (#333) is dark enough to be easily read.</li>
              <li>Improves usability for low-vision users.</li>
              <li>Meets WCAG non-text contrast guidelines.</li>
            </ul>
          }
        />

        {/* Bad Example – Placeholder Contrast */}
        <CodeSnippet
          code={`<input type="text" placeholder="Search..." 
  style="color: #aaa; font-size: 16px; padding: 5px;" />`}
          preview={
            <input
              type="text"
              placeholder="Search..."
              style={{ color: "#aaa", fontSize: "16px", padding: "5px" }}
            />
          }
          language="html"
          label="Bad Example – Placeholder with Poor Contrast"
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>
                Light gray (#aaa) is hard to see against white background.
              </li>
              <li>May be invisible to people with low vision.</li>
              <li>Fails WCAG placeholder text contrast requirements.</li>
            </ul>
          }
        />
        {/* Good Example – Border Contrast */}
        <CodeSnippet
          code={`<button style="border: 2px solid #333; padding: 8px 12px; background: white;">
  Submit
</button>`}
          preview={
            <button
              style={{
                border: "2px solid #333",
                padding: "8px 12px",
                background: "white",
              }}
            >
              Submit
            </button>
          }
          language="html"
          label="Good Example – Border with High Contrast"
          captionHeading="Why it's good:"
          captionColor="green"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>
                Dark border (#333) is clearly visible against white background.
              </li>
              <li>Helps users identify clickable area.</li>
              <li>Supports keyboard and low-vision navigation.</li>
            </ul>
          }
        />

        {/* Bad Example – Border Contrast */}
        <CodeSnippet
          code={`<button style="border: 2px solid #ddd; padding: 8px 12px; background: white;">
  Submit
</button>`}
          preview={
            <button
              style={{
                border: "2px solid #ddd",
                padding: "8px 12px",
                background: "white",
              }}
            >
              Submit
            </button>
          }
          language="html"
          label="Bad Example – Border with Low Contrast"
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>
                Light border (#ddd) is difficult to see against white
                background.
              </li>
              <li>
                Users with visual impairments may miss the button entirely.
              </li>
              <li>Fails WCAG UI component contrast requirements.</li>
            </ul>
          }
        />
      </div>
    </>
  );
};

export default page;
