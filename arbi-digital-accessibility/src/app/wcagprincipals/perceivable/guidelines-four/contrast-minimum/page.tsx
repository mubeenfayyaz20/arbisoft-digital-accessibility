import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import ImageWithCaption from "@/app/components/ImageWithCaption";
import GoBackButton from "@/app/components/BackButton";
import PageScrollTop from "@/app/components/PageScrollTop";

export const metadata: Metadata = {
  title: "Contrast (Minimum) | Arbi Digital Accessibility",
  description:
    "Ensure text and interactive elements meet minimum contrast ratios for readability, especially for users with low vision.",
};

export default function Page() {
  return (
    <>
      <PageScrollTop />

      <div className="text-center">
        <div className="text-start absolute">
          <GoBackButton />
        </div>
        <h1 className="text-center dark-color largeHeading">Contrast (Minimum)</h1>
      </div>

      <h2 className="sub-title">Who Benefits</h2>
      <ul className="importantNote unListType plainText">
        <li>Users with low vision who need stronger contrast to read text clearly.</li>
        <li>Users in bright environments or glare-heavy screens (e.g., sunlight).</li>
        <li>Older users whose vision degrades with age.</li>
        <li>Users with color vision deficiencies who rely on tonal differences.</li>
      </ul>

      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`<button style={{ backgroundColor: '#000', color: '#fff' }}>Submit</button>`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="High Contrast Button (Good Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Meets 4.5:1 contrast ratio for normal text.</li>
            <li>Highly legible under various lighting conditions.</li>
            <li>Good for buttons and calls to action on real sites.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Incorrect Example</h2>
      <CodeSnippet
        code={`<button style={{ backgroundColor: '#f9f9f9', color: '#ccc' }}>Submit</button>`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="html"
        label="Low Contrast Button (Bad Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Fails the minimum 4.5:1 contrast ratio.</li>
            <li>Difficult to read for many users, especially in bright light.</li>
            <li>Common issue with placeholder-style buttons or modern UI trends.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`<p style={{ color: '#333', backgroundColor: '#fff' }}>This is a readable paragraph.</p>`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="Readable Paragraph Text (Good Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Meets the contrast ratio for body text.</li>
            <li>Used often in content-heavy websites, blogs, and news sites.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Incorrect Example</h2>
      <CodeSnippet
        code={`<p style={{ color: '#999', backgroundColor: '#fff' }}>This is a hard-to-read paragraph.</p>`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="html"
        label="Low Contrast Text (Bad Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Text appears faded or gray on white background.</li>
            <li>Common in placeholder text or modern minimalist themes.</li>
            <li>Causes eyestrain and poor readability.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Why This Matters</h2>
      <ul className="importantNote unListType margin-0">
        <li>
          Poor contrast makes it hard or impossible for users with vision
          impairments to read content.
        </li>
        <li>
          WCAG requires a contrast ratio of at least 4.5:1 for normal text and
          3:1 for large text.
        </li>
        <li>
          It's critical in forms, navigation, buttons, and instructional text.
        </li>
        <li>Improves readability for all users, especially mobile users.</li>
      </ul>

      <ImageWithCaption
        src="/contrast-minimum.png"
        alt="Example showing poor contrast between light gray text and white background"
        caption="Low contrast text causes readability issues, especially in sunlight or for users with low vision."
        width={600}
        height={350}
      />

      <div className="text-start">
        <GoBackButton />
      </div>
    </>
  );
}