import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import ImageWithCaption from "@/app/components/ImageWithCaption";
import GoBackButton from "@/app/components/BackButton";
import PageScrollTop from "@/app/components/PageScrollTop";
import Link from "next/link";
import VideoTranscript from "@/app/components/VideoTranscript";

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
        <div className="text-start md:relative lg:absolute">
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
        code={``}
        preview={
          <div>
            <p>
              <strong>Video Preview:</strong> Accessible Video with Transcript
            </p>

            <VideoTranscript />

            <br />
            <Link
              target="_blank"
              href="/transcripts/podcast-episode-1.txt"
              download
            >
              Download Transcript (TXT)
            </Link>
            <br />
            <details>
              <summary>Read Transcript Inline</summary>
              <p>
                <strong>Transcript (Excerpt)</strong>
              </p>
              <p>Hi! My name is Shadi Abou-Zahra.</p>
              <p>The Web is essential for many people’s daily life.</p>
              <p>
                Web accessibility means equal use for people with disabilities.
              </p>
              <p>Captions help people who cannot hear well.</p>
            </details>
          </div>
        }
        captionColor="green"
        language="jsx"
        label="Good Example – Accessible Video Component"
        captionHeading="Why it's good:"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Video and transcript displayed side-by-side.</li>
            <li>Transcript also available for download + inline reading.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Bad Example</h2>
      <CodeSnippet
        code={``}
        preview={
          <div >
            <VideoTranscript showCaptions={false} />
          </div>
        }
        captionColor="red"
        language="jsx"
        label="Good Example – Accessible Video Component"
        captionHeading="Why it's good:"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Video and transcript displayed side-by-side.</li>
            <li>Transcript also available for download + inline reading.</li>
          </ul>
        }
      />

      <div className="text-start">
        <GoBackButton />
      </div>
    </>
  );
}
