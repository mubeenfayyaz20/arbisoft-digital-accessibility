// AudioExamples.tsx

export function GoodExample() {
  return (
    <>
      <video controls aria-describedby="video-transcript">
  <source src="customer-support.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
<div id="video-transcript">
  <h3>Transcript</h3>
  <p>
Hi, I’m having trouble logging into my account. It keeps saying my password is incorrect, even after I reset it.
  </p>
</div>
    </>
  );
}

export function BadExample() {
  return (
    <>
      <video controls>
  <source src="customer-support.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
    </>
  );
}
