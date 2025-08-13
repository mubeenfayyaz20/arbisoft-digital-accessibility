"use client"; // <-- This is required for hooks inside preview

import React, { useState, useRef } from "react";
import CodeSnippet from "@/app/components/CodeSnippet";
import PageScrollTop from "@/app/components/PageScrollTop";

// export const metadata: Metadata = {
//   title: "Keyboard Focus | Arbi Digital Accessibility",
//   description:
//     "Learn what keyboard focus is, why it is important for accessibility, and see real-world good and bad examples. Covers WCAG compliance, usability for keyboard users, and best practices for visible and logical focus order.",
// };

const page = () => {
  // Local modal component for live preview
  const ModalExample = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openBtnRef = useRef<HTMLButtonElement>(null);
    const closeBtnRef = useRef<HTMLButtonElement>(null);

    const openModal = () => {
      setIsOpen(true);
      setTimeout(() => closeBtnRef.current?.focus(), 0);
    };

    const closeModal = () => {
      setIsOpen(false);
      setTimeout(() => openBtnRef.current?.focus(), 0);
    };

    return (
      <>
        <button ref={openBtnRef} onClick={openModal}>
          Open Modal
        </button>
        {isOpen && (
          <div
            role="dialog"
            aria-modal="true"
            style={{
              padding: "20px",
              background: "#eee",
              marginTop: "10px",
            }}
          >
            <p>Modal Content</p>
            <button ref={closeBtnRef} onClick={closeModal}>
              Close
            </button>
          </div>
        )}
      </>
    );
  };

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

      <div className="grid grid-cols-2 gap-8">
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
      </div>
    </>
  );
};

export default page;
