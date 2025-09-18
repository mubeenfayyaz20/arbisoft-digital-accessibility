import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import ImageWithCaption from "@/app/components/ImageWithCaption";
import GoBackButton from "@/app/components/BackButton";
import PageScrollTop from "@/app/components/PageScrollTop";

export const metadata: Metadata = {
  title: "1.4.13 Guideline - Content on Hover or Focus | Arbi Digital Accessibility",
  description:
    "Ensure that additional content triggered by hover or focus is accessible, dismissible, and remains visible long enough to be read.",
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
          Content on Hover or Focus
        </h1>
      </div>

      <h2 className="sub-title">Who Benefits</h2>
      <ul className="importantNote unListType plainText">
        <li>Users with motor impairments who may not keep a pointer steady.</li>
        <li>Users with low vision who need more time to read tooltips or popovers.</li>
        <li>Keyboard-only users navigating with the Tab key.</li>
        <li>Screen reader users who need focus-triggered content to be accessible.</li>
      </ul>

      {/* GOOD EXAMPLE 1 */}
      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`<button aria-describedby="tooltip1">Info</button>
<div id="tooltip1" role="tooltip" style={{ visibility: 'visible' }}>
  Additional details remain until dismissed.
</div>`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="Tooltip Accessible by Keyboard and Mouse"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Tooltip appears on hover and focus.</li>
            <li>Remains visible until dismissed, giving users time to read.</li>
            <li>Uses <code>aria-describedby</code> for screen readers.</li>
          </ul>
        }
      />

      {/* BAD EXAMPLE 1 */}
      <h2 className="sub-title">Incorrect Example</h2>
      <CodeSnippet
        code={`<button title="More info">Info</button>`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="html"
        label="Tooltip Visible Only on Mouse Hover"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Only appears on mouse hover — not accessible to keyboard users.</li>
            <li>Disappears too quickly when pointer moves away.</li>
            <li>Cannot be dismissed manually.</li>
          </ul>
        }
      />

      {/* GOOD EXAMPLE 2 */}
      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`<a href="#" class="menu-item" tabindex="0">
  Profile
  <div class="dropdown" role="menu">
    <a href="/settings">Settings</a>
    <a href="/logout">Logout</a>
  </div>
</a>`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="Dropdown Accessible via Focus and Hover"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Dropdown appears on hover or keyboard focus.</li>
            <li>Users can tab into dropdown items.</li>
            <li>Remains open until focus moves away.</li>
          </ul>
        }
      />

      {/* BAD EXAMPLE 2 */}
      <h2 className="sub-title">Incorrect Example</h2>
      <CodeSnippet
        code={`<a href="#" class="menu-item">
  Profile
  <div class="dropdown">...</div>
</a>`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="html"
        label="Dropdown Opens Only on Hover"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Opens only with mouse hover — inaccessible to keyboard users.</li>
            <li>Closes too fast if pointer moves slightly away.</li>
          </ul>
        }
      />

      {/* GOOD EXAMPLE 3 */}
      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`<label for="email">Email</label>
<input id="email" type="email" aria-describedby="emailHelp" />
<div id="emailHelp" role="tooltip">
  We'll never share your email.
</div>`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="Form Help Text Always Visible on Focus"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Help text is tied to input via <code>aria-describedby</code>.</li>
            <li>Visible on focus — users don&apso;t have to hover to see it.</li>
            <li>Works for screen reader users.</li>
          </ul>
        }
      />

      {/* BAD EXAMPLE 3 */}
      <h2 className="sub-title">Incorrect Example</h2>
      <CodeSnippet
        code={`<label for="email">Email</label>
<input id="email" type="email" placeholder="Enter email" />`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="html"
        label="Help Text Only in Placeholder"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Help text disappears when typing.</li>
            <li>Not available to screen reader users after input starts.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Why This Matters</h2>
      <ul className="importantNote unListType margin-0">
        <li>Hover-only content excludes keyboard and touch device users.</li>
        <li>Popups/tooltips that vanish too quickly frustrate users.</li>
        <li>Content triggered by hover/focus should remain visible until dismissed.</li>
        <li>WCAG 2.1 requires dismissible, persistent, and accessible additional content.</li>
      </ul>

      <ImageWithCaption
        src="/content-focus.png"
        alt="Example showing tooltip that appears on both hover and focus"
        caption="Accessible tooltip that works with mouse, keyboard, and assistive tech."
        width={600}
        height={350}
      />

      <div className="text-start">
        <GoBackButton />
      </div>
    </>
  );
}
