import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import ImageWithCaption from "@/app/components/ImageWithCaption";
import GoBackButton from "@/app/components/BackButton";
import PageScrollTop from "@/app/components/PageScrollTop";

export const metadata: Metadata = {
  title: "Content Order Meaning via CSS Position | Arbi Digital Accessibility",
  description:
    "Ensure that CSS positioning does not disrupt the logical reading order. Maintain meaningful content order for screen readers. WCAG 1.3.2 compliant.",
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
          Content Order Meaning (CSS Position)
        </h1>
      </div>

      <h2 className="sub-title">Who Benefits</h2>
      <ul className="importantNote unListType plainText">
        <li>Screen reader users who rely on logical reading order.</li>
        <li>Keyboard-only users who navigate sequentially through content.</li>
        <li>Developers ensuring separation of content structure and visual design.</li>
        <li>Complies with WCAG 1.3.2 – Meaningful Sequence.</li>
      </ul>

      {/* GOOD EXAMPLE */}
      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`<div class="container">
  <h2>News</h2>
  <p>Today's top stories...</p>
  <aside class="sidebar">Related Links</aside>
</div>`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="Logical Source Order with Visual Positioning"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Content is ordered meaningfully in the HTML source.</li>
            <li>CSS is used for visual styling (e.g., sidebar on the right).</li>
            <li>Screen readers will follow the content logically.</li>
            <li>Maintains both accessibility and visual design.</li>
          </ul>
        }
      />

      {/* BAD EXAMPLE */}
      <h2 className="sub-title">Incorrect Example</h2>
      <CodeSnippet
        code={`<div class="container">
  <aside class="sidebar" style="position: absolute; left: 0; top: 0;">Related Links</aside>
  <h2>News</h2>
  <p>Today's top stories...</p>
</div>`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="html"
        label="Incorrect Visual Over Source Order"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>HTML source puts the sidebar first.</li>
            <li>Visual appearance may seem correct, but reading order is broken.</li>
            <li>Screen readers will read sidebar content before main news content.</li>
            <li>Violates WCAG 1.3.2 – the sequence does not preserve meaning.</li>
          </ul>
        }
      />

      {/* GOOD EXAMPLE 2 */}
      <h2 className="sub-title">Correct Example – Responsive Layout</h2>
      <CodeSnippet
        code={`<main>
  <section>
    <h2>Main Content</h2>
    <p>This is the central information area.</p>
  </section>
  <footer>
    <p>Footer Info</p>
  </footer>
</main>`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="Semantic Order Maintained in Responsive Design"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Source order is preserved regardless of screen size or layout.</li>
            <li>Visual arrangement is handled with CSS Grid or Flexbox.</li>
            <li>Improves readability for screen reader users on all devices.</li>
            <li>Fully accessible and WCAG compliant.</li>
          </ul>
        }
      />

      {/* BAD EXAMPLE 2 */}
      <h2 className="sub-title">Incorrect Example – Visual Order Only</h2>
      <CodeSnippet
        code={`<main>
  <footer style="order: -1">Footer Info</footer>
  <section>
    <h2>Main Content</h2>
    <p>This is the central information area.</p>
  </section>
</main>`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="html"
        label="Visual Order Overrides Source Order"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Footer appears visually first but comes after in source order.</li>
            <li>Screen reader announces footer content before the main section.</li>
            <li>This creates confusion and fails meaningful sequence requirements.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Why This Matters</h2>
      <ul className="importantNote unListType margin-0">
        <li>Screen reader users depend on logical source order to understand content.</li>
        <li>Visual CSS should not disrupt the natural reading flow.</li>
        <li>Accessible designs maintain both semantic and visual clarity.</li>
        <li>Required by WCAG 1.3.2 – ensure meaningful sequence regardless of CSS.</li>
      </ul>

      <ImageWithCaption
        src="/content-order-meaning-css.png"
        alt="VoiceOver reads content in source order regardless of visual layout"
        caption="Bad Example – VoiceOver reads sidebar before main content due to source order mismatch."
        width={600}
        height={350}
      />

      <div className="text-start">
        <GoBackButton />
      </div>
    </>
  );
}