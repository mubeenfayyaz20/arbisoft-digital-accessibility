import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import GoBackButton from "@/app/components/BackButton";
import PageScrollTop from "@/app/components/PageScrollTop";
import AudioSlider from "@/app/components/AudioSlider";

export const metadata: Metadata = {
  title: "Audio Control | Arbi Digital Accessibility",
  description:
    "Ensure users can control audio that plays automatically to comply with WCAG 1.4.2. Provide pause, stop, or volume controls for accessibility.",
};

export default function Page() {
  return (
    <>
      <PageScrollTop />

      <div className="text-center">
        <div className="text-start absolute">
          <GoBackButton />
        </div>
        <h1 className="text-center dark-color largeHeading">Audio Control</h1>
      </div>

      <h2 className="sub-title">Who Benefits</h2>
      <ul className="importantNote unListType plainText">
        <li>Screen reader users whose assistive tech conflicts with background audio.</li>
        <li>Users with cognitive or learning disabilities who may be distracted by audio.</li>
        <li>People in quiet or shared environments who need to mute audio.</li>
        <li>Mobile users with limited data or control over autoplay features.</li>
      </ul>

      {/* GOOD EXAMPLE */}
      <h2 className="sub-title">Correct Example – With Audio Controls</h2>
      <CodeSnippet
        code={`<audio controls>
  <source src="background-music.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>`}
preview={<AudioSlider src="https://ia801303.us.archive.org/11/items/1970-1979RadioNews/1970-05-04-NBCTV-Nightly-News.mp3" />}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="User-Controlled Audio (Good Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Provides pause/play control for the user.</li>
            <li>Meets WCAG 1.4.2 requirement: control available if audio plays longer than 3 seconds.</li>
            <li>Supports user autonomy and accessibility in shared spaces.</li>
          </ul>
        }
      />

      {/* BAD EXAMPLE */}
      <h2 className="sub-title">Incorrect Example – No Audio Control</h2>
      <CodeSnippet
        code={`<audio autoplay>
  <source src="background-music.mp3" type="audio/mpeg" />
</audio>`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="html"
        label="Autoplay Without Control (Bad Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Audio plays automatically without giving the user control to pause or stop it.</li>
            <li>Interferes with screen readers or user experience.</li>
            <li>Fails WCAG 1.4.2 unless there's an alternative method to stop the sound.</li>
          </ul>
        }
      />

      {/* BAD REAL-WORLD EXAMPLE */}
      <h2 className="sub-title">Real-World Problem – Autoplay Video With Background Music</h2>
      <CodeSnippet
        code={`<video autoplay muted loop>
  <source src="promo.mp4" type="video/mp4" />
</video>`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="html"
        label="Muted Video May Still Contain Audio Later (Bad Practice)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Even if muted, users cannot unmute or control if audio later becomes active.</li>
            <li>Some browsers ignore mute settings depending on user interaction history.</li>
            <li>Not user-friendly or compliant without visible controls.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Why This Matters</h2>
      <ul className="importantNote unListType margin-0 ">
        <li>Audio that plays automatically can interfere with screen reader output.</li>
        <li>Users must be able to pause, stop, or control volume.</li>
        <li>Required for WCAG 1.4.2 compliance if audio lasts longer than 3 seconds.</li>
        <li>Improves usability for everyone in various listening contexts.</li>
      </ul>
      <div className="text-start margin-top-20">
        <GoBackButton />
      </div>
    </>
  );
}
