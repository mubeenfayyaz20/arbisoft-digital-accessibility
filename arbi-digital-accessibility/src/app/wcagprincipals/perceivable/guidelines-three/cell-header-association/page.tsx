import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import ImageWithCaption from "@/app/components/ImageWithCaption";
import GoBackButton from "@/app/components/BackButton";
import PageScrollTop from "@/app/components/PageScrollTop";

export const metadata: Metadata = {
  title: "Cell-Header Association Compliance | Arbi Digital Accessibility",
  description:
    "Ensure every data cell in a table is associated with its correct header using scope or headers attributes. WCAG 1.3.1 compliant.",
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
          Cell-Header Association
        </h1>
      </div>

      <h2 className="sub-title">Who Benefits</h2>
      <ul className="importantNote unListType plainText">
        <li>
          Screen reader users who rely on header associations for table context.
        </li>
        <li>
          Users navigating data with keyboard shortcuts (row/column
          relationships).
        </li>
        <li>Developers ensuring semantic data structures.</li>
        <li>Anyone interpreting complex or multidimensional data.</li>
      </ul>

      {/* GOOD EXAMPLE 1: Simple Table with scope */}
      <h2 className="sub-title">Correct Example: Simple Table</h2>
      <CodeSnippet
        code={`<table>
  <caption>Product Prices</caption>
  <thead>
    <tr>
      <th scope="col">Product</th>
      <th scope="col">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Notebook</td>
      <td>$5.99</td>
    </tr>
    <tr>
      <td>Pen</td>
      <td>$1.49</td>
    </tr>
  </tbody>
</table>`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="Simple Table Using scope= col for Column Headers"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>
              Uses <code>scope=&quot;col&quot;</code> to associate headers with data cells
              in columns.
            </li>
            <li>
              Improves navigation and comprehension for assistive technology
              users.
            </li>
            <li>Works well for simple, one-level tables.</li>
          </ul>
        }
      />

      {/* BAD EXAMPLE */}
      <h2 className="sub-title">Incorrect Example</h2>
      <CodeSnippet
        code={`<table>
  <tr>
    <td>Product</td>
    <td>Price</td>
  </tr>
  <tr>
    <td>Notebook</td>
    <td>$5.99</td>
  </tr>
</table>`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="html"
        label="Table Without Proper Header Association"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>
              Fails to use <code>&lt;th&gt;</code> or <code>scope</code>/
              <code>headers</code> attributes.
            </li>
            <li>
              Screen readers can&apos;t determine relationships between data cells.
            </li>
            <li>Users may not understand the meaning of each value.</li>
            <li>Fails WCAG 1.3.1 for Info and Relationships.</li>
          </ul>
        }
      />
      {/* GOOD EXAMPLE 2: Complex Table with headers/id */}
      <h2 className="sub-title">Correct Example: Complex Table</h2>
      <CodeSnippet
        code={`<table>
  <caption>Employee Work Hours</caption>
  <thead>
    <tr>
      <th id="name">Name</th>
      <th id="monday">Monday</th>
      <th id="tuesday">Tuesday</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td headers="name">Alice</td>
      <td headers="monday">8</td>
      <td headers="tuesday">7</td>
    </tr>
    <tr>
      <td headers="name">Bob</td>
      <td headers="monday">6</td>
      <td headers="tuesday">8</td>
    </tr>
  </tbody>
</table>`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="Complex Table Using headers/id for Explicit Association"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>
              Uses <code>id</code> on headers and <code>headers</code> on data
              cells to form clear relationships.
            </li>
            <li>
              Essential for complex tables with multiple headers per cell.
            </li>
            <li>
              Ensures assistive tech reads the correct context for each data
              point.
            </li>
          </ul>
        }
      />

      <h2 className="sub-title">Why This Matters</h2>
      <ul className="importantNote unListType margin-0">
        <li>
          Screen readers announce associated headers when reading table cells.
        </li>
        <li>Improves understanding of relationships between data.</li>
        <li>Complies with WCAG 1.3.1 (Info and Relationships).</li>
        <li>Prevents confusion in complex tabular content.</li>
      </ul>

      <ImageWithCaption
        src="/cell-header-association.png"
        alt="VoiceOver reading column header and cell value in a complex table"
        caption="VoiceOver reads: 'Name: Alice, Monday: 8, Tuesday: 7'"
        width={600}
        height={350}
      />

      <div className="text-start">
        <GoBackButton />
      </div>
    </>
  );
}
