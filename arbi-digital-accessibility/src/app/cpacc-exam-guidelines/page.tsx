import React from "react";
import { Metadata } from "next";
import Link from "next/link";


export const metadata: Metadata = {
  title: "CPACC Exam Guidelines | Arbi Digital Accessibility",
  description:
    "A complete guide to the CPACC exam, including essential accessibility principles, best practices, and study resources to support your certification journey.",
};


const OurGoals = () => {
  return (
    <>
      <div className="text-center">
        <h1 className="text-center largeHeading ">
          CPACC Exam & Credit Hours Guide
        </h1>
      </div>

      <section aria-labelledby="what-is-cpacc">
        <p className="plainText" id="what-is-cpacc">
          The Certified Professional in Accessibility Core Competencies (CPACC)
          is a globally recognized certification offered by the International
          Association of Accessibility Professionals (IAAP). It validates a
          professional’s foundational knowledge of accessibility principles,
          laws, regulations, and best practices across various domains,
          including digital accessibility, physical accessibility, and inclusive
          design.
        </p>
        <p className="plainText">
          Unlike technical accessibility certifications, CPACC focuses on
          theoretical knowledge rather than implementation, making it ideal for
          professionals working in diverse accessibility-related roles.
        </p>
      </section>

      <section aria-labelledby="why-get-cpacc">
        <h2 className="sub-title" id="why-get-cpacc">
          Why Get CPACC Certified?
        </h2>
        <p className="plainText">
          Earning the CPACC certification offers multiple benefits:
        </p>
        <ul className="importantNote unListType plainText">
          <li>
            <strong>Industry Recognition:</strong> Demonstrates expertise in
            accessibility fundamentals.
          </li>
          <li>
            <strong>Career Growth:</strong> Enhances job opportunities in
            accessibility, UX design, development, and compliance roles.
          </li>
          <li>
            <strong>Legal & Compliance Knowledge:</strong> Helps professionals
            understand accessibility laws like the ADA, Section 508, WCAG, and
            the European Accessibility Act (EAA).
          </li>
          <li>
            <strong>Competitive Advantage:</strong> Differentiates professionals
            in a growing field with increasing demand for accessibility experts.
          </li>
          <li>
            <strong>Global Applicability:</strong> Recognized worldwide, making
            it valuable for accessibility professionals in various regions.
          </li>
        </ul>
      </section>

      <section aria-labelledby="who-should-take">
        <h2 className="sub-title" id="who-should-take">
          Who Should Take the CPACC Exam?
        </h2>
        <ul className="importantNote unListType plainText">
          <li>
            <strong>Accessibility Professionals</strong> – Those working in web,
            mobile, software, and physical accessibility.
          </li>
          <li>
            <strong>UX/UI Designers</strong> – To integrate inclusive design
            principles from the start.
          </li>
          <li>
            <strong>Developers & Testers</strong> – To build and verify
            accessible digital products.
          </li>
          <li>
            <strong>Compliance & Legal Experts</strong> – To ensure adherence to
            accessibility laws and policies.
          </li>
          <li>
            <strong>Project Managers & Product Owners</strong> – To oversee
            accessibility implementation in projects.
          </li>
          <li>
            <strong>Educators & Trainers</strong> – To teach accessibility
            principles and best practices.
          </li>
        </ul>
        <p className="plainText">
          If you’re looking to establish credibility in accessibility or work
          toward a more inclusive digital and physical world, the CPACC
          certification is an excellent step forward!
        </p>
      </section>

      <section aria-labelledby="preparation">
        <h2 className="sub-title" id="preparation">
          Preparing for the CPACC Exam
        </h2>
        <p className="plainText">
          To begin preparing for the CPACC (Certified Professional in
          Accessibility Core Competencies) exam, you should start by reviewing
          the essential study materials. Below are the recommended resources:
        </p>

        <h3 className="inner-title">Recommended Study Resources</h3>
        <ul className="importantNote unListType plainText">
          <li>
            <strong>IAAP Body of Knowledge (BoK):</strong>
            This is a comprehensive guide covering the CPACC exam domains.
            <ul className="unListType plainText">
              <li>
                <Link
                  href="https://www.accessibilityassociation.org/sfsites/c/resource/CPACCBoK"
                  target="_blank"
                  className="link-color-blue mt-2 underline font-semibold hover:no-underline"
                >
                  Download Link{" "}
                  <span className="sr-only">(opens in a new tab)</span>
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <strong>Deque University CPACC Course:</strong>
            <Link
              className="link-color-blue mt-2 underline font-semibold hover:no-underline"
              href="https://dequeuniversity.com/"
              target="_blank"
            >
              Deque University
              <span className="sr-only">(opens in a new tab)</span>
            </Link>
            offers a structured course covering all key topics.
            <ul className="unListType plainText">
              <li>
                <code>samiperveez@hotmail.com</code>, Password:
                <code>Deque1212!</code>
              </li>
              <li>
                <Link
                  className="link-color-blue mt-2 underline font-semibold hover:no-underline"
                  target="_blank"
                  href="https://dequeuniversity.com/class/iaap-cpacc-2.0/toc"
                >
                  CPACC Exam Preparation Course
                  <span className="sr-only">(opens in a new tab)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://dequeuniversity.com/member"
                  target="_blank"
                  className="link-color-blue mt-2 underline font-semibold hover:no-underline"
                >
                  A11y-related Courses{" "}
                  <span className="sr-only">(opens in a new tab)</span>
                </Link>
              </li>
            </ul>
          </li>

          <li>
            Knowledge of{" "}
            <Link
              href="https://www.w3.org/WAI/WCAG22/quickref/?versions=2.2&currentsidebar=%23col_overview&levels=aaa"
              target="_blank"
              className="link-color-blue mt-2 underline font-semibold hover:no-underline"
            >
              WCAG <span className="sr-only">(opens in a new tab)</span>
            </Link>{" "}
            (Web Content Accessibility Guidelines)
            <strong>International Accessibility Laws</strong>
          </li>
          <li>Knowledge of International Accessibility Laws and Guidelines</li>
        </ul>
      </section>

      <section aria-labelledby="application-process">
        <h2 className="sub-title" id="application-process">
          CPACC Exam Application Process: How to Apply?
        </h2>
        <p className="plainText">
          To apply for the CPACC exam, you must create an account on the{" "}
          <strong>
            International Association of Accessibility Professionals (IAAP)
            Dashboard:
          </strong>
        </p>
        <ol className="importantNote olListType plainText">
          <li>
            IAAP Dashboard Link:{" "}
            <Link
              href="https://www.accessibilityassociation.org/certification-portal/s/"
              target="_blank"
              className="link-color-blue mt-2 underline font-semibold hover:no-underline"
            >
              IAAP Dashboard
              <span className="sr-only">(opens in a new tab)</span>
            </Link>
            .
          </li>
          <li>
            Creating a Profile: Follow the instructions on the screen to set up
            your account and fill out the necessary details.
          </li>

          <li>
            <strong> Submitting Application for CPACC:</strong> Here is a
            Step-by-Step
            <Link
              href="https://drive.google.com/file/d/1YUREgiritFJL55FOfu9vNAIjy5HApepZ/view?pli=1"
              target="_blank"
              className="link-color-blue mt-2 underline font-semibold hover:no-underline"
            >
              Video Guide
              <span className="sr-only">(opens in a new tab)</span>
            </Link>{" "}
            for submitting the CPACC Application.
          </li>
        </ol>
        <h3 className="inner-title">Step-by-Step Guide to Application</h3>
        <ol className="importantNote olListType plainText space-y-2">
          <li>
            Log in to the{" "}
            <Link
              href="https://www.accessibilityassociation.org/certification-portal/s/"
              target="_blank"
              rel="noopener noreferrer"
              className="link-color-blue underline font-semibold hover:no-underline"
            >
              IAAP Dashboard
              <span className="sr-only">(opens in a new tab)</span>
            </Link>
            .
          </li>
          <li>
            Navigate to the Apply for a Certification section and select{" "}
            <strong>CPACC</strong>.
          </li>
          <li>
            Follow the on-screen instructions and fill out the application form
            with the required information.
          </li>
          <li>
            Submit the <strong>$25 Application Fee</strong>.
          </li>
          <li>
            <strong>Receive Confirmation Email:</strong> You will first receive
            a confirmation email after submission.
          </li>
          <li>
            <strong>Approval Email:</strong> After verification, IAAP will send
            you an approval email to proceed with the exam fee payment.
          </li>
          <li>Continue with the remaining CPACC Application Form.</li>
          <li>
            Choose <strong>Language Accommodation</strong> (if English is not
            your first language) to get an extra hour for the exam.
          </li>
          <li>
            Choose your preferred proctoring mode:
            <ul className="list-disc list-inside ml-4 mt-1">
              <li>Remote Proctoring (taken from home)</li>
              <li>Onsite Proctoring (taken at a designated testing center)</li>
            </ul>
          </li>
          <li>Choose your preferred exam date &amp; time.</li>
          <li>
            Pay the remaining <strong>$145 CPACC Exam Fee</strong>.
          </li>
          <li>
            <strong>Video Guide on Application Process:</strong>{" "}
            <Link
              href="https://drive.google.com/file/d/1YUREgiritFJL55FOfu9vNAIjy5HApepZ/view"
              target="_blank"
              rel="noopener noreferrer"
              className="link-color-blue underline font-semibold hover:no-underline"
            >
              Watch Step-by-Step Video
              <span className="sr-only">(opens in a new tab)</span>
            </Link>
          </li>
        </ol>
      </section>

      <section aria-labelledby="exam-day">
        <h2 className="sub-title" id="exam-day">
          Preparing for Exam Day: What to Do?
        </h2>
        <p className="plainText">
          Before/On the exam day, make sure to do the following:
        </p>
        <ul className="importantNote unListType plainText space-y-2">
          <li>Make sure to read the instructions provided by IAAP.</li>
          <li>
            Make sure to install all the required software for the exam as
            requested by IAAP.
          </li>
          <li>
            Make sure to have a stable internet connection with at least 6 Mbps
            speed.
          </li>
          <li>
            Make sure to have a good laptop where you have complete Admin
            rights.
          </li>
          <li>Avoid taking the exam on Company Owned/MDM Devices.</li>
          <li>Avoid using a VPN during the exam.</li>
          <li>
            Make sure to run the System Test before and during the exam day.
            <span className="block text-sm text-gray-600">
              (System Test can be found on the exam platform)
            </span>
          </li>
          <li>
            Make sure your table only has essential things like a laptop and
            charger.
          </li>
          <li>
            Make sure your workspace/table is free of extra items, even stuff
            like a tissue box.
          </li>
          <li>
            Make sure your room is clean, noise-free, and distraction-free.
          </li>
          <li>Make sure there is no one in the room.</li>
          <li>
            Make sure all the LCDs, written texts, etc on the walls are fully
            covered.
          </li>
          <li>Make sure the walls of the room are not made of glass.</li>
          <li>Make sure there is no open window in the room.</li>
        </ul>
      </section>

      <section aria-labelledby="exam-experience">
        <h2 className="sub-title" id="exam-experience">
          CPACC Exam Experience: What to Expect?
        </h2>
        <p className="plainText">
          Here is a complete{" "}
          <Link
            href="#"
            target="_blank"
            className="link-color-blue underline font-semibold hover:no-underline"
          >
            {" "}
            document <span className="sr-only">(opens in a new tab)</span>
          </Link>{" "}
          on the Actual CPACC Exam experience along with the complete check-in
          process, exam process, and the questions asked. The document contains
          all the info about the exam.
        </p>
      </section>

      <section aria-labelledby="after-exam">
        <h2 className="sub-title" id="after-exam">
          After the CPACC Exam: What’s Next?
        </h2>
        <p className="plainText">
          After completing the CPACC Exam, you will have to wait around 6 weeks
          for the results. You will get an email from IAAP about the result
          status. Once you have successfully passed the CPACC exam
          (Insha&#39;Allah), your CPACC certification will be listed on your IAAP
          dashboard.
        </p>
      </section>

      <section aria-labelledby="maintaining-certification">
        <h2 className="sub-title" id="maintaining-certification">
          Maintaining CPACC Certification
        </h2>
        <p className="plainText">
          To maintain your CPACC certification, you must earn{" "}
          <strong>45 Continuing Accessibility Education Credits (CAECs)</strong>{" "}
          over three years.
        </p>
        <h3 className="inner-title">How to Earn CAECs? </h3>
        <ul className="importantNote unListType plainText">
          <li>
            <strong>Attend Online Accessibility Events:</strong>
            <ul className="list-disc list-inside plainText">
              <li>
                Various accessibility webinars and conferences provide credit
                hours.
              </li>
              <li>
                In the <strong>A11y Slack workspace</strong>, there is an{" "}
                <a
                  href="https://web-a11y.slack.com/archives/C087CBP9D" // Replace with actual link if available
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-color-blue underline font-semibold hover:no-underline"
                >
                  #events
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>{" "}
                channel where people post all upcoming events that you can
                attend to earn credit hours.
              </li>
              <li>
                You can attend any type of online event/workshop/conference
                related to Accessibility and submit it to earn CAECs against it.
              </li>
            </ul>
          </li>

          <li>
            <strong>Take Professional Accessibility Courses:</strong>
            <ul className="list-disc list-inside plainText">
              <li>
                Courses related to Accessibility from institutions like Deque,
                IAAP, and others.
              </li>
              <li>
                Any course related to Accessibility can be submitted for CAECs.
              </li>
            </ul>
          </li>
        </ul>

        <h3 className="inner-title">How to Submit CAECs</h3>
        <ol className="importantNote olListType plainText">
          <li>
            Navigate to your IAAP{" "}
            <Link
              href="https://www.accessibilityassociation.org/certification-portal/s/"
              target="_blank"
              className="link-color-blue underline font-semibold hover:no-underline"
            >
              dashboard
              <span className="sr-only"> (opens in a new tab)</span>
            </Link>{" "}
            and log in.
          </li>
          <li>
            Go to <strong>My Certifications</strong> and <strong>CAECs</strong>.
          </li>
          <li>
            Under <strong>My Current Certifications</strong>, click on{" "}
            <strong>CPACC</strong>.
          </li>
          <li>Read the instructions on the page.</li>
          <li>
            Scroll down and click on <strong>Begin CAEC Submission</strong>.
          </li>
          <li>Follow the instructions on the page and fill out the form.</li>
          <li>
            Upload proof of your registration/attendance or certificates or
            proof of completion.
          </li>
          <li>
            Here is a demo video to submit CAECs for an attended
            Webinar/Workshop:{" "}
            <Link
              href="https://drive.google.com/file/d/1Uv84SKmIJQE8OOyo6WPr6o-T2VM03M3f/view"
              target="_blank"
              rel="noopener noreferrer"
              className="link-color-blue underline font-semibold hover:no-underline"
            >
              Watch Webinar Submission Demo
              <span className="sr-only">(opens in a new tab)</span>
            </Link>
          </li>
          <li>
            Here is a demo video to submit CAECs for a Course/Certificate:{" "}
            <Link
              href="https://drive.google.com/file/d/1nVYNOQyPVxyOS6-5vO0xju_V78e0-9tY/view"
              target="_blank"
              rel="noopener noreferrer"
              className="link-color-blue underline font-semibold hover:no-underline"
            >
              Watch Course Submission Demo
              <span className="sr-only">(opens in a new tab)</span>
            </Link>
          </li>
        </ol>

        <p className="plainText">
          <strong>Processing Time:</strong> CAECs are processed biweekly, and
          applicants will receive an email notification once reviewed.
        </p>

        <p className="plainText">
          <strong>Verification:</strong> After receiving the email, log in to
          review your CAEC status and check for any denials.
        </p>

        <h3 className="inner-title">CAEC Calculation Examples</h3>
        <ul className="importantNote unListType plainText">
          <li>30 mins = 0.5 CAEC</li>
          <li>40 minutes = 0.75 CAEC</li>
          <li>1 hour = 1 CAEC</li>
          <li>75 mins = 1.25 CAEC</li>
          <li>80 minutes = 1.5 CAEC</li>
          <li>90 mins = 1.5 CAEC</li>
        </ul>
        <p className="plainText">
          By following these steps, you can smoothly navigate through the CPACC
          application process, prepare effectively, and maintain your
          certification successfully.
        </p>
      </section>

      <section aria-labelledby="disclaimer">
        <h2 className="sub-title" id="disclaimer">
          Important Disclaimer!
        </h2>
        <p className="plainText">
          To maintain CPACC certification, candidates must earn 45 Continuing
          Accessibility Education Credits (CAECs) over three years. If a
          candidate <strong>successfully completes</strong> the required{" "}
          <strong>45 CAECs</strong>, they can renew their certification by
          paying a <strong>$75 renewal fee</strong>, thereby extending the
          validity of their certificate for an additional three years.
        </p>

        <p className="plainText">
          <strong> Failure</strong> to complete these credits will result in
          certification expiration, requiring the candidate to <strong> retake the CPACC
          exam</strong> and go through the entire application and testing process again.
        </p>

        <p className="plainText">
          Maintaining certification is essential for keeping up with evolving
          accessibility standards and retaining the professional credibility
          that comes with CPACC.
        </p>
      </section>
    </>
  );
};

export default OurGoals;
