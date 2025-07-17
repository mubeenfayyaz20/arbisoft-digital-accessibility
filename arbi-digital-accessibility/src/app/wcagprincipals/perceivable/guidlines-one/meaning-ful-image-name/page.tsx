import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import ImageWithCaption from "@/app/components/ImageWithCaption";
import GoBackButton from "@/app/components/BackButton";

export const metadata: Metadata = {
  title: "1.1 Guideline - Meaningful Image Name | Arbi Digital Accessibility",
  description:
    "Learn how to use meaningful image names and alt text to improve web accessibility, comply with WCAG 1.1 guidelines, and enhance screen reader support.",
};
export default function Page() {
  return (
    <>
      <div className="text-center">
        <div className="text-start absolute">
          <GoBackButton />
        </div>
        <h1 className="text-center dark-color largeHeading">
          Meaningful Image Name
        </h1>
      </div>
      <h2 className="sub-title">Who Benefits</h2>

      <ul className="importantNote unListType plainText">
        <li>Improves accessibility for screen reader users.</li>
        <li>
          Helps SEO by making content more understandable to search engines.
        </li>
        <li>
          Aids developers and assistive technologies in identifying image
          content.
        </li>
        <li>Supports better content organization and maintenance.</li>
      </ul>
      <ImageWithCaption
        src="/WCAG.svg"
        alt="Arbisoft brand logo"
        caption="Arbisoft brand logo"
        width={400}
        height={100}
      />
      <CodeSnippet
        code={`<img alt="Two Cats chasing each other in a garden" src="cats.jpg" />`}
        language="html"
        label="Alt Correct Code Usage "
      />
      <CodeSnippet
        code={`<img src="chart.png" alt="Sales increase from Jan to June" aria-describedby="chart-data">`}
        language="html"
        label="Alt Correct Code Usage For Charts, Diagrams, and graph"
      />
      <CodeSnippet
        code={`<img src="captcha.png" alt="Enter the characters shown" />`}
        language="html"
        label="Alt Correct Code Usage for captcha we can also use the audio alternative"
      />

      <CodeSnippet
        code={`<img src="button.png" alt="form">`}
        language="html"
        label="Alt Incorrect Code Usage"
        showCopyButton={false}
      />
    </>
  );
}
