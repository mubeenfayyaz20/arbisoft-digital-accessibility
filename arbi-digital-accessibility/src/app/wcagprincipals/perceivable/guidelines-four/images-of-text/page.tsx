import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import ImageWithCaption from "@/app/components/ImageWithCaption";
import GoBackButton from "@/app/components/BackButton";
import PageScrollTop from "@/app/components/PageScrollTop";
import Image from "next/image";

export const metadata: Metadata = {
  title: "1.4.5 Guideline - Images of Text | Arbi Digital Accessibility",
  description:
    "Avoid using images of text to ensure content is readable, resizable, and accessible, as per WCAG 1.4.5.",
};

export default function Page() {
  return (
    <>
      <PageScrollTop />

      <div className="text-center">
        <div className="text-start absolute">
          <GoBackButton />
        </div>
        <h1 className="text-center dark-color largeHeading">Images of Text</h1>
      </div>

      <h2 className="sub-title">Who Benefits</h2>
      <ul className="importantNote unListType plainText">
        <li>Users with low vision who need to resize or style text for readability.</li>
        <li>Screen reader users who rely on accessible, selectable, and searchable text.</li>
        <li>Users on mobile devices where text must adapt to different screen sizes.</li>
        <li>Users who personalize fonts, contrast, or background color for better readability.</li>
      </ul>

      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`<div className="promo-text">
  <h2>Special Offer: 50% Off!</h2>
</div>`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="Text as Real HTML (Good Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Fully accessible to screen readers and assistive tech.</li>
            <li>Can be styled, zoomed, and customized by the user.</li>
            <li>Responsive and readable on all screen sizes.</li>
          </ul>
        }
      />

        <h2 className="sub-title">Incorrect Example</h2>
      <CodeSnippet
        code={`<img src="/image-text-special-offer.png" alt="Special Offer: 50% Off!" />`}
        captionHeading="Why it's bad:"
        preview={
          <Image src="/image-text-special-offer.png"    width={400}
            height={400}  alt="Special Offer: 50% Off!" />
        }
        captionColor="red"
        language="html"
        label="Text as Image (Bad Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Text is part of the image and not selectable or resizable.</li>
            <li>Cannot be adjusted for contrast or font by the user.</li>
            <li>May blur on high-resolution or zoomed screens.</li>
            <li>Common on banners, buttons, and ads on real websites.</li>
          </ul>
        }
      />


      <h2 className="sub-title">Incorrect Example</h2>
      <CodeSnippet
        code={`<img src="/quote-image-of-text.png" alt="Inspiration quote: Never give up." />`}
        captionHeading="Why it's bad:"
         preview={
          <Image src="/quote-image-of-text.png"  width={400}
            height={400} alt="Inspiration quote: Never give up." />
          }
        captionColor="red"
        language="html"
        label="Decorative Quotes in Image (Bad Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Visual style forces users to interpret fixed text.</li>
            <li>Zooming or font preference won’t apply.</li>
            <li>Fails when image fails to load or on small screens.</li>
            <li>Common in quote-of-the-day and testimonials sections.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`<blockquote>
  <p>"Never give up."</p>
  <cite>— Anonymous</cite>
</blockquote>`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="Accessible Quote (Good Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Preserves semantic meaning with <code>&lt;blockquote&gt;</code> and <code>&lt;cite&gt;</code>.</li>
            <li>Fully resizable and readable with zoom or custom styles.</li>
            <li>Better experience for screen reader and mobile users.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Why This Matters</h2>
      <ul className="importantNote unListType margin-0">
        <li>Images of text cannot be customized or resized easily.</li>
        <li>They break accessibility and flexibility across devices.</li>
        <li>Text-based content should use HTML to ensure readability, styling, and responsiveness.</li>
        <li>Exceptions may apply only for logos or custom branding when necessary.</li>
      </ul>

      <ImageWithCaption
        src="/text-of-image.png"
        alt="Example showing image-based text that's unreadable when zoomed"
        caption="Image-based text often becomes blurry or unreadable with zoom. Real text ensures clarity and accessibility."
        width={600}
        height={350}
      />

      <div className="text-start">
        <GoBackButton />
      </div>
    </>
  );
}
