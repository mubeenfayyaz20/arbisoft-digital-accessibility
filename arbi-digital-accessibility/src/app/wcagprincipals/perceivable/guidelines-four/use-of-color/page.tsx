import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import ImageWithCaption from "@/app/components/ImageWithCaption";
import GoBackButton from "@/app/components/BackButton";
import PageScrollTop from "@/app/components/PageScrollTop";

export const metadata: Metadata = {
  title: "1.4.1 Guideline - Use of Color | Arbi Digital Accessibility",
  description:
    "Ensure that information is not conveyed by color alone to comply with WCAG 1.4.1. Use icons, text, or patterns alongside color for accessibility.",
};

export default function Page() {
  return (
    <>
      <PageScrollTop />

      <div className="text-center">
        <div className="text-start absolute">
          <GoBackButton />
        </div>
        <h1 className="text-center dark-color largeHeading">Use of Color</h1>
      </div>

      <h2 className="sub-title">Who Benefits</h2>
      <ul className="importantNote unListType plainText">
        <li>Users with color blindness (e.g., red-green color blindness).</li>
        <li>Low vision users who cannot distinguish certain hues.</li>
        <li>Users relying on screen readers or monochrome displays.</li>
        <li>Mobile users in glare-heavy environments (sunlight, etc.).</li>
      </ul>

      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`<p>Password strength: <strong style="color: green;">Strong</strong></p>
<p>Password strength: <strong style="color: orange;">Medium</strong></p>
<p>Password strength: <strong style="color: red;">Weak</strong></p>`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="Text Descriptions with Color (Good Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>
              Color is used, but it&apso;s not the only way information is conveyed.
            </li>
            <li>Each strength level is also described using visible text.</li>
            <li>
              Screen reader users can understand context without needing color.
            </li>
          </ul>
        }
      />

      <h2 className="sub-title">Incorrect Example</h2>
      <CodeSnippet
        code={`<p><span style="color: red;">Required field</span></p>
<p><span style="color: green;">Optional field</span></p>`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="html"
        label="Color-Only Communication (Bad Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Relies only on color to convey required vs. optional.</li>
            <li>
              Colorblind users may not be able to distinguish red from green.
            </li>
            <li>
              Fails WCAG 1.4.1 because no other indicator (text/icon) is
              provided.
            </li>
          </ul>
        }
      />

      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`<ul>
  <li><span style="color: green;">✔</span> Task Completed</li>
  <li><span style="color: red;">✘</span> Task Failed</li>
</ul>`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="Icons + Color (Good Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>
              Symbols are combined with color to reinforce meaning visually.
            </li>
            <li>
              Users who can&apso;t perceive color still understand success/failure
              via icons and text.
            </li>
          </ul>
        }
      />

      <h2 className="sub-title">Incorrect Example</h2>
      <CodeSnippet
        code={`<table>
  <tr>
    <td style="background-color: green;">Available</td>
    <td style="background-color: red;">Unavailable</td>
  </tr>
</table>`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="html"
        label="Color-Only Table Indicators (Bad Example)"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>Availability is only shown by background color.</li>
            <li>
              No accompanying icon or text label for users who can&apos;t perceive
              color.
            </li>
            <li>
              This is common in calendars, booking systems, or dashboards.
            </li>
          </ul>
        }
      />

      <h2 className="sub-title">Why This Matters</h2>
      <ul className="importantNote unListType margin-0">
        <li>
          Color should not be the only method of conveying meaning,
          instructions, or responses.
        </li>
        <li>
          Ensures all users, including those with color vision deficiencies, can
          access the same information.
        </li>
        <li>Required for WCAG 1.4.1 compliance.</li>
        <li>
          Enhances clarity and UX for everyone, especially in forms, charts, and
          status messages.
        </li>
      </ul>

      <ImageWithCaption
        src="/use-of-color.png"
        alt="VoiceOver user unable to understand meaning from colored dots with no labels"
        caption="Color-only indicators (e.g., red/green dots) confuse screen reader and colorblind users"
        width={600}
        height={350}
      />

      <div className="text-start">
        <GoBackButton />
      </div>
    </>
  );
}
