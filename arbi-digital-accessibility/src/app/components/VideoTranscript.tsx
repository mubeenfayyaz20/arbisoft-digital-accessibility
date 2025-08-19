import React from "react";

export default function AccessibleVideo({ showCaptions = true }) {
  return (
    <div style={{ display: "flex", gap: "16px" }}>
      <iframe
        width="400"
        height="225"
        src="https://www.youtube.com/embed/20SHvU2PKsM"
        title="Introduction to Web Accessibility and W3C Standards"
        frameBorder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>

      {showCaptions && (
        <div
          style={{
            width: "260px",
            height: "225px",
            overflowY: "auto",
            border: "1px solid #ccc",
            padding: "8px",
            borderRadius: "8px",
          }}
        >
          <p>Hi! My name is Shadi Abou-Zahra.</p>
          <p>The Web is essential for many people’s daily life.</p>
          <p>Web accessibility means equal use for people with disabilities.</p>
          <p>Captions help people who cannot hear well.</p>
          <p>Good contrast improves readability for everyone.</p>
        </div>
      )}
    </div>
  );
}
