import React from "react";
import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import GoBackButton from "@/app/components/BackButton";
import PageScrollTop from "@/app/components/PageScrollTop";

export const metadata: Metadata = {
  title: "Best Practices and Common Mistakes | Arbi Digital Accessibility",
  description:
    "Explore accessible and inaccessible form examples, covering required fields, labels, validation, error messages, placeholder usage, and grouping. Learn how to build forms that are usable, inclusive, and WCAG-compliant.",
};
const page = () => {
  return (
    <>
      <PageScrollTop />
      <div className="text-center">
        <div className="text-start md:relative lg:absolute">
          <GoBackButton />
        </div>
        <h1 className="text-center dark-color largeHeading">
          Best Practices and Common Mistakes
        </h1>
      </div>
      <h2 className="sub-title">Benefits</h2>
      <ul className="importantNote unListType plainText">
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
      </ul>
      <div className="grid lg:grid-cols-1 lg:grid-cols-2 gap-8 ">
        <CodeSnippet
          code={`<label for="email">Email 
          <span aria-hidden="true">*</span>
</label>
<input type="email" id="email" name="email" required aria-required="true">
`}
          preview={
            <>
              <label htmlFor="email">
                Email <span aria-hidden="true">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                aria-required="true"
              />
            </>
          }
          language="html"
          label="Required Fields Correct Code Usage"
          captionHeading="Why it's good:"
          caption={
            <ul className="importantNote unListType  margin-0">
              <li>Uses &lt;label&gt; for screen readers</li>
              <li>
                required + aria-required=&quot;true&quot; makes it clear for all
                users
              </li>
            </ul>
          }
        />
        <CodeSnippet
          code={`<input type="email" placeholder="Enter your email" required>`}
          preview={
            <input type="email" placeholder="Enter your email" required />
          }
          language="html"
          label="Required Fields Incorrect Code Usage"
          showCopyButton={false}
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType  margin-0">
              <li>
                No &lt;label&gt; (screen readers can&#39;t associate the input
                with its purpose)
              </li>
              <li>
                Placeholder disappears on focus, which affects memory and
                accessibility.
              </li>
            </ul>
          }
        />
        <CodeSnippet
          code={`<form novalidate>
  <label for="age">Age</label>
  <input type="number" id="age" name="age" min="18" max="99" 
  required aria-required="true">
  <span id="ageError" class="error-message" aria-live="polite">
  </span>
</form>
`}
          language="html"
          label="Validation Correct Code Usage"
          captionHeading="Why it's good:"
          caption={
            <ul className="importantNote unListType  margin-0">
              <li>Uses aria-live=&quot;polite&quot; to announce errors</li>
              <li>Adds min/max validation</li>
              <li>
                Avoids HTML5 default error messages (which can be inaccessible)
              </li>
            </ul>
          }
        />
        <CodeSnippet
          code={`<form>
  <input type="number" min="18" max="99" required>
</form>
`}
          language="html"
          label="Validation Incorrect Code Usage"
          showCopyButton={false}
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType  margin-0">
              <li>No custom error messages</li>
              <li>No error association or feedback via ARIA</li>
              <li>No validation</li>
            </ul>
          }
        />

        <CodeSnippet
          code={`<label for="email">Email address</label>
<input type="email" id="email" name="email" placeholder="e.g. john@example.com" aria-describedby="emailHint"/>
<span id="emailHint">We'll never share your email.</span>
`}
          language="html"
          label="Label and placeholder Correct Code Usage"
          captionHeading="Why it's good:"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>Uses a proper &lt;label</li>
              <li>Placeholder gives an example, not a label</li>
              <li>aria-describedby offers extra info for screen readers</li>
            </ul>
          }
        />

        <CodeSnippet
          code={`<input type="email" name="email" placeholder="Enter your email"
/>
`}
          language="html"
          label="Label and placeholder Incorrect Code Usage"
          showCopyButton={false}
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>No &lt;label&gt; screen readers may skip context</li>
              <li>
                Placeholder disappears on focus – hard for users with cognitive
                disabilities
              </li>
              <li>Placeholder text often has low contrast</li>
            </ul>
          }
        />

        <CodeSnippet
          code={`<label for="password">Password</label>
<input id="password" name="password" type="password" 
aria-describedby="pwdError" aria-invalid="true">
<span id="pwdError" class="error-message" role="alert">Password 
is required.</span>
`}
          language="html"
          label="Error Messaging Correct Code Usage"
          captionHeading="Why it's good:"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>Error is associated with input using aria-describedby</li>
              <li>
                role=&quot;alert&quot; ensures the message is read out
                immediately.
              </li>
              <li>
                aria-invalid=&quot;true&quot; announces the field as invalid.
              </li>
              <li>
                Screen readers will inform users that this field has an error.
              </li>
            </ul>
          }
        />
        <CodeSnippet
          code={`<form>
  <input type="email" id="email" name="email">
  <span>Please enter a valid email address.</span>
  <button type="submit">Submit</button>
</form>
`}
          language="html"
          label="Error Messaging Incorrect Code Usage"
          showCopyButton={false}
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>No association between error and input field</li>
              <li>Error message not announced</li>
              <li>Visually hidden users confused</li>
              <li> No aria-invalid=&quot;true&quot;</li>
            </ul>
          }
        />

        <CodeSnippet
          code={`<fieldset>
  <legend>Preferred Contact Method</legend>
  <label><input type="radio" name="contact" value="email"> Email</label>
  <label><input type="radio" name="contact" value="phone"> Phone</label>
</fieldset>
`}
          language="html"
          label="Grouping Radio Buttons Correct Code Usage"
          captionHeading="Why it's good:"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>
                fieldset and legend help screen readers understand the group
                context
              </li>
            </ul>
          }
        />

        <CodeSnippet
          code={`<p>Preferred Contact Method:</p>
<label><input type="radio" name="contact" value="email"> Email</label>
<label><input type="radio" name="contact" value="phone"> Phone</label>
`}
          language="html"
          label="Grouping Radio Buttons  Incorrect Code Usage"
          showCopyButton={false}
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>No grouping &lt;fieldset&gt; and &lt;legend&gt;</li>
              <li> Just a &lt;p&gt; for the question</li>
              <li> Poor keyboard experience</li>
            </ul>
          }
        />
      </div>
      <GoBackButton />
    </>
  );
};

export default page;
