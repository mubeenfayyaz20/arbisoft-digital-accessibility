// AudioExamples.tsx

export function GoodExample() {
  return (
    <>
      <audio controls aria-describedby="transcript">
        <source src="/audio/audio-transcript.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <div id="transcript">
        <h3>Transcript</h3>
        <p>
          Reading English paragraphs is a great way to improve your understanding of the language and expand your vocabulary. You can find free resources online, including texts.
        </p>
      </div>
    </>
  );
}

export function BadExample() {
  return (
    <>
      <audio controls>
        <source src="/audio/audio-transcript.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </>
  );
}
