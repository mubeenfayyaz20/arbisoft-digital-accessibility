import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import GoBackButton from "@/app/components/BackButton";
import PageScrollTop from "@/app/components/PageScrollTop";
import GoodExample from "./GoodBadExample";

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
          Common Mistakes for Date Input Fields
        </h1>
      </div>
      <h2 className="sub-title">Benefits</h2>
      <ul className="importantNote unListType plainText">
        <li>
          All accessible plugins
          <Link
            href="https://reactdatepicker.com/"
            className="link-color-blue mt-2 underline font-semibold hover:no-underline"
            target="_blank"
          >
            https://reactdatepicker.com/
          </Link>{" "}
          <br />
          <Link
            target="_blank"
            href="https://react-spectrum.adobe.com/react-aria/DatePicker.html"
            className="link-color-blue mt-2 underline font-semibold hover:no-underline"
          >
            https://react-spectrum.adobe.com/react-aria/DatePicker.html
          </Link>
          <br />
          <Link
            target="_blank"
            href="https://flatpickr.js.org/instance-methods-properties-elements/"
            className="link-color-blue mt-2 underline font-semibold hover:no-underline"
          >
            https://flatpickr.js.org/instance-methods-properties-elements/
          </Link>
        </li>
        <li>
          Users with assistive technologies can easily understand, navigate, and
          complete forms.
        </li>
        <li>
          Forms become usable for users with disabilities (e.g., screen reader
          users, keyboard-only users).
        </li>
        <li>Proper labeling and structure improve mobile form interactions.</li>
        <li>Meets standards like WCAG 2.2, ADA, and EN 301 549.</li>
        <li>
          Clear labels, validation, and feedback help all users avoid mistakes.
        </li>
        <li>
          Accessible date input fields provide screen reader support and clear
          formatting instructions, improving usability.
        </li>
        <li>
          Plugin-based date pickers support consistent cross-browser behavior,
          unlike native <code>type=&quot;date&quot;</code> which may be
          unsupported or inaccessible.
        </li>
        <li>
          Enhanced keyboard navigation allows users to select dates without
          needing a mouse or touch input.
        </li>
        <li>
          ARIA support in datepicker plugins ensures assistive technologies can
          announce selected dates and help users avoid input errors.
        </li>
      </ul>

      <div className="grid lg:grid-cols-1 lg:grid-cols-2 gap-8 ">
        <CodeSnippet
          code={`// Use this plugin for accessible date input fields
  import DatePicker from "react-datepicker";
  import "react-datepicker/dist/react-datepicker.css";
  
  <DatePicker
          id="birthdate"
          selected={birthDate}
          onChange={(date) => setBirthDate(date)}
          aria-required="true"
          aria-label="Date of Birth"
          placeholderText="Select your date of birth"
          className="border px-2 py-1"
        />
`}
          preview={<GoodExample />}
          language="html"
          label="Date Input Using Accessible Plugin (Correct)"
          captionHeading="Why it's good:"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>
                Plugin can provide keyboard support and screen reader-friendly
                labeling
              </li>
              <li>Custom date format improves clarity (e.g., MM/DD/YYYY)</li>
              <li>Descriptive hint explains interaction and format</li>
              <li>
                Better browser compatibility than native{" "}
                <code>type=&quot;date&quot;</code>
              </li>
            </ul>
          }
        />
        <CodeSnippet
          code={`<label for="dob">Date of Birth</label>
<input id="dob" name="dob" type="date" required />`}
          preview={
            <>
              <label htmlFor="dob">Date of Birth</label>
              <input id="dob" name="dob" type="date" required />
            </>
          }
          language="html"
          label="Required Fields Incorrect Code Usage"
          showCopyButton={false}
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType  margin-0">
              <li>
                <code>type=&quot;date&quot;</code> is not supported consistently
                across browsers (e.g., Firefox, Safari)
              </li>
              <li>Default date picker UIs may not be keyboard accessible</li>
              <li>
                Screen readers may announce it inconsistently depending on
                device
              </li>
              <li>Lacks format guidance and may confuse users</li>
            </ul>
          }
        />
      </div>
      <GoBackButton />
    </>
  );
};

export default page;
