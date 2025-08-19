import React from "react";
import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import PageScrollTop from "@/app/components/PageScrollTop";

export const metadata: Metadata = {
  title: "Language of Page | Arbi Digital Accessibility",
  description:
    "Learn what the 'language of page' is in HTML, why setting the correct language matters for accessibility, and how it affects screen readers, SEO, and multilingual users. Includes WCAG 3.1.1 compliance details with good and bad real-world examples.",
};

const page = () => {
  return (
    <>
      <PageScrollTop />
      <div className="text-center">
        <h1 className="text-center dark-color largeHeading">
          What is Language of Page?
        </h1>
      </div>

      <p className="plainText">
        The <strong>language of page</strong> is defined by the{" "}
        <code>lang</code> attribute in the HTML <code>&lt;html&gt;</code>{" "}
        element. It tells browsers and assistive technologies (like screen
        readers) what language the content is in.
      </p>

      <h2 className="sub-title">Why is Language of Page Important?</h2>
      <ul className="importantNote unListType plainText">
        <li>
          Screen readers use the declared language to choose the correct voice
          and pronunciation.
        </li>
        <li>
          Helps translation tools and search engines understand content
          correctly.
        </li>
        <li>
          Ensures consistent user experience across multilingual websites.
        </li>
        <li>Required for WCAG 3.1.1 — “Language of Page.”</li>
        <li>
          Critical for users who rely on text-to-speech software or braille
          displays.
        </li>
      </ul>

      <div className="grid grid-cols-2 gap-8">
        {/* GOOD EXAMPLE – Correct Language Declared */}
        <CodeSnippet
          code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>About Us | Arbi Digital Accessibility</title>
</head>
<body>
  <h1>About Our Company</h1>
  <p>We make the web accessible for everyone.</p>
</body>
</html>`}
          preview={
            <div style={{ border: "1px solid #ccc", padding: "8px" }}>
              Screen readers correctly use <strong>English voice</strong>.
            </div>
          }
          language="html"
          label="Good Example – Correct Language Declared"
          captionHeading="Why it's good:"
          captionColor="green"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>
                Uses <code>lang=&quot;en&quot;</code> to declare English for the whole
                page.
              </li>
              <li>
                Screen readers pronounce words correctly with the right accent.
              </li>
              <li>Complies with WCAG 3.1.1.</li>
            </ul>
          }
        />

        {/* BAD EXAMPLE – No Language Declared */}
        <CodeSnippet
          code={`<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>About Us</title>
</head>
<body>
  <h1>About Our Company</h1>
  <p>We make the web accessible for everyone.</p>
</body>
</html>`}
          preview={
            <div style={{ border: "1px solid #ccc", padding: "8px" }}>
              Screen reader may default to <strong>system language</strong>,
              causing mispronunciation.
            </div>
          }
          language="html"
          label="Bad Example – No Language Declared"
          showCopyButton={false}
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>
                Screen readers may guess or default to a wrong language (e.g.,
                French accent for English text).
              </li>
              <li>Confusing for users who depend on correct pronunciation.</li>
              <li>Fails WCAG 3.1.1 requirement.</li>
            </ul>
          }
        />

        {/* GOOD EXAMPLE – Multilingual Page with Sub-language */}
        <CodeSnippet
          code={`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Company Profile</title>
</head>
<body>
  <h1>Our Mission</h1>
  <p>We provide global accessibility solutions.</p>
  <p>
    <span lang="es">Accesibilidad para todos.</span>
  </p>
</body>
</html>`}
          preview={
            <div style={{ border: "1px solid #ccc", padding: "8px" }}>
              English page with a <strong>Spanish phrase</strong> read in
              correct Spanish voice.
            </div>
          }
          language="html"
          label="Good Example – Multilingual Page with Correct Sub-language"
          captionHeading="Why it's good:"
          captionColor="green"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>
                Declares <code>lang=&quot;en&quot;</code> for the main page and{" "}
                <code>lang=&quot;es&quot;</code> for the Spanish phrase.
              </li>
              <li>Screen reader switches voices automatically.</li>
              <li>Supports multilingual audiences correctly.</li>
            </ul>
          }
        />

        {/* BAD EXAMPLE – Wrong Language Declared */}
        <CodeSnippet
          code={`<!DOCTYPE html>
<html lang="fr">
<head>
  <meta charset="UTF-8">
  <title>About Us</title>
</head>
<body>
  <h1>About Our Company</h1>
  <p>We make the web accessible for everyone.</p>
</body>
</html>`}
          preview={
            <div style={{ border: "1px solid #ccc", padding: "8px" }}>
              Declared as <strong>French</strong>, but content is in English.
              Screen reader mispronounces text.
            </div>
          }
          language="html"
          label="Bad Example – Wrong Language Declared"
          showCopyButton={false}
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>Screen readers use the wrong accent, confusing users.</li>
              <li>
                Fails WCAG because the declared language doesn’t match the
                content.
              </li>
              <li>Hurts comprehension for multilingual users.</li>
            </ul>
          }
        />
      </div>
    </>
  );
};

export default page;
