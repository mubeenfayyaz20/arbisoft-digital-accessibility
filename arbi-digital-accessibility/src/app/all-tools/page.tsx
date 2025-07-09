import React from "react";
import Card from "../components/CustomCard";

const AllTools = () => {
  return (
    <>
      <div className="text-center">
        <h1
          className="text-center largeHeading"
          aria-label="Free Web Accessibility Testing Tools"
        >
          <span
            aria-hidden="true"
            className="flex gap-4 items-center justify-center"
          >
            Free Web Accessibility Testing Tools
            <span className="pills">For Web</span>
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <Card
          title="Andi"
          description="Accessible Name & Description Inspector (ANDI) tool, a web accessibility inspection tool, which performs single page testing to automatically detect accessibility issues."
          buttonText="Andi Download"
          buttonHref="https://www.ssa.gov/accessibility/andi/help/install.html"
          buttonTarget="_blank"
        />
        <Card
          title="Color Contrast Analyzer"
          description="The Color Contrast Analyzer is a feature in Accessibility Insights for Windows that helps developers investigate contrast ratios."
          buttonText="CCA Download"
          buttonHref="https://www.tpgi.com/color-contrast-checker/"
          buttonTarget="_blank"
        />
        <Card
          title="Mac's Voiceover"
          description="VoiceOver is a screen reader built into Apple Inc. VoiceOver gives audible descriptions of what's on your screen. Shortcut key Command + fn + F5"
          buttonText="Voiceover Shortcut keys"
          buttonHref="/mac-shortcut-keys"
        />
        <Card
          title="Window's Narrator"
          description="Narrator lets you use your PC without a mouse to complete common tasks if you’re blind or have low vision. It reads and interacts with things on the screen. Window + Ctrl + Enter"
          buttonText="Window's Narrator Download"
          buttonTarget="_blank"
          buttonHref="https://support.microsoft.com/en-us/windows/chapter-1-introducing-narrator-7fe8fd72-541f-4536-7658-bfc37ddaf9c6"
        />
        <Card
          title="JAWS"
          description="JAWS (Job Access With Speech) is a screen reader designed to assist visually impaired users by converting text on a computer screen into synthesized speech."
          buttonText="JAWS Download"
          buttonTarget="_blank"
          buttonHref="https://support.freedomscientific.com/Downloads/JAWS"
        />
        <Card
          title="Magnifying Glass"
          description="The Magnifier tool enhances screen content by enlarging text and images, making it easier for users with visual impairments to access information."
          buttonText="Magnifying Download"
          buttonTarget="_blank"
          buttonHref="https://chromewebstore.google.com/detail/magnifying-glass-hover-zo/gfcbebjdigncefnokoncehghgfndjcgn?hl=en"
        />
        <Card
          title="Text Spacing Editor"
          description="The Text Spacing Editor tool adjusts letter spacing, word spacing, and line height to improve readability for users with dyslexia or other reading difficulties."
          buttonText="Text Spacing Download"
          buttonTarget="_blank"
          buttonHref="https://chromewebstore.google.com/detail/text-spacing-editor/amnelgbfbdlfjeaobejkfmjjnmeddaoj?hl=en"
        />
        <Card
          title="WAVE Evaluation Tool"
          description="The WAVE tool evaluates web accessibility by identifying issues such as missing alt text, contrast issues, improper heading structures and more."
          buttonText="WAVE Evaluation Download"
          buttonTarget="_blank"
          buttonHref="https://chromewebstore.google.com/detail/wave-evaluation-tool/jbbplnpkjmmeebjpijfedlgcdilocofh"
        />

        <Card
          title="ARC Toolkit"
          description="The ARC Toolkit is a comprehensive suite for assessing and improving web accessibility, offering automated and manual testing tools. It provides actionable insights and reports"
          buttonText="ARC Toolkit Download"
          buttonTarget="_blank"
          buttonHref="https://chromewebstore.google.com/detail/arc-toolkit/chdkkkccnlfncngelccgbgfmjebmkmce"
        />
        <Card
          title="Lighthouse"
          description="Lighthouse audits web pages for performance, SEO, and accessibility, generating detailed reports on best practices. Its accessibility checks help developers identify and fix issues."
          buttonText="Lighthouse Download"
          buttonTarget="_blank"
          buttonHref="https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk"
        />

        <Card
          title="axe DevTools"
          description="The AXE tool is a accessibility testing solution that allows for automated and manual checks. It identifies potential accessibility violations."
          buttonText="axe DevTools Download"
          buttonTarget="_blank"
          buttonHref="https://chromewebstore.google.com/detail/axe-devtools-web-accessib/lhdoppojpmngadmnindnejefpokejbdd"
        />
        <Card
          title="Web Developer Tool"
          description="The Web Developer tool is a browser extension that aids in assessing website accessibility by offering features to inspect elements, check alt text, and modify styles."
          buttonText="Web Developer Download"
          buttonTarget="_blank"
          buttonHref="https://chromewebstore.google.com/detail/web-developer/bfbameneiokkgbdmiekhjnmfkcnldhhm"
        />

        <Card
          title="Read Aloud"
          description="The Read Aloud tool enhances accessibility by converting written text into spoken words, making content more accessible for users with visual impairments or reading difficulties."
          buttonText="Read Aloud Download"
          buttonTarget="_blank"
          buttonHref="https://chromewebstore.google.com/detail/read-aloud-a-text-to-spee/hdhinadidafjejdhmfkjgnolgimiaplp"
        />
        <Card
          title="A11Y HTML5 Validator"
          description="The A11y HTML5 Validator checks web pages for accessibility compliance with HTML5 standards, identifying issues that may hinder usability for individuals with disabilities."
          buttonText="A11Y HTML5 Validator Download"
          buttonTarget="_blank"
          buttonHref="https://chromewebstore.google.com/detail/a11y-html5-validator/cfgfmngpbhlaagbfjhellojpcpcjmnkl"
        />

        <Card
          title="BrowserStack"
          description="BrowserStack is a cross-browser testing tool that allows developers to check website accessibility across various devices and browsers."
          buttonText="BrowserStack Download"
          buttonTarget="_blank"
          buttonHref="https://chromewebstore.google.com/detail/browserstack-accessibilit/fmkhjeeeojocenbconhndpiohohajokn"
        />
        <Card
          title="AChecker+"
          description="Achecker+ is an online tool designed to evaluate web accessibility, helping developers identify and fix issues to ensure compliance with accessibility standards."
          buttonText="AChecker+ Download"
          buttonTarget="_blank"
          buttonHref="https://achecks.org/achecker/#google_vignette"
        />
      </div>
      <div className="text-center">
        <h1
          className="text-center largeHeading"
          aria-label="Free Web Accessibility Testing Tools"
        >
          <span
            aria-hidden="true"
            className="flex gap-4 items-center justify-center"
          >
            Free Accessibility Tools & Plugins
            <span className="pills">For Figma Empower User</span>
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <Card
          title="Stark & Color Contrast "
          description="Tired of manually checking spreadsheets, messy handovers, and expensive retrofitting? The all-new Stark Suite is a powerful combination of integrated tools that help you streamline your accessibility workflow."
          buttonText="Stark Download"
          buttonHref="https://www.figma.com/community/plugin/732603254453395948/stark-contrast-accessibility-checker"
          buttonTarget="_blank"
        />
        <Card
          title="Able Friction free"
          description="Able makes accessibility easy, while looking and feeling like Figma! Add color contrast and color blindness to your workflow with as little effort as possible. Open Able and we will automatically compare the contrast between two layers you select."
          buttonText="Able Download"
          buttonHref="https://www.figma.com/community/plugin/734693888346260052/able-friction-free-accessibility"
          buttonTarget="_blank"
        />
        <Card
          title="Accessible Form"
          description=" Level AA contrast ratio, Supporting icons,  Easily recognizable states for active, hover, filled, error, disabled, Variants and interactivity"
          buttonText="Accessible Form Download"
          buttonHref="https://www.figma.com/community/file/804999237128200119"
          buttonTarget="_blank"
        />
        <Card
          title="A11y - Focus Order"
          description="The A11y - Focus Order plugin lets you add accessibility annotations over your designs for the interactive elements of desktop, website, and mobile applications."
          buttonText="A11y Download"
          buttonTarget="_blank"
          buttonHref="https://www.figma.com/community/plugin/731310036968334777/a11y-focus-order"
        />
      </div>
      <div className="text-center">
        <h1
          className="text-center largeHeading"
          aria-label="Free Web Accessibility Testing Tools"
        >
          <span
            aria-hidden="true"
            className="flex gap-4 items-center justify-center"
          >
            Free Accessibility Tools & Plugins
            <span className="pills">For Mobile</span>
          </span>
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <Card
          title="Accessibility scanner (Andriod) "
          description="Google Accessibility Scanner is a free Android tool that helps developers identify accessibility issues in their apps. It analyzes the user interface and suggests improvements like: Adding content descriptions (labels)
Increasing touch target size, Improving text contrast etc."
          buttonText="Accessibility Scanner Download"
          buttonHref="https://play.google.com/store/apps/details?id=com.google.android.apps.accessibility.auditor"
          buttonTarget="_blank"
        />
         <Card
          title="TalkBack Build In (Android)"
          description="TalkBack is the Android screen reader that gives spoken feedback for everything on the screen, making the device accessible for users with low or no vision. Reads all visible UI elements: buttons, headings, form inputs, etc. Gesture-based navigation: swipe gestures to move between items, double-tap to activate. Provides feedback on focus, selection, and errors. How to Enable Settings → Accessibility → TalkBack"
        />
        <Card
          title="VoiceOver Build In (iOS)"
          description="VoiceOver is a built-in screen reader on all Apple devices, including iPhone and iPad. It allows visually impaired users to use their device without seeing the screen. Speaks aloud everything on the screen: buttons, text, icons, and more. Users navigate by swiping and tapping.Supports gestures like swipe left/right to move focus and double-tap to activate. How to Enable go to Settings → Accessibility → VoiceOver"
        />
       
     
      </div>
    </>
  );
};

export default AllTools;
