import React from "react";
import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import PageScrollTop from "@/app/components/PageScrollTop";
import {
  ModalExample,
  DropdownExample,
  FormExample,
  MouseOnlyDropdown,
  BadErrorHandling,
} from "@/app/components/KeyboardFocus";

export const metadata: Metadata = {
  title: "Keyboard Focus | Arbi Digital Accessibility",
  description:
    "Learn what keyboard focus is, why it is important for accessibility, and see real-world good and bad examples. Covers WCAG compliance, usability for keyboard users, and best practices for visible and logical focus order.",
};

const page = () => {
  return (
    <>
      <PageScrollTop />
      <div className="text-center">
        <h1 className="text-center dark-color largeHeading">
          What is Keyboard Focus?
        </h1>
      </div>

      <p className="plainText">
        <strong>Keyboard focus</strong> is the visual and functional indication
        of which element on a webpage is currently active and will respond to
        keyboard input. For example, when you press <kbd>Tab</kbd> on a website,
        the highlighted link, button, or form field has keyboard focus.
      </p>

      <h2 className="sub-title">Why is Keyboard Focus Important?</h2>
      <ul className="importantNote unListType plainText">
        <li>
          Required for people navigating without a mouse (e.g., using{" "}
          <kbd>Tab</kbd>, arrow keys, or assistive technologies).
        </li>
        <li>
          Helps sighted keyboard users see where they are on a page and interact
          effectively.
        </li>
        <li>
          Ensures compliance with WCAG 2.4.7 (Focus Visible) and WCAG 2.4.3
          (Focus Order).
        </li>
        <li>
          Prevents confusion or “keyboard traps” where users can’t escape a
          section.
        </li>
        <li>
          Improves usability for everyone — even mouse users may rely on it
          temporarily.
        </li>
      </ul>

      <div className="grid lg:grid-cols-1 lg:grid-cols-2 gap-8">
        {/* GOOD EXAMPLE – Visible Focus Indicator */}
        <CodeSnippet
          code={`button:focus {
  outline: 3px solid #005fcc;
  outline-offset: 2px;
}`}
          preview={
            <div style={{ padding: "8px" }}>
              <button
                style={{ outline: "3px solid #005fcc", outlineOffset: "2px" }}
              >
                Button with clear focus
              </button>
            </div>
          }
          language="css"
          label="Good Example – Visible Focus Indicator"
          captionHeading="Why it's good:"
          captionColor="green"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>High-contrast outline easily visible against background.</li>
              <li>Consistent across browsers and devices.</li>
              <li>Meets WCAG 2.4.7 Focus Visible requirement.</li>
            </ul>
          }
        />

        {/* BAD EXAMPLE – Focus Outline Removed */}
        <CodeSnippet
          code={`button:focus {
  outline: none;
}`}
          preview={
            <div style={{ padding: "8px" }}>
              <button style={{ outline: "none" }}>
                Button with no visible focus
              </button>
            </div>
          }
          language="css"
          label="Bad Example – Focus Outline Removed"
          showCopyButton={false}
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>Keyboard users cannot see which element is active.</li>
              <li>Fails WCAG 2.4.7 Focus Visible requirement.</li>
              <li>
                Causes severe accessibility issues for sighted keyboard users.
              </li>
            </ul>
          }
        />

        {/* GOOD EXAMPLE – Logical Focus Order */}
        <CodeSnippet
          code={`<!-- HTML is in a logical reading order -->
<header><a href="#main">Skip to main content</a></header>
<nav>…navigation links…</nav>
<main id="main">…main content…</main>`}
          preview={
            <div style={{ border: "1px solid #ccc", padding: "8px" }}>
              <p>Tab order follows logical reading sequence:</p>
              <ol>
                <li>Skip link</li>
                <li>Navigation</li>
                <li>Main content</li>
              </ol>
            </div>
          }
          language="html"
          label="Good Example – Logical Focus Order"
          captionHeading="Why it's good:"
          captionColor="green"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>Focus moves in the same order as visual layout.</li>
              <li>No unexpected jumps for keyboard users.</li>
              <li>Improves navigation speed and reduces confusion.</li>
            </ul>
          }
        />

        {/* BAD EXAMPLE – Focus Order Mismatch */}
        <CodeSnippet
          code={`<!-- Visually navigation is on top, but DOM places it last -->
<main>…main content…</main>
<nav>…navigation links…</nav>`}
          preview={
            <div style={{ border: "1px solid #ccc", padding: "8px" }}>
              <p>
                Tab order jumps unexpectedly to navigation after main content.
              </p>
            </div>
          }
          language="html"
          label="Bad Example – Focus Order Mismatch"
          showCopyButton={false}
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>
                Confuses users because focus order does not match the visual
                layout.
              </li>
              <li>Forces extra tabbing to reach expected sections.</li>
              <li>Fails WCAG 2.4.3 Focus Order requirement.</li>
            </ul>
          }
        />

        {/* GOOD EXAMPLE – Restoring Focus After Modal */}
        <CodeSnippet
          code={``}
          preview={
            <div style={{ border: "1px solid #ccc", padding: "8px" }}>
              <ModalExample />
            </div>
          }
          language="javascript"
          label="Good Example – Restoring Focus After Modal"
          captionHeading="Why it's good:"
          captionColor="green"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>
                Returns keyboard focus to the trigger button after modal close.
              </li>
              <li>Prevents focus loss for keyboard users.</li>
              <li>Meets focus management best practices.</li>
            </ul>
          }
        />

        {/* BAD EXAMPLE – Focus Lost After Modal Close */}
        <CodeSnippet
          code={`// Modal closes but focus is not restored
closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
  // No focus restoration
});`}
          preview={
            <div style={{ border: "1px solid #ccc", padding: "8px" }}>
              <p>
                When the modal closes, focus is lost and drops to the top of the
                page.
              </p>
            </div>
          }
          language="javascript"
          label="Bad Example – Focus Lost After Modal Close"
          showCopyButton={false}
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>
                Keyboard users may have to start navigation from the top again.
              </li>
              <li>Interrupts workflow and increases cognitive load.</li>
            </ul>
          }
        />

        {/* GOOD EXAMPLE – Accessible Dropdown */}
        <CodeSnippet
          code={`<button aria-haspopup="listbox" aria-expanded="true">Options</button>
<ul role="listbox">
  <li tabIndex="0">Profile</li>
  <li tabIndex="0">Settings</li>
  <li tabIndex="0">Logout</li>
</ul>`}
          preview={
            <div style={{ border: "1px solid #ccc", padding: "8px" }}>
              <DropdownExample />
            </div>
          }
          language="html"
          label="Good Example – Accessible Dropdown"
          captionHeading="Why it's good:"
          captionColor="green"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>Supports keyboard navigation with Tab/Arrow keys.</li>
              <li>Announced correctly to screen readers via ARIA roles.</li>
              <li>Matches expected behavior of native select menus.</li>
            </ul>
          }
        />

        {/* BAD EXAMPLE 1 – Mouse-only Dropdown */}
        <CodeSnippet
          code={`<div onClick="openMenu()">⚙ Options</div>
<div>
  <p>Profile</p>
  <p>Settings</p>
  <p>Logout</p>
</div>`}
          preview={<MouseOnlyDropdown />}
          language="html"
          label="Bad Example 1 – Mouse-only Dropdown"
          showCopyButton={false}
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>Not focusable with keyboard.</li>
              <li>No semantic roles or states announced.</li>
              <li>Fails WCAG 2.1.1 (Keyboard).</li>
            </ul>
          }
        />

        {/* GOOD EXAMPLE – Form Error Focus */}
        <CodeSnippet
          code={`<form onsubmit="...">
  <label>Name: <input aria-describedby="err" /></label>
  <span id="err">Name is required</span>
</form>`}
          preview={
            <div style={{ border: "1px solid #ccc", padding: "8px" }}>
              <FormExample />
            </div>
          }
          language="html"
          label="Good Example – Form Error Focus"
          captionHeading="Why it's good:"
          captionColor="green"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>Moves focus to the first invalid field.</li>
              <li>
                Error message is programmatically linked via{" "}
                <code>aria-describedby</code>.
              </li>
              <li>Improves efficiency for keyboard users.</li>
            </ul>
          }
        />

        {/* BAD EXAMPLE – Form Error Without Focus */}
        <CodeSnippet
          code={`<form onsubmit="...">
  <label>Name: <input /></label>
  <span style="color:red">Name is required</span>
</form>`}
          preview={<BadErrorHandling />}
          language="html"
          label="Bad Example – Form Error Without Focus"
          showCopyButton={false}
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>
                Error message is only visual, not announced by screen readers.
              </li>
              <li>
                Keyboard focus stays on the submit button instead of moving to
                the error field.
              </li>
              <li>
                Fails WCAG 3.3.1 (Error Identification) and 3.3.2 (Labels or
                Instructions).
              </li>
            </ul>
          }
        />
      </div>
    </>
  );
};

export default page;
