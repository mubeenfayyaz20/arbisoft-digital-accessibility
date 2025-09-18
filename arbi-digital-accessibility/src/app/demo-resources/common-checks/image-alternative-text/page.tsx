import React from "react";
import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import PageScrollTop from "@/app/components/PageScrollTop";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Image Alternative Text? | Arbi Digital Accessibility",
  description:
    "Learn what image alternative text is, why it's important for accessibility, and see good and bad real-world examples. Covers WCAG compliance, screen reader usability, and best practices for writing effective alt text.",
};

const page = () => {
  return (
    <>
      <PageScrollTop />
      <div className="text-center">
        <h1 className="text-center dark-color largeHeading">
          What is Image Alternative Text?
        </h1>
      </div>

      <p className="plainText">
        Image Alternative Text (often called <code>alt</code> text) is a short
        description of an image that can be read by screen readers, displayed
        when the image fails to load, and used by search engines to understand
        image content.
      </p>

      <h2 className="sub-title">Why is Image Alternative Text Important?</h2>
      <ul className="importantNote unListType plainText">
        <li>
          Ensures visually impaired users can understand the purpose of images.
        </li>
        <li>
          Provides important context when images fail to load or are blocked.
        </li>
        <li>
          Improves SEO by helping search engines understand the image content.
        </li>
        <li>
          Required for WCAG compliance (1.1.1 Non-text Content).
        </li>
        <li>
          Helps users relying on assistive technology navigate the web
          effectively.
        </li>
      </ul>

      <div className="grid lg:grid-cols-1 lg:grid-cols-2 gap-8">
        {/* GOOD EXAMPLE - Descriptive Alt Text */}
        <CodeSnippet
          code={`<img src="/red-apple.jpg" alt="Fresh red apple on a wooden table" />`}
          preview={<Image src="/red-apple.jpg" alt="Fresh red apple on a wooden table" width={120} height={120} style={{border: "1px solid #ccc", padding: "4px" }} />}
captionColor="green"
          language="html"
          label="Good Example – Descriptive Alt Text"
          captionHeading="Why it's good:"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>Clearly describes the image for screen reader users.</li>
              <li>
                Provides meaningful context, not just keywords (&quot;apple&quot;).
              </li>
              <li>
                Allows users who cannot see the image to understand its content.
              </li>
            </ul>
          }
        />

        {/* BAD EXAMPLE - Missing Alt Attribute */}
        <CodeSnippet
          code={`<img src="/red-apple.jpg">`}
             preview={<Image src="/red-apple.jpg" alt="" width={120} height={120} style={{border: "1px solid #ccc", padding: "4px" }} />}
          language="html"
          label="Bad Example – Missing Alt Attribute"
          showCopyButton={false}
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>
                Screen readers may announce the file name instead, which is
                often meaningless.
              </li>
              <li>
                Fails WCAG requirement for non-text content (1.1.1).
              </li>
              <li>
                Provides no alternative information if the image fails to load.
              </li>
            </ul>
          }
        />

        {/* GOOD EXAMPLE - Decorative Image */}
        <CodeSnippet
          code={`<img src="/image-placeholder.png" alt="" role="presentation" />`}
           preview={<Image src="/image-placeholder.png"alt="" role="presentation"  width={300} height={300} style={{border: "1px solid #ccc", padding: "4px" }} />}
          language="html"
          captionColor="green"
          label="Good Example – Decorative Image"
          captionHeading="Why it's good:"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>
                Empty <code>alt</code> tells screen readers to skip purely
                decorative images.
              </li>
              <li>
                Avoids unnecessary clutter for users relying on assistive tech.
              </li>
            </ul>
          }
        />

        {/* BAD EXAMPLE - Keyword Stuffing in Alt */}
        <CodeSnippet
          code={`<img src="/red-apple.jpg" alt="apple fruit fresh apple healthy food organic apple red apple" />`}
            preview={<Image src="/image-placeholder.png" alt="apple fruit fresh apple healthy food organic apple red apple" role="presentation"  width={300} height={300} style={{border: "1px solid #ccc", padding: "4px" }} />}
          language="html"
          label="Bad Example – Keyword Stuffing"
          showCopyButton={false}
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>
                Repeating keywords makes alt text hard to understand for
                listeners.
              </li>
              <li>Prioritizes SEO over accessibility.</li>
              <li>
                Good alt text should be concise and relevant to the image’s
                purpose.
              </li>
            </ul>
          }
        />
      </div>
    </>
  );
};

export default page;
