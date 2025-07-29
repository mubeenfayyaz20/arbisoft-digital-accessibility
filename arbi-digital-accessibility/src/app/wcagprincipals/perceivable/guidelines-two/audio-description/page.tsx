import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import ImageWithCaption from "@/app/components/ImageWithCaption";
import GoBackButton from "@/app/components/BackButton";
import PageScrollTop from "@/app/components/PageScrollTop";
import { GoodExample, BadExample } from "./GoodBadExamples";


export const metadata: Metadata = {
  title: "1.2.1 Guideline - Audio Transcript Text of Complaints | Arbi Digital Accessibility",
  description:
    "Ensure audio content has synchronized transcripts to meet WCAG 1.2.1 compliance. Improve accessibility for Deaf and hard of hearing users by providing meaningful text alternatives.",
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
          Audio Transcript Text of Complaints
        </h1>
      </div>

      <h2 className="sub-title">Who Benefits</h2>
      <ul className="importantNote unListType plainText">
        <li>Improves accessibility for Deaf and hard of hearing users.</li>
        <li>Helps users in sound-sensitive environments consume content silently.</li>
        <li>Supports search engine indexing of audio content.</li>
        <li>Improves usability for users with cognitive or learning disabilities.</li>
      </ul>

      <h2 className="sub-title">Correct Example</h2>

<CodeSnippet
  code={`<audio controls aria-describedby="transcript">
  <source src="complaint-audio.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
<div id="transcript">
  <h3>Transcript</h3>
  <p>
    Hello, I want to report an issue with the mobile app. The screen keeps
    freezing whenever I try to upload a document. Please look into this.
  </p>
</div>`}
preview={<GoodExample />}
  captionHeading="Why it's good:"
  captionColor="green"
  language="html"
  label="Audio With Transcript (Good Example)"
  caption={
    <ul className="importantNote unListType margin-0">
      <li>Provides a full transcript of the audio content.</li>
      <li>Ensures access for deaf or hard of hearing users.</li>
      <li>Transcript is programmatically associated via <code>aria-describedby</code>.</li>
      <li>Complies with WCAG 1.2.1 Audio-only (Prerecorded).</li>
    </ul>
  }
/>
      <h2 className="sub-title">Incorrect Example</h2>
   <CodeSnippet
  code={`<audio controls>
  <source src="complaint-audio.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>`}
preview={<BadExample />}
  captionHeading="Why it's bad:"
  captionColor="red"
  language="html"
  label="Audio Without Transcript (Bad Example)"
  caption={
    <ul className="importantNote unListType margin-0">
      <li>No transcript provided for the audio content.</li>
      <li>Users who are deaf or hard of hearing cannot access the information.</li>
      <li>No accessible alternative or descriptive summary available.</li>
      <li>Fails WCAG 1.2.1 Audio-only (Prerecorded) compliance.</li>
    </ul>
  }
/>


      <h2 className="sub-title">Why This Matters</h2>
      <ul className="importantNote unListType margin-0">
        <li>Transcripts are required for WCAG 1.2.1 compliance.</li>
        <li>They ensure content is perceivable by all users regardless of ability.</li>
        <li>Essential for users relying on text-based alternatives to audio.</li>
      </ul>

      <ImageWithCaption
        src="/audio-transcript.png"
        alt="Visual representation of an audio clip with transcript alongside"
        caption="Audio content paired with its textual transcript for accessibility"
        width={500}
        height={300}
      />

      <div className="text-start">
        <GoBackButton />
      </div>
    </>
  );
}
