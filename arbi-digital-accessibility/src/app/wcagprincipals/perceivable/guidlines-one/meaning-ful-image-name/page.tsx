import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import ImageWithCaption from "@/app/components/ImageWithCaption";
import GoBackButton from "@/app/components/BackButton";
import Logo from "../../../../../../public/WCAG.jpeg";

export const metadata: Metadata = {
  title: "1.1 Guideline - Meaningful Image Name | Arbi Digital Accessibility",
};
export default function Page() {
  return (
    <>
      <div className="text-center">
        <div className="text-start absolute">
          <GoBackButton />
        </div>
        <h1 className="text-center dark-color largeHeading">
          1.1 Guideline / Meaningful Image Name
        </h1>
      </div>
      <ImageWithCaption
        src={Logo}
        alt="Arbisoft brand logo"
        caption="Arbisoft brand logo"
        width={400}
        height={100}
      />
      <CodeSnippet
        code={`<img alt="Arbisoft brand logo" width="125" height="30" style="color:transparent" src="/images/logo.svg" />`}
        language="html"
        label="this is the dmeo code"
      />
    </>
  );
}
