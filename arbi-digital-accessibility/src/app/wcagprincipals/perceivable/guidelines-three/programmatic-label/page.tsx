import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import ImageWithCaption from "@/app/components/ImageWithCaption";
import GoBackButton from "@/app/components/BackButton";
import PageScrollTop from "@/app/components/PageScrollTop";

export const metadata: Metadata = {
  title: "Programmatic Label Compliance | Arbi Digital Accessibility",
  description:
    "Ensure every form input has a programmatically associated label for screen reader users and assistive technologies. WCAG 1.3.1 & 2.5.3 compliant.",
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
          Programmatic Label
        </h1>
      </div>

      <h2 className="sub-title">Who Benefits</h2>
      <ul className="importantNote unListType plainText">
        <li>
          Screen reader users who rely on labels to understand form fields.
        </li>
        <li>Keyboard-only users navigating forms using tab keys.</li>
        <li>Developers building accessible and compliant forms.</li>
        <li>
          Users with cognitive disabilities who benefit from clear labels and
          instructions.
        </li>
      </ul>

      {/* GOOD EXAMPLE */}
      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`<label for="email">Email Address</label>
<input type="email" id="email" name="email" />`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="Label Associated with Input"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>
              <code>&lt;label for&gt;</code> is linked to{" "}
              <code>&lt;input id&gt;</code>.
            </li>
            <li>Screen readers announce: “Email Address, edit text”.</li>
            <li>
              Supports WCAG 1.3.1 (Info and Relationships) and 2.5.3 (Label in
              Name).
            </li>
            <li>
              Keyboard focus moves into the input with context from the label.
            </li>
          </ul>
        }
      />

      {/* BAD EXAMPLE */}
      <h2 className="sub-title">Incorrect Example</h2>
      <CodeSnippet
        code={`<p>Email Address</p>
<input type="email" name="email" />`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="html"
        label="Text Visually Styled as Label"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>
              “Email Address” is not programmatically associated with the input.
            </li>
            <li>
              Screen reader announces only “edit text”, missing label context.
            </li>
            <li>Fails WCAG 1.3.1 and 2.5.3, causing confusion for users.</li>
            <li>May lead to inaccessible forms for assistive tech users.</li>
          </ul>
        }
      />

      {/* GOOD ALTERNATIVE WITH WRAPPING LABEL */}
      <h2 className="sub-title">Alternative Good Example: Wrapping Label</h2>
      <CodeSnippet
        code={`<label>
  Email Address
  <input type="email" name="email" />
</label>`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="Label Wraps Input"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Input is wrapped inside the label element.</li>
            <li>
              No need for <code>for</code> or <code>id</code> attributes.
            </li>
            <li>Screen reader reads label correctly during focus.</li>
            <li>Simple and semantic for basic forms.</li>
          </ul>
        }
      />

      {/* BAD EXAMPLE USING PLACEHOLDER ONLY */}
      <h2 className="sub-title">Incorrect Example: Placeholder Only</h2>
      <CodeSnippet
        code={`<input type="email" placeholder="Email Address" name="email" />`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="html"
        label="Placeholder Instead of Label"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>
              Relies only on placeholder for context — not a programmatic label.
            </li>
            <li>
              Screen readers may skip placeholder or read it inconsistently.
            </li>
            <li>Fails WCAG 1.3.1 and may cause usability issues.</li>
            <li>Placeholders disappear on focus, confusing users.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Why This Matters</h2>
      <ul className="importantNote unListType margin-0">
        <li>Ensures users know what each input field is for.</li>
        <li>Improves form usability, especially for assistive technology.</li>
        <li>Prevents ambiguity and increases form completion rates.</li>
        <li>
          Required under WCAG 1.3.1 (Info and Relationships) and 2.5.3 (Label in
          Name).
        </li>
      </ul>

      <ImageWithCaption
        src="/programmatic-label.png"
        alt="VoiceOver showing correctly announced form field label"
        caption="VoiceOver reads 'Email Address, edit text' when label is correctly associated"
        width={600}
        height={350}
      />

      <div className="text-start">
        <GoBackButton />
      </div>
    </>
  );
}
