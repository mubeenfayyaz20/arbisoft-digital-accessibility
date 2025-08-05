import React from "react";
import TrackedLink from "../../TrackedLink";
const GuidelinesFour = () => {
  return (
    <div className="plainText">
      <strong>Guideline 1.4 - Distinguishable</strong> ensures users can easily
      perceive and differentiate content, emphasizing color contrast, text
      spacing, and visibility to enhance accessibility.
      <ul className="innerList">
        <li>
          <strong>1.4.1 Use of Color</strong> requires that color is not the
          only visual means used to convey information, indicate an action,
          prompt a response, or distinguish a visual element.{" "}
          <TrackedLink
            href="/wcagprincipals/perceivable/guidelines-four/use-of-color"
            id="use-of-color-link"
            accordionIndex={3}
            className="font-bold link-color-blue underline"
          >
            Use of Color Demo
          </TrackedLink>
        </li>
        <li>
          <strong>1.4.2 Audio Control</strong> requires a method for pausing and
          stopping audio or controlling the volume of auto-playing content
          within the first three elements a user encounters on a web page.{" "}
          <TrackedLink
            href="/wcagprincipals/perceivable/guidelines-four/audio-control"
            id="audio-control-link"
            accordionIndex={3}
            className="font-bold link-color-blue underline"
          >
            Audio Control Demo
          </TrackedLink>
        </li>
        <li>
          <strong>1.4.3 Contrast (Minimum)</strong> ensures that text and
          interactive elements have sufficient contrast against their background
          to enhance readability for users with visual impairments.{" "}
          <TrackedLink
            href="/wcagprincipals/perceivable/guidelines-four/contrast-minimum"
            id="contrast-minimum-link"
            accordionIndex={3}
            className="font-bold link-color-blue underline"
          >
            Contrast (Minimum) Demo
          </TrackedLink>
        </li>
        <li>
          <strong>1.4.4 Resize Text</strong> requires that there is a mechanism
          to resize, scale, or zoom in on the text to at least 200% of its
          original size without loss of content or functionality.{" "}
          <TrackedLink
            href="/wcagprincipals/perceivable/guidelines-four/resize-text"
            id="resize-text-link"
            accordionIndex={3}
            className="font-bold link-color-blue underline"
          >
            Resize Text Demo
          </TrackedLink>
        </li>
        <li>
          <strong>1.4.5 Images of Text</strong> requires that images of text are
          either essential, such as logotypes, or presented along with user
          controls to customize font, size, color and background.{" "}
          <TrackedLink
            href="/wcagprincipals/perceivable/guidelines-four/images-of-text"
            id="images-of-text-link"
            accordionIndex={3}
            className="font-bold link-color-blue underline"
          >
            Images of Text Demo
          </TrackedLink>
        </li>
        <li>
          <strong>1.4.10 Reflow</strong> ensures that content can adapt to
          various screen sizes, with a minimum width of 320 pixels and a height
          of 256 pixels.{" "}
          <TrackedLink
            href="/wcagprincipals/perceivable/guidelines-four/reflow"
            id="reflow-link"
            accordionIndex={3}
            className="font-bold link-color-blue underline"
          >
            Reflow Demo
          </TrackedLink>
        </li>
        <li>
          <strong>1.4.11 Non-text Contrast</strong> requires that visual
          elements, such as user interface components and graphical objects,
          have a contrast ratio of at least 3:1 against adjacent colors.{" "}
          <TrackedLink
            href="/wcagprincipals/perceivable/guidelines-four/non-text-contrast"
            id="non-text-contrast-link"
            accordionIndex={3}
            className="font-bold link-color-blue underline"
          >
            Non-text Contrast Demo
          </TrackedLink>
        </li>
        <li>
          <strong>1.4.12 Text Spacing</strong> ensures that users can adjust the
          spacing between characters, words, lines, and paragraphs without loss
          of content or functionality.{" "}
          <TrackedLink
            href="/wcagprincipals/perceivable/guidelines-four/text-spacing"
            id="text-spacing-link"
            accordionIndex={3}
            className="font-bold link-color-blue underline"
          >
            Text Spacing Demo
          </TrackedLink>
        </li>
        <li>
          <strong>1.4.13 Content on Hover or Focus</strong> requires that any
          content displayed on hover or focus (like tooltips or menus) must be
          accessible and not obscure other content.{" "}
          <TrackedLink
            href="/wcagprincipals/perceivable/guidelines-four/content-on-hover-or-focus"
            id="content-on-hover-focus-link"
            accordionIndex={3}
            className="font-bold link-color-blue underline"
          >
            Content on Hover or Focus Demo
          </TrackedLink>
        </li>
      </ul>
    </div>
  );
};

export default GuidelinesFour;
