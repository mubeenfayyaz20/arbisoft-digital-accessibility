import { Metadata } from "next";
import Image from "next/image";
import CodeSnippet from "@/app/components/CodeSnippet";
import GoBackButton from "@/app/components/BackButton";
import PageScrollTop from "@/app/components/PageScrollTop";
import styles from "../../../../styles/components/Common.module.scss";

export const metadata: Metadata = {
  title: "CAPTCHA Alternatives | Arbi Digital Accessibility",
  description:
    "Explore accessible CAPTCHA alternatives that prevent spam without excluding users. Learn how to implement secure, user-friendly methods that meet WCAG 2.2 compliance.",
};

export default function Page() {
  return (
    <>
      <PageScrollTop />
      <div className="text-center">
        <div className="text-start absolute">
          <GoBackButton />
        </div>
        <h1 className="text-center dark-color largeHeading">
          Captcha Alternatives
        </h1>
      </div>

      <h2 className="sub-title">When to Use Captcha</h2>
      <ul className="importantNote unListType plainText">
        <li>
          When you need to prevent spam or bot submissions without burdening
          real users.
        </li>
        <li>
          When your users include people with visual, cognitive, or motor
          impairments.
        </li>
        <li>
          When using traditional CAPTCHA creates frustration or confusion in
          form flows.
        </li>
        <li>
          When you want to avoid relying on third-party CAPTCHA providers or
          services.
        </li>
        <li>
          When building forms for login, contact, comment, or newsletter signup
          pages.
        </li>
        <li>
          When fast, simple form submission is critical for usability and
          conversions.
        </li>
        <li>
          When you want to ensure full support across screen readers, keyboards,
          and touch devices.
        </li>
        <li>When maintaining a clean, semantic HTML structure is important.</li>
        <li>
          When you want a silent background solution like honeypots or
          time-based checks.
        </li>
      </ul>

      <h2 className="sub-title">Who Benefits</h2>

      <ul className="importantNote unListType plainText">
        <li>
          They do not rely on distorted images or audio, making them easier for
          all users.
        </li>
        <li>
          They avoid unnecessary visual or cognitive tasks for people with
          disabilities.
        </li>
        <li>
          They are compatible with screen readers and keyboard navigation.
        </li>
        <li>
          They help users complete forms quickly without extra confusion or
          frustration.
        </li>
        <li>
          They reduce cognitive overload by removing puzzles and tricky input
          fields.
        </li>
        <li>
          They allow assistive technologies to skip non-essential or hidden
          verification steps.
        </li>
        <li>
          They make form interactions simpler and more inclusive across all
          devices.
        </li>
        <li>
          They improve the user experience for people with visual, auditory, or
          cognitive impairments.
        </li>
        <li>
          They maintain security while meeting accessibility compliance
          standards.
        </li>
        <li>
          They can be implemented without relying on third-party CAPTCHA
          services.
        </li>
        <li>
          They are easier to style, customize, and maintain within your own UI.
        </li>
        <li>
          A cleaner, faster, and more focused experience benefits all users
          equally.
        </li>
      </ul>
      <CodeSnippet
        code={`<label>
  <input type="checkbox" name="human_check" required />
  I am not a robot
</label>`}
        language="html"
        label="Checkbox CAPTCHA Correct Code Usage"
      />
      <CodeSnippet
        code={`<!-- Hidden field that real users won't see. Bots typically fill this field → can be used to reject submissions.-->
<input type="text" name="company" style="display: none;" tabindex="-1" autocomplete="off" />
`}
        language="html"
        label="Honeypot Field (Invisible CAPTCHA) Correct Code Usage"
      />

      <CodeSnippet
        code={`<label for="math">What is 2 + 2?</label>
<input type="text" id="math" name="math" aria-describedby="math-help" required />
<span id="math-help">Enter the sum to verify you're human.</span>
`}
        language="html"
        label="Math Question (with accessible label)"
      />

      <CodeSnippet
        code={`<img src="captcha.jpg" alt="CAPTCHA" />
<input type="text" name="captcha" aria-label="Enter the text in the image" />
`}
        language="html"
        label="Inaccessible CAPTCHA Incorrect Code Usage"
        showCopyButton={false}
      />
      <CodeSnippet
        code={`<!-- Example of an audio CAPTCHA prompt No alternative method provided.-->
<p>Listen to the numbers and type them below:</p>
<audio controls>
  <source src="audio-captcha.mp3" type="audio/mpeg">
</audio>
<input type="text" name="audio-captcha" />
`}
        language="html"
        label="Inaccessible CAPTCHA Incorrect Code Usage"
        showCopyButton={false}
      />

      <CodeSnippet
        code={`<p>Drag the puzzle piece to complete the image.</p>
<div class="puzzle-area">
  <!-- Draggable elements -->
</div>
`}
        language="html"
        label="Drag-and-Drop CAPTCHA Not accessible via keyboard Incorrect Code Usage"
        showCopyButton={false}
      />

      <CodeSnippet
        code={`<img src="captcha.png" alt="" />
<input type="text" name="captcha" />`}
        language="html"
        label="Text Image CAPTCHA with No Alt Text"
        showCopyButton={false}
      />

      <div className="text-start ">
        <GoBackButton />
      </div>
    </>
  );
}
