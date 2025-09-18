import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import ImageWithCaption from "@/app/components/ImageWithCaption";
import GoBackButton from "@/app/components/BackButton";
import PageScrollTop from "@/app/components/PageScrollTop";

export const metadata: Metadata = {
  title: "Layout Table Structure Compliance | Arbi Digital Accessibility",
  description:
    "Ensure tables are not misused for layout purposes. Use CSS for layout and reserve <table> elements for data only. WCAG 1.3.1 compliant.",
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
          Layout Table Structure
        </h1>
      </div>

      <h2 className="sub-title">Who Benefits</h2>
      <ul className="importantNote unListType plainText">
        <li>Screen reader users who rely on tables for data, not layout.</li>
        <li>Keyboard-only users who need predictable navigation.</li>
        <li>Developers and designers building responsive, accessible websites.</li>
        <li>Complies with WCAG 1.3.1 – Info and Relationships.</li>
      </ul>

      {/* GOOD EXAMPLE */}
      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`<div class="layout-grid">
  <div class="left-column">
    <h2>Profile</h2>
    <p>Alice Smith</p>
  </div>
  <div class="right-column">
    <h2>Details</h2>
    <p>Occupation: Designer</p>
  </div>
</div>`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="Layout with Semantic Elements and CSS"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Uses <code>&lt;div&gt;</code> elements with CSS for layout structure.</li>
            <li>No misuse of <code>&lt;table&gt;</code> elements for visual placement.</li>
            <li>Clear separation of layout from content.</li>
            <li>Responsive design compatible and assistive tech-friendly.</li>
          </ul>
        }
      />

      {/* BAD EXAMPLE */}
      <h2 className="sub-title">Incorrect Example</h2>
      <CodeSnippet
        code={`<table>
  <tr>
    <td><h2>Profile</h2><p>Alice Smith</p></td>
    <td><h2>Details</h2><p>Occupation: Designer</p></td>
  </tr>
</table>`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="html"
        label="Table Used for Visual Layout"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Uses a <code>&lt;table&gt;</code> for visual layout instead of data presentation.</li>
            <li>Screen readers interpret this as data, causing confusion.</li>
            <li>No real data relationships exist between rows/columns.</li>
            <li>Fails WCAG 1.3.1 by not conveying correct semantic meaning.</li>
          </ul>
        }
      />

      {/* GOOD EXAMPLE 2 */}
      <h2 className="sub-title">Correct Example – Common Layout</h2>
      <CodeSnippet
        code={`<header>
  <nav>
    <ul class="flex space-x-4">
      <li><a href="/home">Home</a></li>
      <li><a href="/services">Services</a></li>
      <li><a href="/contact">Contact</a></li>
    </ul>
  </nav>
</header>`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="Header Navigation with Flexbox"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Uses semantic <code>&lt;header&gt;</code> and <code>&lt;nav&gt;</code> for structural layout.</li>
            <li>CSS Flexbox handles horizontal arrangement.</li>
            <li>No need to misuse tables for menu layout.</li>
            <li>Accessible and easily navigable by assistive tech.</li>
          </ul>
        }
      />

      {/* BAD EXAMPLE 2 */}
      <h2 className="sub-title">Incorrect Example – Menu with Table</h2>
      <CodeSnippet
        code={`<table>
  <tr>
    <td><a href="/home">Home</a></td>
    <td><a href="/services">Services</a></td>
    <td><a href="/contact">Contact</a></td>
  </tr>
</table>`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="html"
        label="Menu Built Using Table Layout"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Misuses table elements to control layout of links.</li>
            <li>Confuses screen readers and users expecting tabular data.</li>
            <li>No semantic value for a navigation list.</li>
            <li>Harder to style responsively than CSS layout options.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Why This Matters</h2>
      <ul className="importantNote unListType margin-0">
        <li>Layout tables confuse screen readers that expect real data relationships.</li>
        <li>Using CSS and semantic HTML ensures better accessibility and responsiveness.</li>
        <li>Helps AT users understand the actual meaning of content and sections.</li>
        <li>Required by WCAG 1.3.1 – separating structure from presentation.</li>
      </ul>

      <ImageWithCaption
        src="/table-layout-structure.png"
        alt="VoiceOver mistakenly announces layout table as data"
        caption="Bad Example – VoiceOver announces row and column structure in layout tables, causing confusion"
        width={600}
        height={350}
      />

      <div className="text-start">
        <GoBackButton />
      </div>
    </>
  );
}
