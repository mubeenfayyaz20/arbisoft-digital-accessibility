import React from "react";
import TrackedLink from "../../TrackedLink";

const GuidelinesThree = () => {
  return (
    <div className="plainText">
    <strong>Guideline 1.3 - Adaptable</strong> ensures
    that the content can be presented in different ways
    without losing meaning.

<ul className="innerList">
  <li>
    <strong>1.3.1 Info and Relationships</strong>{" "}
    ensures that information and its connections are programmatically identifiable, allowing assistive
    technologies to convey structure accurately.

    <ul className="innerList">
      <li>
        <strong>Heading-determinable and levels</strong>
        ensures that headings are used correctly and in a hierarchical manner, allowing users to
        easily understand the content.{" "}
        <TrackedLink
          href="/wcagprincipals/perceivable/guidelines-three/heading-determinable-and-levels"
          id="heading-determinable-and-levels"
          accordionIndex={2}
          className="font-bold link-color-blue underline"
        >
          Heading Determinable and Levels Demo
        </TrackedLink>
      </li>
      <li>
        <strong>List-type</strong> requires that all visually apparent lists are programmatically
        identified as the correct list type: ordered, unordered, or description list.{" "}
        <TrackedLink
          href="/wcagprincipals/perceivable/guidelines-three/list-type"
          id="list-type"
          accordionIndex={2}
          className="font-bold link-color-blue underline"
        >
          List Type Demo
        </TrackedLink>
      </li>
      <li>
        <strong>Programmatic-label</strong> requires that all form elements have programmatic
        associations which accurately describe the form element and include all relevant
        instructions.{" "}
        <TrackedLink
          href="/wcagprincipals/perceivable/guidelines-three/programmatic-label"
          id="programmatic-label"
          accordionIndex={2}
          className="font-bold link-color-blue underline"
        >
          Programmatic Label Demo
        </TrackedLink>
      </li>
      <li>
        <strong>Table-identification</strong> requires that data tables have the correct
        programmatic table markup to identify them as data tables.{" "}
        <TrackedLink
          href="/wcagprincipals/perceivable/guidelines-three/table-identification"
          id="table-identification"
          accordionIndex={2}
          className="font-bold link-color-blue underline"
        >
          Table Identification Demo
        </TrackedLink>
      </li>
      <li>
        <strong>Cell-header-association</strong> requires that data table cells are correctly
        associated with the relevant headers.{" "}
        <TrackedLink
          href="/wcagprincipals/perceivable/guidelines-three/cell-header-association"
          id="cell-header-association"
          accordionIndex={2}
          className="font-bold link-color-blue underline"
        >
          Cell Header Association Demo
        </TrackedLink>
      </li>
      <li>
        <strong>Layout-table-structure</strong> requires that layout tables are not coded as data
        tables. No data table semantics should be detected.{" "}
        <TrackedLink
          href="/wcagprincipals/perceivable/guidelines-three/layout-table"
          id="layout-table-structure"
          accordionIndex={2}
          className="font-bold link-color-blue underline"
        >
          Layout Table Structure Demo
        </TrackedLink>
      </li>
    </ul>
  </li>

  <li>
    <strong>1.3.2 Meaningful Sequence</strong> requires that content is presented in a logical
    order, ensuring that users can understand and navigate the information effectively.
    <ul className="innerList">
      <li>
        <strong>Content-order-meaning-CSS-position</strong> ensures that the visual layout does not
        change the meaning of content, allowing assistive technologies to interpret it correctly.{" "}
        <TrackedLink
          href="/wcagprincipals/perceivable/guidelines-three/content-order-meaning-css-position"
          id="content-order-meaning-css-position"
          accordionIndex={2}
          className="font-bold link-color-blue underline"
        >
          Content Order Meaning CSS Position Demo
        </TrackedLink>
      </li>
    </ul>
  </li>

  <li>
    <strong>1.3.3 Sensory Characteristics</strong> requires that instructions for user interactions
    do not rely solely on sensory characteristics, such as shape, color, visual location or sound.{" "}
    <TrackedLink
      href="/wcagprincipals/perceivable/guidelines-three/sensory-characteristics"
      id="sensory-characteristics"
      accordionIndex={2}
      className="font-bold link-color-blue underline"
    >
      Sensory Characteristics Demo
    </TrackedLink>
  </li>

  <li>
    <strong>1.3.4 Orientation</strong> mandates that content must be presented in a way that
    supports both portrait and landscape orientations.{" "}
    <TrackedLink
      href="/wcagprincipals/perceivable/guidelines-three/orientation"
      id="orientation"
      accordionIndex={2}
      className="font-bold link-color-blue underline"
    >
      Orientation Demo
    </TrackedLink>
  </li>

  <li>
    <strong>1.3.5 Identify Input Purpose</strong> requires that users are informed about the
    expected purpose of input fields through clear labels or instructions.{" "}
    <TrackedLink
      href="/wcagprincipals/perceivable/guidelines-three/identify-input-purpose"
      id="identify-input-purpose"
      accordionIndex={2}
      className="font-bold link-color-blue underline"
    >
      Identify Input Purpose Demo
    </TrackedLink>
  </li>
</ul>

  </div>
  
  );
};

export default GuidelinesThree;
