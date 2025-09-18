import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import ImageWithCaption from "@/app/components/ImageWithCaption";
import GoBackButton from "@/app/components/BackButton";
import PageScrollTop from "@/app/components/PageScrollTop";

export const metadata: Metadata = {
  title: "Resize Text | Arbi Digital Accessibility",
  description:
    "Ensure that text can be resized up to 200% without loss of content or functionality to comply with WCAG 1.4.4.",
};

export default function Page() {
  return (
    <>
      <PageScrollTop />

      <div className="text-center">
        <div className="text-start md:relative lg:absolute">
          <GoBackButton />
        </div>
        <h1 className="text-center dark-color largeHeading">Resize Text</h1>
      </div>

      <h2 className="sub-title">Who Benefits</h2>
      <ul className="importantNote unListType plainText">
        <li>Users with low vision who need to increase text size for readability.</li>
        <li>Older adults with declining vision.</li>
        <li>Users with cognitive impairments who benefit from simplified layouts.</li>
        <li>Mobile users who zoom in for better clarity.</li>
      </ul>

      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`body {
  font-size: 100%;
}

p {
  font-size: 1rem;
}`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="css"
        label="Relative Font Sizing (Good Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Uses relative units (<code>em</code>, <code>rem</code>, <code>%</code>) rather than fixed pixels.</li>
            <li>Allows text to scale when browser zoom is used.</li>
            <li>Maintains layout integrity when text is resized.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Incorrect Example</h2>
      <CodeSnippet
        code={`body {
  font-size: 14px;
}

p {
  font-size: 12px;
}`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="css"
        label="Fixed Font Sizes (Bad Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Hard-coded pixel values don’t scale well with zooming.</li>
            <li>Text may remain small even after browser zoom is applied.</li>
            <li>Can lead to content clipping or overflow issues.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`<div style={{ maxWidth: '600px', lineHeight: '1.5' }}>
  <p style={{ fontSize: '1.2rem' }}>
    Responsive and resizable text with sufficient line spacing.
  </p>
</div>`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="Scalable Layout (Good Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Uses <code>rem</code> for scalability.</li>
            <li>Content remains readable and contained at 200% zoom.</li>
            <li>Common in blogs, news sites, and editorial pages.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Why This Matters</h2>
      <ul className="importantNote unListType margin-0">
        <li>Text must remain readable and functional when resized up to 200%.</li>
        <li>Supports accessibility for users with low vision or cognitive impairments.</li>
        <li>WCAG 1.4.4 requires no loss of content or functionality during resizing.</li>
        <li>Improves usability for all users across devices.</li>
      </ul>

      <ImageWithCaption
        src="/contrast-minimum.png"
        alt="Text resized to 200% remains readable and well-structured"
        caption="Good typography and layout ensure accessibility even at 200% zoom."
        width={600}
        height={350}
      />

      <div className="text-start">
        <GoBackButton />
      </div>
    </>
  );
}
