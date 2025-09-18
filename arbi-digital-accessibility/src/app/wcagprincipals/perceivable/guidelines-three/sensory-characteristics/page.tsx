import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import ImageWithCaption from "@/app/components/ImageWithCaption";
import GoBackButton from "@/app/components/BackButton";
import PageScrollTop from "@/app/components/PageScrollTop";

export const metadata: Metadata = {
  title: "Sensory Characteristics | Arbi Digital Accessibility",
  description:
    "Avoid using only sensory cues like shape, color, or position in instructions. Includes accessible and inaccessible examples. WCAG 1.3.3 compliant.",
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
          Sensory Characteristics
        </h1>
      </div>

      <h2 className="sub-title">Who Benefits</h2>
      <ul className="importantNote unListType plainText">
        <li>People who are blind or have low vision.</li>
        <li>Colorblind users or users with cognitive disabilities.</li>
        <li>Screen reader users who rely on textual context.</li>
        <li>Complies with WCAG 1.3.3 – Sensory Characteristics.</li>
      </ul>

      {/* GOOD EXAMPLE */}
      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`<p>Click the green <strong>Submit</strong> button to continue.</p>`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="Accessible Instruction with Text and Visual Cue"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Uses both color (green) and text label (Submit) for clarity.</li>
            <li>Does not rely only on color or shape to convey meaning.</li>
            <li>Screen reader users hear meaningful instructions.</li>
          </ul>
        }
      />

      {/* BAD EXAMPLE */}
      <h2 className="sub-title">Incorrect Example</h2>
      <CodeSnippet
        code={`<p>Click the green button to continue.</p>`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="html"
        label="Instruction Relies Only on Color"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Relies only on the color green to indicate the button.</li>
            <li>Not accessible for screen reader or colorblind users.</li>
            <li>Fails WCAG 1.3.3 – instruction uses only sensory characteristics.</li>
          </ul>
        }
      />

      {/* GOOD EXAMPLE 2 */}
      <h2 className="sub-title">Correct Example – Form Instruction</h2>
      <CodeSnippet
        code={`<p>Required fields are marked with an asterisk (*).</p>`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="Clear Form Instruction Without Only Relying on Symbol"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Uses text to explain what the asterisk means.</li>
            <li>Symbol alone would not be sufficient for screen readers.</li>
            <li>Clarifies the meaning for all users, including those using assistive tech.</li>
          </ul>
        }
      />

      {/* BAD EXAMPLE 2 */}
      <h2 className="sub-title">Incorrect Example – Icon Without Context</h2>
      <CodeSnippet
        code={`<p>Fill out all fields marked with *</p>`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="html"
        label="Sensory Cue Without Textual Explanation"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Uses only a symbol (*) without explaining it.</li>
            <li>Screen reader users may not understand what it means.</li>
            <li>Lacks clarity and creates a barrier for some users.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Why This Matters</h2>
      <ul className="importantNote unListType margin-0">
        <li>Instructions should be clear to all users regardless of sensory ability.</li>
        <li>Screen reader users need explicit text instructions.</li>
        <li>Color, shape, and position alone are not enough.</li>
        <li>Meets WCAG 1.3.3 by avoiding exclusive sensory references.</li>
      </ul>

      <ImageWithCaption
        src="/sensory-characteristics.png"
        alt="VoiceOver ignores green color cue, reads only 'Click the green button to continue.'"
        caption="Bad Example – VoiceOver user cannot identify which button is green."
        width={600}
        height={350}
      />

      <div className="text-start">
        <GoBackButton />
      </div>
    </>
  );
}