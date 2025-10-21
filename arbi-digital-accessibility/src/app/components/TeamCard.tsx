"use client";

import Card from "../components/CustomCard";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import Link from "next/link";

export default function TeamCard() {
  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
      
        <Card
          title="SQA Engineer & Accessibility Analyst"
          titlePosition="bottom"
          description="SQA Engineer & Accessibility Analyst with 3+ years of experience at Arbisoft, ensuring high-quality and inclusive digital products. CPACC and DHS Trusted Tester certified, specializing in accessibility compliance (WCAG, Section 508) and comprehensive QA processes to enhance quality, usability, accessibility, and user experience."
          imageSrc="/team-members/sami-ullah.jpg"
          imageAlt="Sami Ullah"
          socialLinks={
            <div className="flex gap-2 justify-center">
              <Link href="https://facebook.com">
                <FacebookIcon sx={{ fontSize: "3rem" }} />
              </Link>
              <Link href="https://linkedin.com">
                <LinkedInIcon sx={{ fontSize: "3rem" }} />
              </Link>
              <Link href="https://github.com">
                <XIcon sx={{ fontSize: "3rem" }} />
              </Link>
            </div>
          }
        />
          <Card
          title="Frontend HTML Developer & Certified Web Accessibility Specialist"
          titlePosition="bottom"
          description="Frontend Developer & Accessibility Specialist with 6+ years of experience in building inclusive, user-friendly web interfaces. Skilled in implementing accessibility best practices (WCAG, Section 508) and experienced with assistive technologies such as screen readers. I collaborate closely with design teams to ensure UI/UX design is both visually engaging and accessible."
          imageSrc="/team-members/mubeen-fayyaz.jpg"
          imageAlt="Mubeen Fayyaz"
          socialLinks={
            <div className="flex gap-2 justify-center">
              <Link href="https://facebook.com">
                <FacebookIcon sx={{ fontSize: "3rem" }} />
              </Link>
              <Link href="https://linkedin.com">
                <LinkedInIcon sx={{ fontSize: "3rem" }} />
              </Link>
              <Link href="https://github.com">
                <XIcon sx={{ fontSize: "3rem" }} />
              </Link>
            </div>
          }
        />
        <Card
          title="Accessibility Associate"
          titlePosition="bottom"
          description="Accessibility Associate with over 2+ years of experience in accessibility testing and a background as an E-learning Technical Developer. Skilled in ensuring compliance with Section 508 and WCAG standards across web, documents, and mobile platforms (iOS and Android). Experienced in using assistive technologies such as screen readers, and collaborating with design teams to improve accessibility in UI/UX design. "
          imageSrc="/team-members/ahmad-hassan.jpg"
          imageAlt="Ahmad Hassan"
          socialLinks={
            <div className="flex gap-2 justify-center">
              <Link href="https://facebook.com">
                <FacebookIcon sx={{ fontSize: "3rem" }} />
              </Link>
              <Link href="https://linkedin.com">
                <LinkedInIcon sx={{ fontSize: "3rem" }} />
              </Link>
              <Link href="https://github.com">
                <XIcon sx={{ fontSize: "3rem" }} />
              </Link>
            </div>
          }
        />
          <Card
          title="Senior SQA Engineer"
          titlePosition="bottom"
          description="Senior SQA Engineer with 8 years of QA experience, including 2 years as an Accessibility Associate. Experienced in manual and automation testing, test strategy and quality process improvement. Specializes in accessibility compliance aligned with WCAG and Section 508 standards. DHS Trusted Tester certified professional ensuring digital products meet inclusive design and accessibility requirements."
          imageSrc="/team-members/tanveer-khan.jpg"
          imageAlt="Tanveer Khan"
          socialLinks={
            <div className="flex gap-2 justify-center">
              <Link href="https://facebook.com">
                <FacebookIcon sx={{ fontSize: "3rem" }} />
              </Link>
              <Link href="https://linkedin.com">
                <LinkedInIcon sx={{ fontSize: "3rem" }} />
              </Link>
              <Link href="https://github.com">
                <XIcon sx={{ fontSize: "3rem" }} />
              </Link>
            </div>
          }
        />
           <Card
          title="QA Automation & Accessibility Tester"
          titlePosition="bottom"
          description="QA Automation & Accessibility Tester with 4+ years of experience making digital experiences seamless and inclusive. Specialize in test automation, accessibility compliance (WCAG, ADA, Section 508), and bridging the gap between development and testing to deliver user-friendly solutions."
          imageSrc="/team-members/jamil-hussain.jpg"
          imageAlt="Jamal Hussain"
          socialLinks={
            <div className="flex gap-2 justify-center">
              <Link href="https://facebook.com">
                <FacebookIcon sx={{ fontSize: "3rem" }} />
              </Link>
              <Link href="https://linkedin.com">
                <LinkedInIcon sx={{ fontSize: "3rem" }} />
              </Link>
              <Link href="https://github.com">
                <XIcon sx={{ fontSize: "3rem" }} />
              </Link>
            </div>
          }
        />
      </div>
    </>
  );
}
