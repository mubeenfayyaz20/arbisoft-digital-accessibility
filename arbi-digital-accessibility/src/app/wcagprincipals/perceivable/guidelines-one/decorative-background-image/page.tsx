import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import GoBackButton from "@/app/components/BackButton";
import PageScrollTop from "@/app/components/PageScrollTop";

export const metadata: Metadata = {
  title:
    "1.1 Guideline - Decorative Background Image | Arbi Digital Accessibility",
  description:
    "Decorative background images are visuals that do not convey meaningful content. Their purpose is only to enhance visual design..",
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
          Decorative Background Images
        </h1>
      </div>

      <h2 className="sub-title">When to Use Decorative Backgrounds</h2>
      <ul className="importantNote unListType plainText">
        <li>Background textures (e.g., abstract shapes, gradients)</li>
        <li>Repeating patterns</li>
        <li>Thematic but non-informative visuals</li>
        <li>Visual borders or flourishes</li>
      </ul>
      <h2 className="sub-title">Who Benefits</h2>

      <ul className="importantNote unListType plainText">
        <li>They are not distracted by unnecessary image descriptions.</li>
        <li>It should not be described or announced.</li>
        <li>
          It must be ignored by assistive technologies (like screen readers).
        </li>
        <li>
          Helps users focus on meaningful content instead of decorative visuals.
        </li>

        <li>
          Allows assistive technologies to skip non-essential elements,
          improving user experience.
        </li>

        <li>Easier to manage content and maintain accessibility standards.</li>

        <li>
          Better understanding of page structure by ignoring irrelevant visuals.
        </li>

        <li>A simpler, more focused experience benefits all users.</li>
        <li>Enhances visual appeal without compromising accessibility.</li>
        <li>
          Keeps the HTML clean by separating content from presentation (using
          CSS).
        </li>
        <li>Reduces cognitive load by eliminating visual noise.</li>
        <li>Supports responsive design without impacting content semantics.</li>
      </ul>

      <h2 className="sub-title">
        Best Practices for Decorative Background Images
      </h2>
      <ul className="importantNote unListType plainText">
        <li>
          Use CSS for decorative images instead of HTML <code>img</code> tags.
        </li>
        <li>
          Avoid <strong> alt</strong> attributes in CSS backgrounds (they
          don&#39;t exist — screen readers ignore them).
        </li>
        <li>
          Do not use ARIA roles or labels on elements where the image is only
          decorative.
        </li>
        <li>
          If you must use <strong>&lt;img&gt;</strong>, then use{" "}
          <strong>alt=&quot;&quot;</strong> and
          <strong> role=&quot;presentation&quot;</strong> to hide it from screen
          readers.
        </li>
        <li>
          Ensure the background image does not convey any meaningful content or
          information.
        </li>
      </ul>
      <h2 className="sub-title">Using CSS Background Image</h2>
      <CodeSnippet
        code={`<div class="decorative-banner" aria-hidden="true"></div>

              <style>
              .decorative-banner {
              width: 100%;
              height: 200px;
              background-image: url('/images/waves-bg.svg');
              background-size: cover;
              background-repeat: no-repeat;
              }
              </style>
          `}
        language="html"
        label="Background Image Correct Code Usage"
      />
      <CodeSnippet
        code={`<img src="/images/sparkle.png" alt="" role="presentation" />`}
        language="html"
        label="Image tag Correct Code Usage"
      />

      <CodeSnippet
        code={`<div style="background-image: url('bg.jpg');" alt="Decorative background"></div>`}
        language="html"
        label="Decorative Background Image With alt in HTML Incorrect Code Usage"
        showCopyButton={false}
      />
      <CodeSnippet
        code={`<img src="bg.png" alt="Background Image" />
`}
        language="html"
        label=" Meaningless alt text Incorrect Code Usage"
        showCopyButton={false}
      />

      <div className="text-start ">
        <GoBackButton />
      </div>
    </>
  );
}
