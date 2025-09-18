import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import GoBackButton from "@/app/components/BackButton";
import WindowIcon from "@/app/components/icons/WindowIcon";
import ImageWithCaption from "@/app/components/ImageWithCaption";
import SvgWithCaption from "@/app/components/SvgWithCaption";
import PageScrollTop from "@/app/components/PageScrollTop";

export const metadata: Metadata = {
  title: "1.1 Guideline - Decorative Image | Arbi Digital Accessibility",
  description:
    "Learn how to handle decorative images in web accessibility to meet WCAG 2.1 Guideline 1.1. Understand when and how to use null alt text and appropriate ARIA roles to ensure screen readers skip non-informative visuals.",
};

export default function Page() {
  return (
    <>
      <PageScrollTop />
      <div className="text-center">
        <div className="text-start md:relative lg:absolute">
          <GoBackButton />
        </div>
        <h1 className="text-center dark-color largeHeading">
          Decorative Images
        </h1>
      </div>
      <h2 className="sub-title">Image tag</h2>
      <p className="plainText">
        Decorative images should have <strong> empty alt</strong> attributes and
        should not be focusable.
      </p>
      <p className="plainText">
        Use an empty alt attribute <strong>(alt=&quot;&quot;)</strong> and
        ensure it is not announced by screen readers.
      </p>

      <h2 className="sub-title">SVG tag</h2>
      <p className="plainText">
        Add the attribute <strong> aria-hidden=&quot;true&quot;</strong> to
        Hides SVG from screen readers{" "}
      </p>
      <p className="plainText">
        {" "}
        Add <strong>focusable=&quot;false&quot;</strong> to Prevents keyboard
        tabbing (important in some browsers)
      </p>
      <p className="plainText">
        {" "}
        Add the
        <strong>role=&quot;presentation&quot;</strong> to Marks the SVG as
        visual-only (redundant but safe)
      </p>

      <h2 className="sub-title">Who Benefits</h2>

      <ul className="importantNote unListType plainText">
        <li>They are not distracted by unnecessary image descriptions.</li>

        <li>
          Helps users focus on meaningful content instead of decorative visuals.
        </li>

        <li>
          Allows assistive technologies to skip non-essential elements,
          improving user experience.
        </li>

        <li> Easier to manage content and maintain accessibility standards.</li>

        <li>
          Better understanding of page structure by ignoring irrelevant visuals.
        </li>

        <li>A simpler, more focused experience benefits all users.</li>
      </ul>
      <h2 className="sub-title">With img tag</h2>
      <CodeSnippet
        code={`<img src="pattern-background.png" alt="" />`}
        language="html"
        label="img tag Correct Code Usage"
      />

      <CodeSnippet
        code={`<img src="pattern-background.png" alt="pattern background image" />`}
        language="html"
        label="img tag Incorrect Code Usage"
        showCopyButton={false}
      />
      <ImageWithCaption
        src="/decorative-flower.jpeg"
        alt=""
        caption="Flower Decorative image without alt attribute"
        width={400}
        height={400}
      />

      <h2 className="sub-title">With SVG tag</h2>

      <CodeSnippet
        code={`
           <svg
          aria-hidden="true"
          focusable="false"
          role="presentation"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width={"200px"}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
            fill="#666"
          />
        </svg>
      `}
        language="html"
        label="Svg tag Correct Code Usage"
      />

      <CodeSnippet
        code={`<svg
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 16 16"
          width={"200px"}
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.5 2.5h13v10a1 1 0 0 1-1 1h-11a1 1 0 0 1-1-1zM0 1h16v11.5a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 0 12.5zm3.75 4.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5M7 4.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0m1.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
            fill="#666"
          />
        </svg>`}
        language="html"
        label="Incorrect Code Usage without aria-hidden and focusable attribute"
        showCopyButton={false}
      />
      <CodeSnippet
        code={`<img src="/images/wave.svg">`}
        language="html"
        label="Incorrect Code Usage without alt attribute"
        showCopyButton={false}
      />
      <SvgWithCaption
        icon={WindowIcon}
        caption="Window Decorative svg image without aria-hidden and focusable attribute"
      />
      <div className="text-start ">
        <GoBackButton />
      </div>
    </>
  );
}
