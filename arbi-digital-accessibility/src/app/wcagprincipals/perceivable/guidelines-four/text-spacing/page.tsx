import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import ImageWithCaption from "@/app/components/ImageWithCaption";
import GoBackButton from "@/app/components/BackButton";
import PageScrollTop from "@/app/components/PageScrollTop";

export const metadata: Metadata = {
  title: "Guideline - Text Spacing | Arbi Digital Accessibility",
  description:
    "Ensure text spacing can be adjusted without loss of content or functionality to comply with WCAG 1.4.12.",
};

export default function Page() {
  return (
    <>
      <PageScrollTop />

      <div className="text-center">
        <div className="text-start md:relative lg:absolute">
          <GoBackButton />
        </div>
        <h1 className="text-center dark-color largeHeading">Text Spacing</h1>
      </div>

      <h2 className="sub-title">Who Benefits</h2>
      <ul className="importantNote unListType plainText">
        <li>People with dyslexia or other cognitive disabilities.</li>
        <li>Low vision users who override default styles to improve readability.</li>
        <li>Anyone who uses custom user stylesheets for accessibility.</li>
      </ul>

      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`.readable-text {
  line-height: 1.5;
  letter-spacing: 0.12em;
  word-spacing: 0.16em;
  margin-bottom: 1em;
}`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="css"
        label="Accessible Paragraph Text (Good Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Provides enough spacing to improve readability.</li>
            <li>Complies with WCAG 1.4.12 minimum spacing recommendations.</li>
            <li>Works well with browser or user stylesheet overrides.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Incorrect Example</h2>
      <CodeSnippet
        code={`.tight-text {
  line-height: 1;
  letter-spacing: -0.02em;
  word-spacing: 0;
}`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="css"
        label="Overly Tight Text (Bad Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Text appears crowded and hard to scan or read.</li>
            <li>Violates minimum spacing requirements.</li>
            <li>Common issue in mobile cards or navigation bars.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`.button {
  padding: 0.75rem 1.5rem;
  line-height: 1.4;
  letter-spacing: 0.1em;
}`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="css"
        label="Accessible Button Label (Good Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Button text is spaced out for better touch and readability.</li>
            <li>Common best practice on ecommerce and mobile UIs.</li>
            <li>Supports large hands, motor control, and readability.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Incorrect Example</h2>
      <CodeSnippet
        code={`input[type="text"] {
  padding: 4px;
  font-size: 12px;
  line-height: 1;
}`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="css"
        label="Poor Spacing on Form Field (Bad Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Small font and cramped line-height reduces readability.</li>
            <li>Hard to focus on, especially for screen magnifier users.</li>
            <li>Common mistake in custom styled forms.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`.toggle-label {
  display: inline-block;
  line-height: 1.6;
  letter-spacing: 0.1em;
}`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="css"
        label="Toggle Label with Accessible Spacing (Good Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Spacing supports readability even when zoomed or enlarged.</li>
            <li>Often used for accessibility toggles or settings.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Why This Matters</h2>
      <ul className="importantNote unListType margin-0">
        <li>Improves legibility and comprehension for users with reading or vision difficulties.</li>
        <li>Supports user-defined overrides without breaking layout or clipping text.</li>
        <li>Helps meet WCAG 1.4.12 requirements for text spacing.</li>
      </ul>


      <ImageWithCaption
        src="/text-spacing.png"
        alt="Text with proper spacing for readability accessible or not  accessible"
        caption="Proper text spacing enhances readability and supports user overrides."
        width={600}
        height={350}
      />
`

      <div className="text-start margin-top-20">
        <GoBackButton />
      </div>
    </>
  );
}
