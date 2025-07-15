import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import ImageWithCaption from "@/app/components/ImageWithCaption";
import GoBackButton from "@/app/components/BackButton";
import Logo from "../../../../../../public/WCAG.svg";

export const metadata: Metadata = {
  title: "1.1 Guideline - Meaningful Image Name | Arbi Digital Accessibility",
  description: "",
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

      <p className="importantNote">
        <ul className="unListType plainText">
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
      </p>
      <ImageWithCaption
        src={Logo}
        alt="Arbisoft brand logo"
        caption="Arbisoft brand logo"
        width={400}
        height={100}
      />
      <CodeSnippet
        code={`<img alt="Two Cats chasing each other in a garden" src="cats.jpg" />`}
        language="html"
        label="Alt Correct Code Usage"
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
