"use client";
import { useRef, useState, useEffect, ChangeEvent, use } from 'react';

interface AudioSliderProps {
  src: string;
}

export default function AudioSlider({ src }: AudioSliderProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1); // Default full volume

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.muted = volume === 0;
    }
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    setVolume((prev) => (prev === 0 ? 1 : 0));
  };

  const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  return (
    <div>
      <audio
        ref={audioRef}
        src={src}
        controls
        style={{ display: 'block', marginBottom: '1rem' }}
      />
      <button onClick={togglePlay}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <button onClick={toggleMute} style={{ marginLeft: '0.5rem' }}>
        {volume === 0 ? 'Unmute' : 'Mute'}
      </button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        value={volume}
        onInput={handleVolumeChange}
        style={{ marginLeft: '1rem' }}
      />
    </div>
  );
}
