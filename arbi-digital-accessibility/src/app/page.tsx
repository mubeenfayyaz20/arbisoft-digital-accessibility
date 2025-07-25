import Image from "next/image";
import "@/app/styles/globals.scss";
import Link from "next/link";
import type { Metadata } from "next";
import WcagPrinciples from "./components/wcagPrinciples/WcagPrinciples";


export const metadata: Metadata = {
  title: "Home | Arbi Digital Accessibility",
  description: "A11y - Make it Work for Everyone.",
};

export default function Home() {
  return (
    <>
      <div className="d-flex gap-2 align-items-center">
        <h2 className="sub-title">WCAG Document</h2>
      </div>
      <p className="plainText">
        These guidelines explain how to make web content more accessible to
        people with various abilities and disabilities. People involved in web
        development should know and follow these guidelines. They are especially
        important for designers, developers, content creators, and people who
        test websites. Following these guidelines makes sure websites meet the
        minimum accessibility standards.
      </p>
      <div className="flex flex-col md:flex-row md:gap-8">
        <div className="md:w-2/3">
          <div className="flex flex-col sm:flex-row sm:items-center gap-2">
            <h2 className="sub-title">Web Compliance</h2>
            <Link
              href="/highest-lowest-priority"
              className="link-color-blue mt-2 underline font-semibold hover:no-underline"
            >
              WCAG 2.2 AA Guidelines (Highest to Lowest Priority)
            </Link>
          </div>
          <p className="plainText mt-2">
            Web accessibility compliance involves adhering to legal standards
            and guidelines that ensure digital content is accessible to all
            users, including those with disabilities. Laws like Section 508
            mandate specific accessibility criteria, while the Web Content
            Accessibility Guidelines (WCAG) outline best practices for creating
            accessible content.
          </p>
        </div>
        <div className="md:w-1/3 mt-4 md:mt-0 margin-bottom-20">
          <Image
            src="/WCAG.svg"
            alt="Web Content Accessibility Guidelines (WCAG)"
            priority
            className="rounded"
            width={400}
            height={400}
          />
        </div>
      </div>
      <p className="plainText importantNote mt-2">
        <strong className="red-color">Note*</strong>: The following
        documentation does not cover all of the WCAG AAA requirements. For all
        compliance, you can visit the provided links given in front of all four
        major principles:{" "}
        <strong>Perceivable, Operable, Understandable, and Robust</strong>.
      </p>
      <WcagPrinciples />
    </>
  );
}
