import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import GoBackButton from "@/app/components/BackButton";
import PageScrollTop from "@/app/components/PageScrollTop";
import { AccessibleAgeInput, InaccessibleAgeInput } from "./GoodBadExample";

export const metadata: Metadata = {
  title: "Best Practices and Common Mistakes | Arbi Digital Accessibility",
  description:
    "Explore accessible and inaccessible form examples, including date input fields. Learn why native date pickers often lack accessibility and how using a plugin ensures screen reader and keyboard support. Covers required fields, labels, validation, error messages, placeholder usage, grouping, and more to help you build WCAG-compliant forms.",
};

const page = () => {
  return (
    <>
      <PageScrollTop />
      <div className="text-center">
        <h1 className="text-center dark-color largeHeading">
          Common Mistakes for Age Input Fields
        </h1>
      </div>
      <h2 className="sub-title">Benefits of Accessible Age Input</h2>
      <ul className="importantNote unListType plainText">
        <li>
          Custom validation avoids VoiceOver bugs with native <code>min</code>{" "}
          and <code>max</code> attributes.
        </li>
        <li>
          Users receive clear, accessible feedback when their input is out of
          range.
        </li>
        <li>
          Labels and ARIA attributes ensure the field is navigable and
          understandable by screen readers.
        </li>
        <li>
          Using <code>aria-invalid</code> and <code>aria-describedby</code>{" "}
          enhances error communication for all users.
        </li>
        <li>
          Keyboard-only users can still enter values easily with numeric input.
        </li>
      </ul>

      <div className="grid grid-cols-2 gap-8">
        <CodeSnippet
          code={`<form noValidate>
  <label htmlFor="age">Age</label>
  <input
    type="number" id="age" name="age" min="18" max="99"
    required aria-required="true" aria-invalid="false"
    aria-describedby="ageHint ageError"
  />
  <span id="ageHint">Enter an age between 18 and 99</span>
  <span id="ageError" className="error-message" role="alert">
    {/* Dynamically shown if validation fails */}
  </span>
</form>`}
          preview={<AccessibleAgeInput />}
          language="html"
          label="Age Input with Accessible Validation (Correct)"
          captionHeading="Why it's good:"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>
                Avoids native browser error popups that are not announced by
                VoiceOver
              </li>
              <li>
                Uses <code>aria-describedby</code> and <code>role="alert"</code>{" "}
                for accessible error messages
              </li>
              <li>Clearly defines min/max expectations in hint text</li>
              <li>
                Uses <code>aria-invalid</code> to inform assistive technologies
                of invalid input
              </li>
            </ul>
          }
        />

        <CodeSnippet
          code={`<form>
  <label for="age">Age</label>
  <input type="number" id="age" name="age" min="18" max="99" required>
</form>`}
          preview={<InaccessibleAgeInput />}
          language="html"
          label="Age Input with Native Validation Only (Incorrect)"
          showCopyButton={false}
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>
                Native browser validation messages are not announced by
                VoiceOver
              </li>
              <li>
                Error messages are not connected via ARIA (no{" "}
                <code>aria-describedby</code>)
              </li>
              <li>
                No <code>role="alert"</code> means screen reader users may not
                know what went wrong
              </li>
              <li>
                Error handling varies across browsers and devices — not reliable
              </li>
              <li> Keyboard and screen reader usability is poor</li>
              <li> No need to add ariamin and ariamax attributes</li>
            </ul>
          }
        />
      </div>
      <GoBackButton />
    </>
  );
};

export default page;
