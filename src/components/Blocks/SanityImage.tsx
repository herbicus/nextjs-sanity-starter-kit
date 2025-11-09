import React from "react";
import Image, { type ImageProps } from "next/image";

import { urlFor } from "@/sanity/lib/image";

import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

interface SanityImageProps extends Omit<ImageProps, "src" | "alt"> {
  image: SanityImageSource & {
    alt?: string;
    hotspot?: {
      x?: number;
      y?: number;
      height?: number;
      width?: number;
    };
    crop?: {
      top?: number;
      bottom?: number;
      left?: number;
      right?: number;
    };
  };
  alt?: string;
}

const SanityImage: React.FC<SanityImageProps> = ({
  image,
  alt,
  width,
  height,
  fill,
  ...props
}) => {
  if (!image) return null;

  // Use urlFor to get the image URL from the Sanity image
  const imageUrl = urlFor(image).url();

  // Use the alt text from props or from the image object
  const altText = alt || image.alt || "";

  return (
    <Image
      src={imageUrl}
      alt={altText}
      width={width}
      height={height}
      fill={fill}
      {...props}
    />
  );
};

export default SanityImage;
