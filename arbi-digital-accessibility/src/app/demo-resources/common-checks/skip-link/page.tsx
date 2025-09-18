import React from "react";
import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import PageScrollTop from "@/app/components/PageScrollTop";

export const metadata: Metadata = {
  title: "Skip Links | Arbi Digital Accessibility",
  description:
    "Learn what a skip link is, why it's important for accessibility, and see good and bad real-world examples. Covers WCAG compliance, screen reader navigation, and best practices.",
};

const SkipLinkPreview = ({ type }: { type: string }) => {
  if (type === "good-visible") {
    return (
      <div style={{ position: "relative", padding: "8px", border: "1px solid #ccc" }}>
        <a href="#maincontent-good" className="skip-link-good">
          Skip to main content
        </a>
        <nav>
          <a href="#">Home</a> | <a href="#">About</a> | <a href="#">Contact</a>
        </nav>
        <main id="maincontent-good" tabIndex={-1}>
          <h1>Main Content Area</h1>
          <p>Keyboard users can skip here directly.</p>
        </main>
        <style>{`
          .skip-link-good {
            position: absolute;
            top: -40px;
            left: 0;
            background: #000;
            color: #fff;
            padding: 8px;
            z-index: 100;
            text-decoration: none;
            opacity: 0;
          }
          .skip-link-good:focus {
            top: 0;
            opacity: 1;
          }
        `}</style>
      </div>
    );
  }

  if (type === "bad-hidden") {
    return (
      <div style={{ padding: "8px",  border: "1px solid #ccc" }}>
        <a href="#maincontent-bad" className="skip-link-bad">
          Skip to main content
        </a>
        <nav>
          <a href="#">Home</a> | <a href="#">About</a> | <a href="#">Contact</a>
        </nav>
        <main id="maincontent-bad">
          <h1>Main Content Area</h1>
        </main>
        <style>{`
          .skip-link-bad {
            display: none;
          }
        `}</style>
      </div>
    );
  }

  if (type === "good-sticky") {
    return (
      <div style={{ padding: "8px", position: "relative", border: "1px solid #ccc" }}>
        <a href="#maincontent-sticky" className="skip-link-sticky">
          Skip to main content
        </a>
        <header style={{ position: "sticky", top: 0, height: "60px", background: "#ccc" }}>
          <nav>Sticky Header Navigation</nav>
        </header>
        <main id="maincontent-sticky">
          <h1>Main Content Area</h1>
          <p>Heading is not hidden behind sticky header when skipped to.</p>
        </main>
        <style>{`
          html {
            scroll-behavior: smooth;
          }
          .skip-link-sticky {
            position: absolute;
            top: -40px;
            left: 0;
            background: #000;
            color: #fff;
            padding: 8px;
            z-index: 100;
            text-decoration: none;
            opacity: 0;
          }
          .skip-link-sticky:focus {
            top: 0;
            opacity: 1;
          }
          #maincontent-sticky {
            scroll-margin-top: 60px;
          }
        `}</style>
      </div>
    );
  }

  return null;
};

const page = () => {
  return (
    <>
      <PageScrollTop />
      <div className="text-center">
        <h1 className="text-center dark-color largeHeading">What is a Skip Link?</h1>
      </div>

      <p className="plainText">
        A <strong>skip link</strong> is a hidden link at the top of the page that allows users —
        especially those using screen readers or keyboard navigation — to skip directly to the
        main content, bypassing repetitive navigation menus.
      </p>

      <h2 className="sub-title">Why is a Skip Link Important?</h2>
      <ul className="importantNote unListType plainText">
        <li>Speeds up navigation for keyboard and screen reader users.</li>
        <li>Prevents repetitive tabbing through large navigation menus.</li>
        <li>Required for WCAG 2.4.1 — “Bypass Blocks.”</li>
        <li>Helps users with mobility impairments reach content faster.</li>
      </ul>

      <div className="grid lg:grid-cols-1 lg:grid-cols-2 gap-8">
        <CodeSnippet
          code={`<a href="#maincontent" class="skip-link">Skip to main content</a>
...
.skip-link { top:-40px; } .skip-link:focus { top:0; }`}
          preview={<SkipLinkPreview type="good-visible" />}
          language="html"
          label="Good Example – Visible on Focus"
          captionHeading="Why it's good:"
          captionColor="green"
          caption={<ul><li>Becomes visible on focus</li><li>First in DOM</li></ul>}
        />

        <CodeSnippet
          code={`.skip-link { display:none; }`}
          preview={<SkipLinkPreview type="bad-hidden" />}
          language="html"
          label="Bad Example – Hidden from Everyone"
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={<ul><li>Invisible for all users</li><li>Fails WCAG 2.4.1</li></ul>}
        />

        <CodeSnippet
          code={`html { scroll-behavior: smooth; }
#maincontent { scroll-margin-top: 60px; }`}
          preview={<SkipLinkPreview type="good-sticky" />}
          language="html"
          label="Good Example – Smooth Scroll + Sticky Header Fix"
          captionHeading="Why it's good:"
          captionColor="green"
          caption={<ul><li>Solves sticky header issue</li><li>Improves user experience</li></ul>}
        />
      </div>
    </>
  );
};

export default page;
