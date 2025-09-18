import React from "react";
import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import PageScrollTop from "@/app/components/PageScrollTop";

export const metadata: Metadata = {
  title: "Audio Description Compliance | Arbi Digital Accessibility",
  description:
    "Learn what Audio Description is, why it's important for accessibility, and see good and bad real-world examples. Includes a live, interactive YouTube demonstration.",
};

const page = () => {
  return (
    <>
      <PageScrollTop />
      <div className="text-center">
        <h1 className="text-center dark-color largeHeading">
          What is Audio Description?
        </h1>
      </div>

      <p className="plainText">
        <strong>Audio Description (AD)</strong> is narration added to visual
        media that describes critical visual details for users who are blind or
        have low vision. It ensures equal access to visual content, including
        actions, expressions, settings, and transitions.
      </p>

      <h2 className="sub-title">Why is Audio Description Important?</h2>
      <ul className="importantNote unListType plainText">
        <li>
          Provides critical context to visual media for blind or low-vision
          users.
        </li>
        <li>Ensures compliance with WCAG 1.2.3 (Prerecorded).</li>
        <li>
          Supports inclusivity in educational, entertainment, and public
          content.
        </li>
        <li>
          Enhances understanding—especially of visual-only actions or scene
          changes.
        </li>
      </ul>

      <div className="grid lg:grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
        <CodeSnippet
          code={`<video
              width="400"
              height="225"
              controls
              aria-label="Audio Description Example"
            >
              <source
                src="https://media.w3.org/wai/perspective-videos/text-to-speech-ad.mp4"
                type="video/mp4"
              />
              <track
                src="/transcripts/captions.vtt"
                kind="captions"
                label="English captions"
                default
              />
           
            </video>`}
          preview={
            <video
              width="400"
              height="225"
              controls
              aria-label="Audio Description Example"
            >
              <source
                src="https://media.w3.org/wai/perspective-videos/text-to-speech-ad.mp4"
                type="video/mp4"
              />
              <track
                src="/transcripts/captions.vtt"
                kind="captions"
                label="English captions"
                default
              />
             
            </video>
          }
          language="html"
          label="Good Example – Video with Captions and Audio Description"
          captionHeading="Why it's good:"
          captionColor="green"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>
                Captions appear at the bottom of the video for deaf or
                hard-of-hearing users.
              </li>
              <li>
                The narrator describes visual elements, demonstrating the AD
                concept.
              </li>
              <li>Accessible by both sighted and screen reader users.</li>
              <li>
                Users can enable/disable captions from the video controls.
              </li>
            </ul>
          }
        />



        {/* BAD EXAMPLE – YouTube Video Without Audio Description */}


            <CodeSnippet
          code={`<video
              width="400"
              height="225"
              controls
              aria-label="Audio Description Example"
            >
              <source
                src="https://media.w3.org/wai/perspective-videos/text-to-speech-ad.mp4"
                type="video/mp4"
              />
            </video>`}
          preview={
            <video
              width="400"
              height="225"
              controls
              aria-label="Audio Description Example"
            >
              <source
                src="https://media.w3.org/wai/perspective-videos/text-to-speech-ad.mp4"
                type="video/mp4"
              />
             
            </video>
          }
          language="html"
          label="Good Example – Video with Captions and Audio Description"
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
           <ul className="importantNote unListType margin-0">
              <li>
                No narrated description—visual content is inaccessible to some
                users.
              </li>
              <li>Fails WCAG compliance for accessible video.</li>
              <li>
                Excludes users with visual impairments from full experience.
              </li>
            </ul>
          }
        />
     
      </div>
    </>
  );
};

export default page;
