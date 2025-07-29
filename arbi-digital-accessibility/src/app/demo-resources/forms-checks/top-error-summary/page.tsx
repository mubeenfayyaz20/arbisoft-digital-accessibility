import React from "react";
import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import GoBackButton from "@/app/components/BackButton";
import PageScrollTop from "@/app/components/PageScrollTop";
import GoodExample, { goodExampleCode } from "./GoodExample";
import BadExample, {badExampleCode} from "./BadExample";

export const metadata: Metadata = {
  title: "Top Error Summary | Arbi Digital Accessibility",
  description:
    "Understand the hierarchy of accessibility compliance levels, from highest to lowest priority, to help you meet legal requirements and improve user experience effectively.",
};
const page = () => {
  return (
    <>
      <PageScrollTop />
      <div className="text-center">
        <div className="text-start absolute">
          <GoBackButton />
        </div>
        <h1 className="text-center dark-color largeHeading">
          Why Top Error Summary
        </h1>
      </div>
      <h2 className="sub-title">Benefits</h2>
      <ul className="importantNote unListType plainText">
        <li>
          Screen reader users are notified immediately of all errors after form
          submission.
        </li>
        <li>
          Keyboard users get a summary of issues without needing to manually
          navigate field-by-field.
        </li>
        <li>
          Mobile users don&apos;t have to scroll around to figure out what went
          wrong.
        </li>
        <li>
          Users can see the full list of problems in one glance and fix them
          easily.
        </li>
      </ul>
      <div className="grid grid-cols gap-8 ">
        <CodeSnippet
          code={goodExampleCode}
          preview={
            <>
              <GoodExample />
            </>
          }
          language="jsx"
          label="Implementation (HTML + ARIA) Correct Code Usage"
          captionHeading="Why it's good:"
          caption={
            <ul className="importantNote unListType  margin-0">
              <li>
                role=&quot;alert&quot; Announces errors to screen reader users
                immediately.
              </li>
              <li>
                tabindex=&quot;-1&quot; Allows the summary to receive focus so
                screen readers start from here.
              </li>
              <li>
                aria-describedby connects input to its error message for
                assistive tech.
              </li>
              <li>Errors listed clearly in &lt;ol&gt;.</li>
              <li>
                Each input has aria-invalid=&quot;true&quot; when it has an
                error.
              </li>
              <li>
                Each input has aria-required=&quot;true&quot; to indicate it is
                mandatory.
              </li>
              <li>
                Each input has an associated &lt;label&gt; with its error
                message.
              </li>
            </ul>
          }
        />

        <CodeSnippet
          code={badExampleCode}
          preview={
            <>
              <BadExample />
            </>
          }
          language="jsx"
          label="Implementation (HTML + ARIA) Incorrect Code Usage"
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>No aria-required, aria-invalid, or required attributes.</li>
              <li>No error summary or inline error messages.</li>
              <li>No validation before showing success alert.</li>
              <li>
                &lt;label&gt; elements wrap inputs — while valid, it doesn&apos;t
                allow associating with htmlFor.
              </li>
            </ul>
          }
        />
      </div>
    </>
  );
};

export default page;
