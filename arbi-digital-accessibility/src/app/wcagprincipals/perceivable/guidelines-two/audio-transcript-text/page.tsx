import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import ImageWithCaption from "@/app/components/ImageWithCaption";
import GoBackButton from "@/app/components/BackButton";
import PageScrollTop from "@/app/components/PageScrollTop";
import VideoWithCaptions from "@/app/components/VideoWithCaptions";

export const metadata: Metadata = {
  title: "1.2.1 Guideline - Audio Description or Media Alternative (Prerecorded) | Arbi Digital Accessibility",
  description:
    "Ensure audio-only and video-only content provides an alternative such as a full transcript or audio description to comply with WCAG 1.2.1 for accessibility.",
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
          Audio Description or Media Alternative (Prerecorded)
        </h1>
      </div>

      <h2 className="sub-title">Who Benefits</h2>
      <ul className="importantNote unListType plainText">
        <li>Deaf and hard of hearing users who require text alternatives to audio content.</li>
        <li>Blind users who need audio descriptions of video-only content.</li>
        <li>People in sound-off environments (e.g., offices, public transit).</li>
        <li>Users with learning disabilities who benefit from reading while listening.</li>
        <li>Search engines, as transcripts improve SEO and discoverability.</li>
      </ul>

      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`<video controls aria-describedby="video-transcript">
  <source src="/VoiceOverPracticeFeatureDemo.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
<div id="video-transcript">
  <h3>Transcript</h3>
  <p>
    Hi everyone this is Paul J. Adam and I'm recording a demonstration video
    to show you how to use the VoiceOver Practice feature...
    [Full transcript continues here with time-synced captions].
  </p>
</div>`}
        preview={<VideoWithCaptions />}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="Video with Transcript (Good Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Full descriptive transcript is provided alongside video.</li>
            <li>Ensures accessibility for users who cannot see or hear the content.</li>
            <li><code>aria-describedby</code> links the video to its text alternative.</li>
            <li>Fulfills WCAG 1.2.1 and supports both deaf and blind users.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Incorrect Example</h2>
      <CodeSnippet
        code={`<video controls>
  <source src="/VoiceOverPracticeFeatureDemo.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>`}
        // preview={<BadExample />}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="html"
        label="Video Without Transcript or Description (Bad Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>No transcript or audio description is available.</li>
            <li>Users with hearing impairments cannot perceive the spoken information.</li>
            <li>Fails WCAG 1.2.1 compliance for prerecorded media alternatives.</li>
            <li>Excludes a significant portion of users from accessing the content.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Why This Matters</h2>
      <ul className="importantNote unListType margin-0">
        <li>Ensures equitable access to multimedia content.</li>
        <li>Required for WCAG 1.2.1 compliance: Media alternatives must be provided for audio or video content.</li>
        <li>Improves usability across a wide range of disabilities and environments.</li>
      </ul>

      <ImageWithCaption
        src="/pre-record-captions.jpg"
        alt="A video player with synchronized captions and transcript visible below"
        caption="Accessible video with synchronized captions and descriptive transcript"
        width={600}
        height={350}
      />

      <div className="text-start">
        <GoBackButton />
      </div>
    </>
  );
}
