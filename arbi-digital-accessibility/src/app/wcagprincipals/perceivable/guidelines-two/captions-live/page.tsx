import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import ImageWithCaption from "@/app/components/ImageWithCaption";
import GoBackButton from "@/app/components/BackButton";
import PageScrollTop from "@/app/components/PageScrollTop";
import LiveCaptionedYouTube from "@/app/components/LiveCaptionedYouTube";

export const metadata: Metadata = {
  title: "1.2.4 Guideline - Captions (Live) | Arbi Digital Accessibility",
  description:
    "Ensure all live multimedia content includes synchronized captions to comply with WCAG 1.2.4 for accessibility.",
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
          Captions (Live)
        </h1>
      </div>

      <h2 className="sub-title">Who Benefits</h2>
      <ul className="importantNote unListType plainText">
        <li>Deaf and hard of hearing users who rely on captions to understand spoken content.</li>
        <li>Viewers in noisy environments (e.g., public transport, events).</li>
        <li>People in quiet settings where sound is not appropriate (e.g., libraries, meetings).</li>
        <li>Non-native speakers who benefit from reading along with audio.</li>
      </ul>

      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`<iframe
  title="Live Stream with Captions"
  src="https://youtu.be/O3DPVlynUM0"
  allow="autoplay; encrypted-media"
  allowFullScreen
></iframe>
<p>Live captions are automatically enabled during the stream.</p>`}
        preview={<LiveCaptionedYouTube videoId="O3DPVlynUM0" />}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="Live Video with Captions (Good Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Synchronized captions are available during the live stream.</li>
            <li>Ensures real-time accessibility for deaf and hard of hearing users.</li>
            <li>Complies with WCAG 1.2.4 by supporting live multimedia accessibility.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Incorrect Example</h2>
      <CodeSnippet
        code={`<iframe
  title="Live Stream Without Captions"
  src="https://www.example.com/live"
  allow="autoplay; encrypted-media"
  allowFullScreen
></iframe>`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="html"
        label="Live Video Without Captions (Bad Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>No live captions provided, making the content inaccessible to deaf users.</li>
            <li>Fails to meet WCAG 1.2.4 guidelines for live multimedia.</li>
            <li>Excludes users who cannot hear or are in sound-restricted environments.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Why This Matters</h2>
      <ul className="importantNote unListType margin-0">
        <li>Live captions provide equal access in real time for people with hearing loss.</li>
        <li>They promote inclusion during events, meetings, webinars, and broadcasts.</li>
        <li>Compliance with WCAG 1.2.4 is essential for accessible live content delivery.</li>
      </ul>

      <ImageWithCaption
        src="/live-stream.png"
        alt="Live broadcast with real-time captions at the bottom of the screen"
        caption="Live stream showing synchronized captions during a broadcast."
        width={600}
        height={350}
      />

      <div className="text-start">
        <GoBackButton />
      </div>
    </>
  );
}