"use client";
import React, {type JSX} from "react";
import styles from "../styles/components/Common.module.scss";

type SvgWithCaptionProps = {
  icon: (props: React.SVGProps<SVGSVGElement>) => JSX.Element;
  caption?: string;
  iconProps?: React.SVGProps<SVGSVGElement>;
  className?: string; // wrapper class
  captionClassName?: string;
};

const SvgWithCaption = ({
  icon: Icon,
  caption,
  iconProps = {},
  className = "",
  captionClassName = "",
}: SvgWithCaptionProps) => {
  return (
    <figure className={`${styles.demoFigure} ${className}`}>
      <Icon {...iconProps} className={styles.demoImage} />
      {caption && (
        <figcaption className={`${styles.figCaption} ${captionClassName}`}>
          <span className="material-symbols-outlined" aria-hidden="true">
            photo_camera
          </span>
          Fig: {caption}
        </figcaption>
      )}
    </figure>
  );
};

export default SvgWithCaption;
