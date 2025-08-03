import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import ImageWithCaption from "@/app/components/ImageWithCaption";
import GoBackButton from "@/app/components/BackButton";
import PageScrollTop from "@/app/components/PageScrollTop";
import { GoodExample, BadExample } from "./GoodBadExamples";

export const metadata: Metadata = {
  title:
    "1.1 Guideline - Video Alternative Equivalent | Arbi Digital Accessibility",
  description:
    "Understand the importance of providing text-based alternatives for video content to meet WCAG 1.1 requirements and ensure accessibility for users with hearing or cognitive disabilities.",
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
          Video Alternative Equivalent
        </h1>
      </div>

      <h2 className="sub-title">Who Benefits</h2>
      <ul className="importantNote unListType plainText">
        <li>Deaf and hard-of-hearing users who cannot hear audio.</li>
        <li>Users in sound-off environments (e.g. public transit).</li>
        <li>
          People with cognitive disabilities who benefit from reading along.
        </li>
        <li>Improves indexing and search for video content.</li>
      </ul>

      <ImageWithCaption
        src="/video-transcript.png"
        alt="Visual showing video with caption and transcript available alongside"
        caption="Video content paired with caption and transcript for accessibility"
        width={500}
        height={300}
      />

      <h2 className="sub-title">Good Example</h2>
      <CodeSnippet
        preview={<GoodExample />}
        code={`<video controls aria-describedby="video-transcript">
  <source src="customer-support.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
<div id="video-transcript">
  <h3>Transcript</h3>
  <p>
   Hi, I’m having trouble logging into my account. It keeps saying my password is incorrect, even after I reset it.
  </p>
</div>`}
        language="html"
        label="Accessible Video with Transcript (Good Example)"
        captionHeading="Why it's good:"
        captionColor="green"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>
              Includes transcript for screen reader users and non-hearing users.
            </li>
            <li>
              Transcript is programmatically associated using aria-describedby.
            </li>
            <li>Enhances accessibility and comprehension.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Bad Example</h2>
      <CodeSnippet
        code={`<video controls>
  <source src="customer-support.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>`}
        preview={<BadExample />}
        language="html"
        label="Video Without Transcript (Bad Example)"
        captionHeading="Why it's bad:"
        captionColor="red"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>
              No transcript or captions provided for users who can’t hear.
            </li>
            <li>
              Doesn’t meet WCAG success criteria 1.2.1 (Audio-only and
              Video-only).
            </li>
            <li>
              Lacks semantic support for screen readers or assistive tech.
            </li>
          </ul>
        }
      />

      <div className="text-start">
        <GoBackButton />
      </div>
    </>
  );
}
