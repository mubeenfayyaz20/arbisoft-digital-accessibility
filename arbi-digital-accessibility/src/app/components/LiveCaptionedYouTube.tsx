"use client";
import React, {useRef } from "react";

type LiveCaptionedYouTubeProps = {
  videoId: string;
  width?: number;
  height?: number;
};

export default function LiveCaptionedYouTube({
  videoId,
  width = 640,
  height = 360,
}: LiveCaptionedYouTubeProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  // Ensure captions are loaded automatically when embedding your own channel
  const src = `https://www.youtube.com/embed/${videoId}?cc_load_policy=1&cc_lang_pref=en`;

  return (
    <div className="w-full" style={{ maxWidth: width }}>
      <iframe
        ref={iframeRef}
        width="100%"
        height={height}
        src={src}
        title="Live YouTube Stream with Captions"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
      ></iframe>
    </div>
  );
}
