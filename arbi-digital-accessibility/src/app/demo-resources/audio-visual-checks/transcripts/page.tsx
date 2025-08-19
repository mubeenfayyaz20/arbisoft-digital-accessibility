import React from "react";
import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import PageScrollTop from "@/app/components/PageScrollTop";
import Link from "next/link";
import VideoTranscript from "@/app/components/VideoTranscript";

export const metadata: Metadata = {
  title: "Transcript Compliance | Arbi Digital Accessibility",
  description:
    "Learn what transcript compliance is, why transcripts are important for accessibility, and explore good and bad real-world examples. Covers WCAG compliance, audio accessibility, and best practices for transcripts.",
};

const Page = () => {
  return (
    <>
      <PageScrollTop />
      <div className="text-center">
        <h1 className="text-center dark-color largeHeading">
          What is Transcript Compliance?
        </h1>
      </div>

      <p className="plainText">
        Transcript compliance ensures that audio and video content is provided
        with an accessible, accurate text version of all spoken dialogue and
        important sounds. This is a requirement under WCAG 1.2.1 (<Link className="font-bold link-color-blue" href="/wcagprincipals/perceivable/guidelines-two/audio-description">Audio-only</Link>and
        <Link className="font-bold link-color-blue" href="/wcagprincipals/perceivable/guidelines-two/video-alternative-equivalent">Video-only</Link> Prerecorded ) and helps users who cannot access audio or video
        directly.
      </p>

      <h2 className="sub-title">Why are Transcripts Important?</h2>
      <ul className="importantNote unListType plainText">
        <li>
          Provide access to audio/video content for people who are deaf, hard of
          hearing, or deafblind.
        </li>
        <li>
          Allow screen reader users to read or navigate through spoken content.
        </li>
        <li>Help users who prefer reading instead of watching/listening.</li>
        <li>
          Make searching, quoting, and referencing audio/video content easier.
        </li>
        <li>Required for WCAG compliance and legal accessibility standards.</li>
      </ul>

      <div className="grid grid-cols-2 gap-8">
        {/* GOOD EXAMPLE – Real Podcast with Transcript */}

<CodeSnippet
  code={``}
  preview={
    <div style={{ border: "1px solid #ccc", padding: "8px" }}>
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
        <p>Web accessibility means equal use for people with disabilities.</p>
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

        {/* BAD EXAMPLE – Podcast without Transcript */}
        <CodeSnippet
          code={`<audio controls>
  <source src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" type="audio/mpeg" />
</audio>`}
          preview={
            <div style={{ border: "1px solid #ccc", padding: "8px" }}>
              <p>
                <strong>Preview:</strong> Podcast audio with no transcript.
              </p>
              <audio controls>
                <source
                  src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3"
                  type="audio/mpeg"
                />
              </audio>
              <p>No transcript provided ❌</p>
            </div>
          }
          language="html"
          label="Bad Example – Podcast Without Transcript"
          showCopyButton={false}
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>No transcript → deaf and hard-of-hearing users excluded.</li>
              <li>Fails WCAG 1.2.1 (Audio-only Prerecorded).</li>
              <li>
                Content inaccessible to users in sound-restricted settings.
              </li>
            </ul>
          }
        />
      </div>
    </>
  );
};

export default Page;
