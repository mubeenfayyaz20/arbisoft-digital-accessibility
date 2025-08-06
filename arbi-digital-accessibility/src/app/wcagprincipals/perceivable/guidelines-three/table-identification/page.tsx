import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import ImageWithCaption from "@/app/components/ImageWithCaption";
import GoBackButton from "@/app/components/BackButton";
import PageScrollTop from "@/app/components/PageScrollTop";

export const metadata: Metadata = {
  title: "Table Identification Compliance | Arbi Digital Accessibility",
  description:
    "Ensure all data tables are properly identified with <table> and have captions or summaries for assistive technology. WCAG 1.3.1 compliant.",
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
          Table Identification
        </h1>
      </div>

      <h2 className="sub-title">Who Benefits</h2>
      <ul className="importantNote unListType plainText">
        <li>Screen reader users needing context for tabular data.</li>
        <li>Users with cognitive disabilities who benefit from structured data.</li>
        <li>Assistive technology users who rely on semantic HTML.</li>
        <li>Developers who want to ensure content is accessible and WCAG compliant.</li>
      </ul>

      {/* GOOD EXAMPLE */}
      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`<table>
  <caption>Monthly Sales Report</caption>
  <thead>
    <tr>
      <th>Month</th>
      <th>Sales</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>January</td>
      <td>$10,000</td>
    </tr>
    <tr>
      <td>February</td>
      <td>$12,500</td>
    </tr>
  </tbody>
</table>`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="Data Table with Caption and Semantic Elements"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Uses semantic <code>&lt;table&gt;</code> for tabular data.</li>
            <li>Includes a <code>&lt;caption&gt;</code> for accessible context.</li>
            <li>Screen reader announces the caption first, then table contents.</li>
            <li>Improves understanding and navigation within data.</li>
            <li>Complies with WCAG 1.3.1 (Info and Relationships).</li>
          </ul>
        }
      />

      {/* BAD EXAMPLE */}
      <h2 className="sub-title">Incorrect Example</h2>
      <CodeSnippet
        code={`<div>
  <p>Monthly Sales Report</p>
  <div>January - $10,000</div>
  <div>February - $12,500</div>
</div>`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="html"
        label="Non-semantic Table Using Divs"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Uses <code>&lt;div&gt;</code> and <code>&lt;p&gt;</code> to simulate a table.</li>
            <li>No semantic meaning or relationship for assistive tech.</li>
            <li>Screen readers won’t recognize it as tabular data.</li>
            <li>Fails WCAG 1.3.1, creating confusion for screen reader users.</li>
            <li>Not navigable using table-specific keyboard shortcuts.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Why This Matters</h2>
      <ul className="importantNote unListType margin-0">
        <li>Tables provide essential structure to complex data.</li>
        <li>Semantic elements like <code>&lt;table&gt;</code>, <code>&lt;caption&gt;</code>, <code>&lt;thead&gt;</code>, and <code>&lt;th&gt;</code> improve comprehension.</li>
        <li>Required under WCAG 1.3.1 (Info and Relationships).</li>
        <li>Captions give context for screen reader users before hearing the data.</li>
      </ul>

      <ImageWithCaption
        src="/table-identification.png"
        alt="VoiceOver announcing caption and column headers in a table"
        caption="VoiceOver announces 'Monthly Sales Report, table with 2 columns and 2 rows'"
        width={600}
        height={350}
      />

      <div className="text-start">
        <GoBackButton />
      </div>
    </>
  );
}
