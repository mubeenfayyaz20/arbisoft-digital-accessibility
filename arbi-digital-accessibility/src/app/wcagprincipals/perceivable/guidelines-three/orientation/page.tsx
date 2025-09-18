import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import ImageWithCaption from "@/app/components/ImageWithCaption";
import GoBackButton from "@/app/components/BackButton";
import PageScrollTop from "@/app/components/PageScrollTop";

export const metadata: Metadata = {
  title: "Orientation | Arbi Digital Accessibility",
  description:
    "Ensure content and functionality are not restricted to a single display orientation. Compliant with WCAG 1.3.4.",
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
          Orientation
        </h1>
      </div>

      <h2 className="sub-title">Who Benefits</h2>
      <ul className="importantNote unListType plainText">
        <li>People with motor disabilities using mounted or fixed devices.</li>
        <li>Users with devices mounted in a specific orientation (e.g. wheelchair users).</li>
        <li>Complies with WCAG 1.3.4 – Orientation.</li>
      </ul>

      {/* GOOD EXAMPLE */}
      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`@media screen and (orientation: landscape), screen and (orientation: portrait) {
  .content {
    display: block;
  }
}`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="css"
        label="Responsive Design for All Orientations"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Supports both portrait and landscape orientations.</li>
            <li>Content is accessible regardless of device orientation.</li>
            <li>Fulfills WCAG guideline for orientation independence.</li>
          </ul>
        }
      />

      {/* BAD EXAMPLE */}
      <h2 className="sub-title">Incorrect Example</h2>
      <CodeSnippet
        code={`if (window.orientation !== 90) {
  alert("Please rotate your device to landscape mode.");
}`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="javascript"
        label="Restricted to Landscape Orientation"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Forces users to switch to a specific orientation.</li>
            <li>Not accessible for users who cannot rotate their devices.</li>
            <li>Fails WCAG 1.3.4 – restricts content to one orientation.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Why This Matters</h2>
      <ul className="importantNote unListType margin-0">
        <li>Users should access content in any orientation.</li>
        <li>Important for users with fixed or mounted devices.</li>
        <li>Promotes inclusive and flexible design.</li>
        <li>Supports WCAG 1.3.4 compliance for orientation.</li>
      </ul>

      <ImageWithCaption
        src="/orientation.png"
        alt="Mobile device locked in portrait mode showing inaccessible message asking user to rotate."
        caption="Bad Example – Content restricted to landscape orientation."
        width={600}
        height={350}
      />

      <div className="text-start">
        <GoBackButton />
      </div>
    </>
  );
}
