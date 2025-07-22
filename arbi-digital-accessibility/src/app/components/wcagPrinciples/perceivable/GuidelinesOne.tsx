import React from "react";
import TrackedLink from "../../TrackedLink";

const GuidelinesOne = () => {
  return (
    <div className="plainText">
      <strong> Guideline 1.1 – Text Alternatives </strong>Provide text
      alternatives for any non-text content so that it can be changed into other
      forms people need, such as large print, braille, speech, symbols or
      simpler language.
      <ul className="innerList">
        <li>
          <strong> 1.1.1 Non-text Content - Level A</strong>
          &nbsp; All non-text content that is presented to the user has a text
          alternative that serves the equivalent purpose.
          <ul className="innerList">
            <li>
              <strong> Meaningful-image-name</strong> All meaningful images that
              are presented to the user have equivalent, accessible
              descriptions.
              <TrackedLink
                href="/wcagprincipals/perceivable/guidelines-one/meaning-ful-image-name"
                id="meaningful-image-link1"
                accordionIndex={0}
                className="font-bold link-color-blue underline"
              >
                Meaningful Image Name Demo
              </TrackedLink>
            </li>
            <li>
              <strong> Decorative-image</strong> All decorative images that are
              presented to the user do not have alternate text.
              <TrackedLink
                href="/wcagprincipals/perceivable/guidelines-one/decorative-image"
                id="decorative-image1"
                accordionIndex={0}
                className="font-bold link-color-blue underline"
              >
                Decorative Image Demo
              </TrackedLink>
            </li>
            <li>
              <strong> Decorative-background-image</strong>
              &nbsp;requires that important information provided by background images
              is also included by other methods.
                 <TrackedLink
                href="/wcagprincipals/perceivable/guidelines-one/decorative-background-image"
                id="decorative-bg-image1"
                accordionIndex={0}
                className="font-bold link-color-blue underline"
              >
                Decorative Background Images Demo

              </TrackedLink>
           
            </li>
            <li>
              <strong> Captcha-alternative</strong> requires that CAPTCHA
              provides formats for users without vision and users without
              hearing.
                       <TrackedLink
                href="/wcagprincipals/perceivable/guidelines-one/captcha-alternative"
                id="captcha-alternative1"
                accordionIndex={0}
                className="font-bold link-color-blue underline"
              >
                  Captcha Alternatives Demo

              </TrackedLink>
       
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default GuidelinesOne;
