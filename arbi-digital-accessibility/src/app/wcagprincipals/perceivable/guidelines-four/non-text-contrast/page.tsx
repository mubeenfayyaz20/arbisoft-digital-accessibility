import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import ImageWithCaption from "@/app/components/ImageWithCaption";
import GoBackButton from "@/app/components/BackButton";
import PageScrollTop from "@/app/components/PageScrollTop";

export const metadata: Metadata = {
  title: "Guideline - Non-text Contrast | Arbi Digital Accessibility",
  description:
    "Ensure essential visual elements have a contrast ratio of at least 3:1 against adjacent colors to comply with WCAG 1.4.11.",
};

export default function Page() {
  return (
    <>
      <PageScrollTop />

      <div className="text-center">
        <div className="text-start absolute">
          <GoBackButton />
        </div>
        <h1 className="text-center dark-color largeHeading">Non-text Contrast</h1>
      </div>

      <h2 className="sub-title">Who Benefits</h2>
      <ul className="importantNote unListType plainText">
        <li>Users with low vision who rely on visual cues to understand interface elements.</li>
        <li>Users in bright environments (e.g., sunlight) needing sufficient contrast.</li>
        <li>Users with cognitive impairments relying on color differences to identify actions.</li>
      </ul>

      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`button {
  background-color: #004080;
  color: white;
  border: 2px solid transparent;
}

button:hover,
button:focus {
  background-color: #0059b3;
  outline: 3px solid #ffcc00;
}`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="css"
        label="Accessible Button States (Good Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Hover and focus states use strong visual contrast.</li>
            <li>Meets 3:1 contrast ratio requirement for UI components.</li>
            <li>Used on buttons across forms, modals, and toolbars.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Incorrect Example</h2>
      <CodeSnippet
        code={`button {
  background-color: #e0e0e0;
  color: black;
  border: none;
}

button:hover,
button:focus {
  background-color: #f0f0f0;
  outline: none;
}`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="css"
        label="Low Contrast Button (Bad Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Button hover/focus state is barely distinguishable.</li>
            <li>Fails to meet minimum contrast requirements (3:1).</li>
            <li>Common issue on minimalist and light-themed designs.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`a {
  color: #0645AD;
  text-decoration: underline;
}

a:hover,
a:focus {
  background-color: #e6f2ff;
  outline: 2px solid #0645AD;
}`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="css"
        label="Accessible Link Styling (Good Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Link has a visible focus/hover indication.</li>
            <li>Provides visual affordance using underline and contrast.</li>
            <li>Works for keyboard and mouse users.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Incorrect Example</h2>
      <CodeSnippet
        code={`a {
  color: #888;
  text-decoration: none;
}

a:hover,
a:focus {
  color: #aaa;
}`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="css"
        label="Low Contrast Link (Bad Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Insufficient contrast on hover and focus states.</li>
            <li>No clear visual distinction for active states.</li>
            <li>Hard to identify link interactions, especially for low-vision users.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`input:focus {
  border: 2px solid #000;
  box-shadow: 0 0 0 2px #ffcc00;
}`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="css"
        label="Accessible Input Focus (Good Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Input gets a strong visible focus indicator.</li>
            <li>Used in login forms, contact fields, etc.</li>
            <li>Helps users navigate forms with keyboard.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Incorrect Example</h2>
      <CodeSnippet
        code={`input:focus {
  outline: none;
  border: 1px solid #ccc;
}`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="css"
        label="No Visual Focus (Bad Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Focus state nearly invisible due to low contrast.</li>
            <li>Creates usability issue for keyboard-only users.</li>
            <li>Very common in modern minimalist UIs.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`.checkbox:focus-visible {
  outline: 2px solid #000;
  background-color: #e6f2ff;
}`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="css"
        label="Checkbox Focus (Good Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Clearly visible when focused using keyboard.</li>
            <li>Ensures contrast is distinguishable from background.</li>
            <li>Works well for surveys and filter forms.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Incorrect Example</h2>
      <CodeSnippet
        code={`.checkbox:focus {
  outline: none;
}`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="css"
        label="Checkbox Without Focus (Bad Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Checkbox receives no visible indicator.</li>
            <li>Fails accessibility for keyboard users.</li>
            <li>Found in custom checkbox UIs and theme builders.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`.toggle {
  background-color: #ccc;
  border: none;
}

.toggle:focus-visible {
  outline: 3px solid #000;
  background-color: #333;
}`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="css"
        label="Toggle Switch Focus (Good Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Clearly visible focus state for toggles/switches.</li>
            <li>Meets contrast requirements for focus outline.</li>
            <li>Important for settings toggles on mobile and dashboards.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Incorrect Example</h2>
      <CodeSnippet
        code={`.toggle:focus {
  outline: none;
}`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="css"
        label="No Focus on Toggle (Bad Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Provides no indication of toggle selection or focus.</li>
            <li>Prevents users from navigating via keyboard.</li>
            <li>Common in custom styled settings toggles.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Why This Matters</h2>
      <ul className="importantNote unListType margin-0">
        <li>Non-text UI components must have at least 3:1 contrast ratio with adjacent colors when interactive.</li>
        <li>Focus and hover indicators help users know what element is currently active or being interacted with.</li>
        <li>Improves usability and navigation for keyboard-only and low-vision users.</li>
        <li>Essential for compliance with WCAG 1.4.11 and user-centered design.</li>
      </ul>

    <ImageWithCaption
        src="/non-text-contrast.png"
        alt="Non-text contrast example showing good and bad practices"
        caption="Non-text contrast example showing fails and pass ratios"
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
