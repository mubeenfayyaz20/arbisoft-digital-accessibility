"use client";
 import { ReactElement, isValidElement, cloneElement, HTMLAttributes } from "react";

import Image from "next/image";
import type { StaticImageData } from "next/image";
import styles from "../styles/components/Common.module.scss";
import { PhotoCamera } from "@mui/icons-material";

interface ImageWithCaptionProps {
  src: string | StaticImageData;
  alt: string;
  caption: string;
  width?: number;
  height?: number;
  icon?: ReactElement | null; // 👈 More specific type
}

const ImageWithCaption = ({
  src,
  alt,
  caption,
  width = 400,
  height = 300,
  icon = <PhotoCamera />,
}: ImageWithCaptionProps) => {
  const normalizedSrc =
    typeof src === "string" && src.startsWith(".")
      ? src.replace(/^\.\/+/, "/")
      : src;


// ...

const renderedIcon =
  icon && isValidElement(icon)
    ? cloneElement(icon, { "aria-hidden": "true" } as HTMLAttributes<HTMLElement>)
    : null;

  return (
    <figure className={styles.demoFigure}>
      <Image
        src={normalizedSrc}
        alt={alt}
        width={width}
        height={height}
        className={styles.demoImage}
      />
      <figcaption className={styles.figCaption}>
        {renderedIcon}
        Fig: {caption}
      </figcaption>
    </figure>
  );
};

export default ImageWithCaption;
