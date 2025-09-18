import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import ImageWithCaption from "@/app/components/ImageWithCaption";
import GoBackButton from "@/app/components/BackButton";
import PageScrollTop from "@/app/components/PageScrollTop";

export const metadata: Metadata = {
  title: "Guideline - Reflow | Arbi Digital Accessibility",
  description:
    "Ensure content reflows without loss of information or functionality when viewed at 320px width to comply with WCAG 1.4.10.",
};

export default function Page() {
  return (
    <>
      <PageScrollTop />

      <div className="text-center">
        <div className="text-start md:relative lg:absolute">
          <GoBackButton />
        </div>
        <h1 className="text-center dark-color largeHeading">Reflow</h1>
      </div>

      <h2 className="sub-title">Who Benefits</h2>
      <ul className="importantNote unListType plainText">
        <li>Users with low vision who use browser zoom or screen magnifiers.</li>
        <li>Mobile users accessing content on narrow screens.</li>
        <li>Users with motor disabilities who avoid horizontal scrolling.</li>
        <li>Users with cognitive disabilities who benefit from simple layouts.</li>
      </ul>

      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`.container {
  display: flex;
  flex-wrap: wrap;
}

.sidebar {
  flex: 1 1 200px;
}

.main-content {
  flex: 2 1 400px;
}`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="css"
        label="Flexible Grid Layout (Good Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Uses <code>flex-wrap</code> to wrap items on smaller screens.</li>
            <li>Content reflows vertically without horizontal scroll.</li>
            <li>Common in responsive layouts for blogs and dashboards.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Incorrect Example</h2>
      <CodeSnippet
        code={`.container {
  display: flex;
  white-space: nowrap;
  overflow-x: auto;
}

.sidebar {
  width: 300px;
}

.main-content {
  width: 1000px;
}`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="css"
        label="Fixed Width Layout (Bad Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Uses fixed widths that don’t adapt to screen size.</li>
            <li>Forces horizontal scrolling on small screens.</li>
            <li>Breaks layout and usability when zoomed in or viewed on mobile.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`<div className="product-grid">
  <div className="product-card">Product 1</div>
  <div className="product-card">Product 2</div>
</div>

<style jsx>{\`
  .product-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
\`}</style>`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="Responsive Product Grid (Good Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Adapts number of columns based on screen width.</li>
            <li>No horizontal scroll needed at 320px screen width.</li>
            <li>Used in ecommerce, landing pages, etc.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Incorrect Example</h2>
      <CodeSnippet
        code={`<div class="form-inline">
  <label for="email">Email:</label>
  <input type="email" id="email" />
  <button>Submit</button>
</div>

<style>
  .form-inline {
    white-space: nowrap;
  }

  input {
    width: 300px;
  }
</style>`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="html"
        label="Form That Breaks on Zoom (Bad Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Forces inline layout without wrapping.</li>
            <li>Breaks completely on small screens or 400% zoom.</li>
            <li>Common problem in login/sign-up forms.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Why This Matters</h2>
      <ul className="importantNote unListType margin-0">
        <li>Users should be able to read and interact with content without horizontal scrolling.</li>
        <li>Supports narrow viewports like phones or when zoomed in up to 400%.</li>
        <li>Essential for mobile accessibility and responsive design.</li>
        <li>WCAG 1.4.10 requires content to reflow without loss of information or functionality.</li>
      </ul>

      <ImageWithCaption
        src="/reflow.png"
        alt="Content reflows vertically at 320px without horizontal scroll"
        caption="Responsive layout with column wrapping ensures readability on small screens or when zoomed."
        width={600}
        height={350}
      />

      <div className="text-start ">
        <GoBackButton />
      </div>
    </>
  );
}
