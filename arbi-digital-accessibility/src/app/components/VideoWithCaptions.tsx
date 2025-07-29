'use client';

import { useState, useRef, useEffect } from 'react';


const captions = [
  { start: 0.859, end: 3.179, text: "hi everyone this is Paul J. Adam" },
  { start: 3.179, end: 6.779, text: "and I'm recording a demonstration video" },
  { start: 6.779, end: 11.019, text: "to show you how to use the VoiceOver Practice" },
  { start: 11.019, end: 15.339, text: "feature in the VoiceOver Accessibility Settings so if you open your settings" },
  { start: 15.339, end: 15.83, text: "app" },
  { start: 15.83, end: 19.35, text: "and go to general then Accessibility" },
  { start: 19.35, end: 22.51, text: "when you go into voice-over" },
  { start: 22.51, end: 26.09, text: "on you can actually turn on" },
  { start: 26.09, end: 30.41, text: "a practice area if I turn VoiceOver on" },
  { start: 30.41, end: 37.079, text: "Screen Reader: VoiceOver On, Paul: now I can go to VoiceOver Practice" },
  { start: 37.079, end: 43.45, text: "SR: VoiceOver Practice, button" },
  { start: 43.45, end: 46.8, text: "SR: VoiceOver Practice, Handwriting help, button" },
  { start: 46.8, end: 50.2, text: "Touch Select item under your finger" },
  { start: 50.2, end: 55.02, text: "Paul: so any gesture that I attempt in this voiceover practice area it will tell me what it does" },
  { start: 55.02, end: 58.5, text: "depending on the finger combinations and the swipe" },
  { start: 58.5, end: 61.66, text: "Two finger single tap pause or continue speech" },
  { start: 61.66, end: 65.199, text: "two finger flick down read page started at selected item" },
  { start: 65.199, end: 70.82, text: "two finger flick up read page starting at the top" },
  { start: 70.82, end: 74.0, text: "Three finger single tap, Speak page number or rows being displayed." },
  { start: 74.0, end: 79.0, text: "Three finger double tap Toggle speech on and off." },
  { start: 79.0, end: 83.0, text: "Three finger triple tap Toggle screen curtain on and off." },
  { start: 83.0, end: 87.0, text: "Four finger single tap near top of screen. Move to the first element." },
  { start: 87.0, end: 89.5, text: "Four finger single tap near bottom of screen Move to the last element." },
  { start: 91.0, end: 92.0, text: "Flick right. Move to next item." },
  { start: 92.0, end: 94.0, text: "Flick left. Move to previous item." },
  { start: 94.0, end: 96.0, text: "Rotate clockwise select next rotor setting" },
  { start: 96.0, end: 101.0, text: "Rotate counterclockwise Select previous rotor setting." },
  { start: 101.0, end: 103.0, text: "Flick down Move to next item using rotor setting." },
  { start: 103.0, end: 106.0, text: "Flick up Move to previous item using rotor setting." },
  { start: 107.0, end: 110.0, text: "Paul: OK so that is just a simple demonstration" },
  { start: 110.0, end: 114.0, text: "of the VoiceOver Practice Feature" },
  { start: 114.0, end: 117.0, text: "SR: VoiceOver off" }
];


export default function VideoWithCaptions() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => setCurrentTime(video.currentTime);
    video.addEventListener('timeupdate', updateTime);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
    };
  }, []);

  const handleCaptionClick = (startTime: number) => {
    const video = videoRef.current;
    if (video) {
      video.currentTime = startTime;
      video.play();
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      {/* Video Player */}
      <div className="relative mb-4">
        <video
          ref={videoRef}
          className="w-full rounded-lg shadow-lg"
          controls
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source
            src="https://pauljadam.com/demos/VoiceOverPracticeFeatureDemoiniOS7.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <button
          onClick={togglePlay}
          className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded"
        >
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>

      {/* Captions Container */}
      <div className="bg-gray-100 p-4 rounded-lg">
        <h2 className="text-xl font-bold mb-3">Video Captions</h2>
        <div className="space-y-2">
          {captions.map((caption, index) => (
            <div
              key={index}
              onClick={() => handleCaptionClick(caption.start)}
              className={`p-3 rounded cursor-pointer transition-all ${
                currentTime >= caption.start && currentTime < caption.end
                  ? 'bg-blue-500 text-white shadow-md transform -translate-y-0.5'
                  : 'bg-white hover:bg-gray-200'
              }`}
            >
              <span className="text-sm text-gray-500 mr-2">
                {formatTime(caption.start)} → {formatTime(caption.end)}:
              </span>
              {caption.text}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Format seconds to mm:ss
function formatTime(seconds: number): string {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}
