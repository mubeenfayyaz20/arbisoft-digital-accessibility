import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import ImageWithCaption from "@/app/components/ImageWithCaption";
import GoBackButton from "@/app/components/BackButton";
import PageScrollTop from "@/app/components/PageScrollTop";

export const metadata: Metadata = {
  title: "1.3.1 Guideline - List Type Compliance | Arbi Digital Accessibility",
  description:
    "Ensure all lists are marked up using semantic HTML list elements (ul, ol, li) for screen reader accessibility and WCAG 1.3.1 compliance.",
};

export default function Page() {
  return (
    <>
      <PageScrollTop />

      <div className="text-center">
        <div className="text-start absolute">
          <GoBackButton />
        </div>
        <h1 className="text-center dark-color largeHeading">List Type</h1>
      </div>

      <h2 className="sub-title">Who Benefits</h2>
      <ul className="importantNote unListType plainText">
        <li>
          Screen reader users who understand content better through list
          structure.
        </li>
        <li>
          Keyboard and assistive tech users who navigate grouped items
          efficiently.
        </li>
        <li>
          Users with cognitive disabilities who rely on visual and semantic
          groupings.
        </li>
        <li>Content authors and developers ensuring WCAG 1.3.1 compliance.</li>
      </ul>

      {/* UNORDERED LIST – GOOD EXAMPLE */}
      <h2 className="sub-title">Correct Example: Unordered List</h2>
      <CodeSnippet
        code={`<h2>Ingredients</h2>
<ul>
  <li>Flour</li>
  <li>Water</li>
  <li>Yeast</li>
</ul>`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="Semantic Unordered List"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Screen readers announce “List of 3 items”.</li>
            <li>
              Conveys relationship of items using semantic <code>ul/li</code>{" "}
              tags.
            </li>
            <li>Meets WCAG 1.3.1 by conveying grouping programmatically.</li>
          </ul>
        }
      />

      {/* UNORDERED LIST – BAD EXAMPLE */}
      <h2 className="sub-title">Incorrect Example: Unordered List</h2>
      <CodeSnippet
        code={`<p>• Flour<br>• Water<br>• Yeast</p>`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="html"
        label="Visually Styled List Only"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>
              No semantic grouping; screen readers interpret as paragraph text.
            </li>
            <li>Visually looks like a list, but lacks accessibility.</li>
            <li>
              Fails WCAG 1.3.1 because structure is not exposed to assistive
              tech.
            </li>
          </ul>
        }
      />

      {/* ORDERED LIST – GOOD EXAMPLE */}
      <h2 className="sub-title">Correct Example: Ordered List</h2>
      <CodeSnippet
        code={`<h2>Steps</h2>
<ol>
  <li>Preheat oven to 350°F.</li>
  <li>Mix flour and water.</li>
  <li>Add yeast and stir.</li>
</ol>`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="Semantic Ordered List"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Communicates sequence or order.</li>
            <li>Screen readers say “List of 3 items” and read numbers.</li>
            <li>Helps users understand step-by-step instructions clearly.</li>
          </ul>
        }
      />

      {/* ORDERED LIST – BAD EXAMPLE */}
      <h2 className="sub-title">Incorrect Example: Ordered List</h2>
      <CodeSnippet
        code={`<p>1. Preheat oven<br>2. Mix ingredients<br>3. Add yeast</p>`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="html"
        label="Visually Styled Steps"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>
              Looks like a list visually, but screen readers won’t identify it
              as such.
            </li>
            <li>No semantics, no programmatic list announcement.</li>
            <li>Fails WCAG 1.3.1 for ordered content grouping.</li>
          </ul>
        }
      />

      {/* NESTED LIST – GOOD EXAMPLE */}
      <h2 className="sub-title">Correct Example: Nested List</h2>
      <CodeSnippet
        code={`<h2>Topics</h2>
<ul>
  <li>Web Accessibility
    <ul>
      <li>ARIA</li>
      <li>Keyboard Navigation</li>
      <li>Responsive Design</li>
    </ul>
  </li>
</ul>`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="Semantic Nested List"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Nested structure is conveyed correctly to screen readers.</li>
            <li>Allows hierarchical grouping of items.</li>
            <li>Fulfills WCAG 1.3.1 with deeply structured data.</li>
          </ul>
        }
      />

      {/* NESTED LIST – BAD EXAMPLE */}
      <h2 className="sub-title">Incorrect Example: Nested List</h2>
      <CodeSnippet
        code={`<p>• Web Accessibility<br>  - ARIA<br>  - Keyboard Nav<br>  - Responsive Design</p>`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="html"
        label="Styled Text with Indents"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Uses indentation and symbols but no semantic structure.</li>
            <li>
              Screen readers interpret it as plain text, not hierarchical list.
            </li>
            <li>Fails WCAG 1.3.1 for conveying nested relationships.</li>
          </ul>
        }
      />

      {/* ACCORDION – GOOD EXAMPLE */}
      <h2 className="sub-title">Correct Example: Accordion List</h2>
      <CodeSnippet
        code={`<button aria-expanded="false" aria-controls="faq1" id="toggle1">
  What is WCAG?
</button>
<div id="faq1" hidden>
  <ul>
    <li>Web Content Accessibility Guidelines.</li>
    <li>International standard for accessibility.</li>
  </ul>
</div>`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="Accordion with Semantic List"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>
              Proper use of <code>aria-expanded</code> and{" "}
              <code>aria-controls</code>.
            </li>
            <li>
              Content includes semantic list structure inside disclosure panel.
            </li>
            <li>
              Screen readers can understand both the interaction and the list
              inside.
            </li>
          </ul>
        }
      />

      {/* ACCORDION – BAD EXAMPLE */}
      <h2 className="sub-title">Incorrect Example: Accordion List</h2>
      <CodeSnippet
        code={`<div class="accordion">What is WCAG?</div>
<div style="display: none;">
  Web Content Accessibility Guidelines:
  - Accessibility standard
  - Used worldwide
</div>`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="html"
        label="Accordion Without Semantics"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>No ARIA attributes to indicate expand/collapse state.</li>
            <li>List is plain text with dashes — not semantic.</li>
            <li>Fails both structure and interactive accessibility.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Why This Matters</h2>
      <ul className="importantNote unListType margin-0">
        <li>
          Ensures list relationships are communicated to screen readers and
          assistive tech.
        </li>
        <li>Improves understanding of content structure and grouping.</li>
        <li>
          Fulfills WCAG 1.3.1 by ensuring lists are programmatically
          determinable.
        </li>
        <li>
          Enhances usability for all users, including those using voice and
          keyboard navigation.
        </li>
      </ul>

      <ImageWithCaption
        src="/list-type.png"
        alt="VoiceOver Rotor showing a semantic list of ingredients"
        caption="Screen reader users can navigate lists when semantic HTML is used"
        width={600}
        height={350}
      />

      <div className="text-start">
        <GoBackButton />
      </div>
    </>
  );
}
