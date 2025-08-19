import React from "react";
import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import PageScrollTop from "@/app/components/PageScrollTop";
import VideoWithCaptions from "@/app/components/VideoWithCaptions";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Caption Compliance | Arbi Digital Accessibility",
  description:
    "Learn what caption compliance is, why captions are important for accessibility, and explore good and bad real-world examples. Covers WCAG compliance, video accessibility, and best practices for captions.",
};

const page = () => {
  return (
    <>
      <PageScrollTop />
      <div className="text-center">
        <h1 className="text-center dark-color largeHeading">
          What is Caption?
        </h1>
      </div>

      <p className="plainText">
        Caption compliance ensures that all video and multimedia content includes
        accurate, synchronized captions that convey both spoken words and
        important non-speech information (like music or sound effects). This is
        a requirement under WCAG 1.2.2 <Link className="font-bold link-color-blue" href="/wcagprincipals/perceivable/guidelines-two/captions-prerecorded">(Captions Prerecorded)</Link>  and 1.2.4
        <Link className="font-bold link-color-blue" href="/wcagprincipals/perceivable/guidelines-two/captions-live">(Captions Live)</Link>.
      </p>

      <h2 className="sub-title">Why are Captions Important?</h2>
      <ul className="importantNote unListType plainText">
        <li>Make video content accessible to people who are deaf or hard of hearing.</li>
        <li>Help non-native speakers understand content more easily.</li>
        <li>Support users in noisy or quiet environments where sound isn’t practical.</li>
        <li>Improve comprehension and retention by reinforcing spoken content with text.</li>
        <li>Required for WCAG compliance and legal accessibility standards.</li>
      </ul>

      <div className="grid grid-cols-2 gap-8">
        {/* GOOD EXAMPLE – YouTube Video with Captions */}
        <CodeSnippet
          code={``}
          preview={
            <VideoWithCaptions />
          }
          captionColor="green"
          language="html"
          label="Good Example – YouTube Video with Captions"
          captionHeading="Why it's good:"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>Captions can be toggled on/off by the user.</li>
              <li>Meets WCAG requirement for prerecorded captions.</li>
              <li>Helps users in noisy or sound-off environments.</li>
            </ul>
          }
        />

        {/* BAD EXAMPLE – YouTube Video with No Captions */}
        <CodeSnippet
          code={``}
          preview={
             <VideoWithCaptions  showCaptions={false}/>
            
          }
          language="html"
          label="Bad Example – Missing Captions"
          showCopyButton={false}
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>No captions available → deaf/hard-of-hearing users excluded.</li>
              <li>Fails WCAG 1.2.2 (Captions Prerecorded).</li>
              <li>Bad user experience in sound-restricted settings.</li>
            </ul>
          }
        />

  <CodeSnippet
  code={`<iframe width="560" height="315"
  src="https://www.youtube.com/embed/hLQl3WQQoQ0?cc_load_policy=1"
  title="YouTube video player with captions"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen></iframe>`}
  preview={
    <div style={{ border: "1px solid #ccc", padding: "8px" }}>
      <p>This video includes captions for both speech and non-speech audio cues:</p>
      <ul>
        <li>Speech is captioned: <em>&quot;Hello everyone&quot;</em></li>
        <li>Non-speech audio is captioned: <em>[music playing]</em>, <em>[applause]</em></li>
      </ul>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/hLQl3WQQoQ0?cc_load_policy=1"
        title="YouTube video player with captions"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  }
/>


              {/* BAD EXAMPLE – Auto Captions Only */}
        <CodeSnippet
          code={`<iframe width="560" height="315"
  src="https://www.youtube.com/embed/5MgBikgcWnY?cc_load_policy=1"
  title="YouTube auto captions"
  allowfullscreen></iframe>`}
          preview={
            <div style={{ border: "1px solid #ccc", padding: "8px" }}>
              <p><strong>Preview:</strong> YouTube video with auto-generated captions.</p>
              <iframe
                width="280"
                height="158"
                src="https://www.youtube.com/embed/5MgBikgcWnY?cc_load_policy=1"
                title="YouTube auto captions"
                allowFullScreen
              ></iframe>
            </div>
          }
          language="html"
          label="Bad Example – Auto-Generated Captions Only"
          showCopyButton={false}
          captionHeading="Why it's bad:"
          captionColor="red"
          caption={
            <ul className="importantNote unListType margin-0">
              <li>Auto captions often misinterpret names, jargon, or accents.</li>
              <li>Fails WCAG accuracy requirements.</li>
              <li>Can confuse users instead of helping them.</li>
            </ul>
          }
        />
      </div>
    </>
  );
};

export default page;
