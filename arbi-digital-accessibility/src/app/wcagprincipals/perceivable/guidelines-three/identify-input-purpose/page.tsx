import { Metadata } from "next";
import CodeSnippet from "@/app/components/CodeSnippet";
import GoBackButton from "@/app/components/BackButton";
import PageScrollTop from "@/app/components/PageScrollTop";
import ImageWithCaption from "@/app/components/ImageWithCaption";

export const metadata: Metadata = {
  title: "Identify Input Purpose | Arbi Digital Accessibility",
  description:
    "Ensures input fields collecting user data like name, email, or address have proper autocomplete attributes. Includes accessible and inaccessible examples. WCAG 1.3.5 compliant.",
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
          Identify Input Purpose
        </h1>
      </div>

      <h2 className="sub-title">Who Benefits</h2>
      <ul className="importantNote unListType plainText">
        <li>
          Users with cognitive disabilities who rely on autofill for efficiency.
        </li>
        <li>
          Users who use password managers or assistive tech for form filling.
        </li>
        <li>Improves overall user experience by speeding up data entry.</li>
        <li>Complies with WCAG 1.3.5 – Identify Input Purpose.</li>
      </ul>

      {/* GOOD EXAMPLE */}
      <h2 className="sub-title">Correct Example</h2>
      <CodeSnippet
        code={`<input type="text" name="email" autocomplete="email" />`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="Input Field with Autocomplete Attribute"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>
              Uses <code>autocomplete</code> to indicate the input&apos;s
              purpose.
            </li>
            <li>Allows assistive tech and browsers to autofill data.</li>
            <li>Improves accessibility and user efficiency.</li>
          </ul>
        }
      />

      {/* BAD EXAMPLE */}
      <h2 className="sub-title">Incorrect Example</h2>
      <CodeSnippet
        code={`<input type="text" name="email" />`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="html"
        label="Input Field Without Autocomplete"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>
              Lacks an <code>autocomplete</code> attribute.
            </li>
            <li>Disables helpful browser and assistive autofill behavior.</li>
            <li>Fails to communicate input purpose programmatically.</li>
          </ul>
        }
      />

      {/* GOOD EXAMPLE 2 */}
      <h2 className="sub-title">Correct Example – Full Name Fields</h2>
      <CodeSnippet
        code={`<input type="text" name="first-name" autocomplete="given-name" />
<input type="text" name="last-name" autocomplete="family-name" />`}
        captionHeading="Why it's good:"
        captionColor="green"
        language="html"
        label="Properly Identified Name Fields"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>
              Uses <code>autocomplete=&quot;given-name&quot;</code> and{" "}
              <code>autocomplete=&quot;family-name&quot;</code>.
            </li>
            <li>
              Helps screen readers and autofill tools understand the purpose.
            </li>
            <li>Enhances form usability for all users.</li>
          </ul>
        }
      />

      {/* BAD EXAMPLE 2 */}
      <h2 className="sub-title">
        Incorrect Example – Unidentified Name Fields
      </h2>
      <CodeSnippet
        code={`<input type="text" name="first-name" />
<input type="text" name="last-name" />`}
        captionHeading="Why it's bad:"
        captionColor="red"
        language="html"
        label="Name Fields Without Autocomplete"
        caption={
          <ul className="importantNote unListType margin-0">
            <li>
              Does not inform the browser or assistive tech about the
              input&apos;s intent.
            </li>
            <li>
              Misses opportunity for user-friendly features like autofill.
            </li>
            <li>Fails WCAG 1.3.5 compliance.</li>
          </ul>
        }
      />

      <h2 className="sub-title">Why This Matters</h2>
      <ul className="importantNote unListType margin-0">
        <li>
          Improves efficiency and understanding for users who rely on assistive
          tech.
        </li>
        <li>Supports autofill features that reduce typing effort.</li>
        <li>
          Prevents confusion about input purpose, especially in complex forms.
        </li>
        <li>
          Meets WCAG 1.3.5 by programmatically identifying fields collecting
          user information.
        </li>
      </ul>

      <ImageWithCaption
        src="/identify-input-purpose.png"
        alt="VoiceOver Rotor showing a semantic list of input fields with associated autocomplete purposes like email and name"
        caption="Using appropriate autocomplete attributes helps assistive technologies identify input purpose and enhance user experience"
        width={600}
        height={350}
      />

      <div className="text-start">
        <GoBackButton />
      </div>
    </>
  );
}
