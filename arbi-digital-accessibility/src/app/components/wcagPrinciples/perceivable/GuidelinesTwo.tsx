import React from "react";
import TrackedLink from "../../TrackedLink";

const GuidelinesTwo = () => {
  return (
    <div className="plainText">
      <strong>Guideline 1.2 - Time-based Media</strong>&nbsp; requires that
      alternatives are provided for all time-based media (audio-only,
      video-only, audio-video, audio and/or video).
      <ul className="innerList">
        <li>
          <strong>Audio-only and Video-only (Prerecorded)</strong>&nbsp;
          requires text or audio alternatives for audio-only and video-only
          content, ensuring the same information is accessible.
          <ul className="innerList">
            <li>
              <strong> Audio-transcript-text</strong>&nbsp; requires transcripts
              are provided for pre-recorded audio-only content. Transcripts must
              be accurate and complete.
              <TrackedLink
                href="/wcagprincipals/perceivable/guidelines-two/audio-description"
                id="audio-description-link"
                accordionIndex={1}
                className="font-bold link-color-blue underline"
              >
                Audio Only Media Demo
              </TrackedLink>
            </li>
            <li>
              <strong>Video- alternative-equivalent</strong>&nbsp; requires text
              or audio alternatives for prerecorded video-only content,
              conveying the same information as the video.
              <TrackedLink
                href="/wcagprincipals/perceivable/guidelines-two/video-alternative-equivalent"
                id="video-alternative-link1"
                accordionIndex={1}
                className="font-bold link-color-blue underline"
              >
                Video Only Media Demo
              </TrackedLink>
            </li>
          </ul>
        </li>

        <li>
          <strong>1.2.2 Captions (Prerecorded)</strong>&nbsp; requires
          synchronized and accurate captions for all prerecorded audio content,
          ensuring accessibility for users. Captions must be time-synchronized
          and equivalent.
          <TrackedLink
            href="/wcagprincipals/perceivable/guidelines-two/captions-prerecorded"
            id="captions-prerecorded-link"
            accordionIndex={1}
            className="font-bold link-color-blue underline"
          >
            Captions Prerecorded Demo
          </TrackedLink>
        </li>

        <li>
          <strong>
            1.2.3 Audio Description or Media Alternative (Prerecorded)
          </strong>
          &nbsp; requires that prerecorded media content includes audio
          descriptions or alternative text tracks.
          <TrackedLink
            href="/wcagprincipals/perceivable/guidelines-two/audio-transcript-text"
            id="audio-transcript-text-link"
            accordionIndex={1}
            className="font-bold link-color-blue underline"
          >
            Audio Description or Media Alternative Demo
          </TrackedLink>
        </li>

        <li>
          <strong>1.2.4 Captions (Live)</strong> requires accurate captions for
          live synchronized media. The captions must be time-synchronized and
          equivalent.
          <TrackedLink
            href="/wcagprincipals/perceivable/guidelines-two/captions-live"
            id="captions-live-link"
            accordionIndex={1}
            className="font-bold link-color-blue underline"
          >
            Captions Live Demo
          </TrackedLink>
        </li>
      </ul>
    </div>
  );
};

export default GuidelinesTwo;
