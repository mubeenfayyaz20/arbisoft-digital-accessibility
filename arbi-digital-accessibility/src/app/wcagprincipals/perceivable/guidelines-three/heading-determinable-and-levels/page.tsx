import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import ImageWithCaption from "@/app/components/ImageWithCaption";
import GoBackButton from "@/app/components/BackButton";
import PageScrollTop from "@/app/components/PageScrollTop";

export const metadata: Metadata = {
  title:
    "1.3.1 Guideline - Heading Determinable and Levels | Arbi Digital Accessibility",
  description:
    "Ensure that all headings are programmatically determinable and follow a proper hierarchy using semantic HTML heading tags to comply with WCAG 1.3.1.",
};

export default function Page() {
  return (
    <>
      <PageScrollTop />

      <div className="text-center">
        <div className="text-start md:relative lg:absolute">
          <GoBackButton />
        </div>
        <h1 className="text-center dark-color largeHeading">
          Heading Determinable and Levels
        </h1>
      </div>

      <h2 className="sub-title">Who Benefits</h2>
      <ul className="importantNote unListType plainText">
        <li>
          Screen reader users who rely on heading navigation (e.g., VoiceOver,
          JAWS).
        </li>
        <li>
          Users with cognitive disabilities who benefit from a clear content
          structure.
        </li>
        <li>
          Keyboard-only users who navigate quickly through sections using
          headings.
        </li>
        <li>
          Developers and content editors, as headings improve content
          readability and maintenance.
        </li>
      </ul>

      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`<h1>Main Page Title</h1>
<h2>Section Title</h2>
<h3>Subsection Title</h3>
<p>This paragraph explains the subsection in more detail.</p>`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="Proper Heading Hierarchy (Good Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>
              Uses semantic heading tags (<code>h1</code> to <code>h3</code>).
            </li>
            <li>
              Clearly communicates structure to screen readers and assistive
              tech.
            </li>
            <li>
              Supports keyboard and VoiceOver heading navigation (e.g., Rotor in
              macOS).
            </li>
            <li>
              Follows a logical, nested hierarchy without skipping levels.
            </li>
          </ul>
        }
      />

      <h2 className="sub-title">Incorrect Example</h2>
      <CodeSnippet
        code={`<div class="main-title">Main Page Title</div>
<span class="section-heading">Section Title</span>
<strong>Subsection Title</strong>
<p>This paragraph explains the subsection in more detail.</p>`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="html"
        label="Non-Semantic Headings (Bad Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Visually styled text without semantic heading tags.</li>
            <li>Screen readers will not recognize these as headings.</li>
            <li>
              No support for heading navigation (e.g., skipping through{" "}
              <code>H</code> key).
            </li>
            <li>
              Fails WCAG 1.3.1 compliance for programmatic determinability.
            </li>
          </ul>
        }
      />

      <h2 className="sub-title">Why This Matters</h2>
      <ul className="importantNote unListType margin-0">
        <li>
          Supports screen reader users by enabling heading-based navigation.
        </li>
        <li>Ensures logical reading order and structural clarity.</li>
        <li>
          Required for WCAG 1.3.1 compliance: Info and relationships must be
          conveyed in code.
        </li>
        <li>Improves SEO, accessibility, and user experience.</li>
      </ul>

      <ImageWithCaption
        src="/heading-level.png"
        alt="A VoiceOver rotor showing headings in logical order"
        caption="Screen reader users can quickly jump between sections using semantic headings"
        width={600}
        height={350}
      />

      <div className="text-start">
        <GoBackButton />
      </div>
    </>
  );
}
