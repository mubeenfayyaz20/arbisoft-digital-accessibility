import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import ImageWithCaption from "@/app/components/ImageWithCaption";
import GoBackButton from "@/app/components/BackButton";
import PageScrollTop from "@/app/components/PageScrollTop";
import VideoWithCaptions from "../../../../components/VideoWithCaptions";

export const metadata: Metadata = {
  title:
    "1.2.2 Guideline - Captions for Prerecorded Video | Arbi Digital Accessibility",
  description:
    "Ensure that all prerecorded videos include synchronized captions to meet WCAG 1.2.2 compliance. Improve accessibility for Deaf and hard of hearing users by providing equivalent text alternatives for spoken content.",
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
          Captions for Prerecorded Video
        </h1>
      </div>

      <h2 className="sub-title">Who Benefits</h2>
      <ul className="importantNote unListType plainText">
        <li>
          People who are Deaf or hard of hearing and need text alternatives to
          spoken content.
        </li>
        <li>
          Users in noisy or quiet environments where audio cannot be heard
          properly.
        </li>
        <li>
          Individuals with cognitive or learning disabilities who benefit from
          reading and listening together.
        </li>
        <li>
          Non-native language speakers who find it easier to understand written
          text.
        </li>
      </ul>

      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`<video controls>
  <source src="complaint-video.mp4" type="video/mp4" />
  <track src="complaint-captions.vtt" kind="captions" srclang="en" label="English" default />
  Your browser does not support the video tag.
</video>`}
        // preview={<GoodExample />}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        preview={<VideoWithCaptions />}
        label="Video With Captions (Good Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Provides synchronized captions for all spoken content.</li>
            <li>
              Captions are embedded using a <code>&lt;track&gt;</code> element.
            </li>
            <li>Allows users to turn captions on or off as needed.</li>
            <li>Complies with WCAG 1.2.2 Captions (Prerecorded).</li>
          </ul>
        }
      />

      <h2 className="sub-title">Incorrect Example</h2>
      <CodeSnippet
        code={`<video controls>
  <source src="complaint-video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="html"
        label="Video Without Captions (Bad Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>No captions are provided for spoken dialogue.</li>
            <li>Deaf or hard of hearing users miss critical information.</li>
            <li>
              Fails to meet WCAG 1.2.2 Captions (Prerecorded) requirement.
            </li>
          </ul>
        }
      />

      <h2 className="sub-title">Why This Matters</h2>
      <ul className="importantNote unListType margin-0">
        <li>
          Captions provide an equal experience for users who cannot hear the
          audio.
        </li>
        <li>
          They improve understanding, retention, and accessibility for all
          users.
        </li>
        <li>
          Captions are a WCAG Level A requirement for all prerecorded video
          content with speech.
        </li>
      </ul>

      <ImageWithCaption
        src="/pre-record-captions.jpg"
        alt="Video player showing captions at the bottom"
        caption="Synchronized captions make videos accessible for Deaf and hard of hearing users"
        width={500}
        height={300}
      />

      <div className="text-start">
        <GoBackButton />
      </div>
    </>
  );
}
