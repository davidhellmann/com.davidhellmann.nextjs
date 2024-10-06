import { tv, type VariantProps } from "tailwind-variants";
import React from "react";
import {
  Asset_DataFragment,
  Asset_TransformsFragment,
} from "@/graphql/graphql";

export type ObjectFit = "cover" | "contain" | "fill" | "none" | "scale-down";
export type Asset = Asset_DataFragment & Asset_TransformsFragment & {
  dtmOptimizedImageAuto?: {
    webpSrcset?: string | null;
    placeholderImage?: string | null;
  };
  alt?: string | null;
};

const tvImage= tv({
  base: "",
  variants: {
    ratio: {
      "unset": "",
      "auto": "aspect-auto",
      "landscape": "aspect-landscape",
      "portrait": "aspect-portrait",
      "square": "aspect-square",
    }
  },
});

export type ImageProps = {
  compName?: string;
  className?: string;
  image?: Asset;
  lazy?: boolean;
  objectFit?: ObjectFit;
  focalPoint?: number[];
  alt?: string;
  srcset?: string;
  src?: string;
  placeholder?: string;
  width?: number;
  height?: number;
  noscript?: boolean;
  decorative?: boolean;
} & VariantProps<typeof tvImage>;

export const Image: React.FC<ImageProps> = ({
  compName = "Image",
  className,
  image = undefined,
  lazy = true,
  objectFit = "cover",
  ratio= "landscape",
  alt = "",
  focalPoint = undefined,
  src = undefined,
  srcset = undefined,
  placeholder = undefined,
  width = undefined,
  height = undefined,
  noscript = true,
  decorative = false,
}) => {
  // Set Focal Point
  const focalPointCoordinates = {
    x: image?.focalPoint?.[0] || focalPoint?.[0] || 0.5,
    y: image?.focalPoint?.[1] || focalPoint?.[1] || 0.5,
  };

  // Set Role presentation for decorative images
  const role = decorative ? "presentation" : undefined;

  src = image?.url ?? src;
  width = image?.width ?? width;
  height = image?.height ?? height;
  srcset = image?.dtmOptimizedImageAuto?.webpSrcset ?? srcset;
  placeholder = image?.dtmOptimizedImageAuto?.placeholderImage ?? placeholder;
  alt = !decorative ? image?.alt ?? image?.title ?? alt : "";
  lazy = !src ? false : lazy;


  const attr = {
    width,
    height,
    style: {
      objectFit: objectFit,
      objectPosition: `${focalPointCoordinates.x * 100}% ${focalPointCoordinates.y * 100}%`,
    },
  };

  const renderNoscript: React.ReactElement = (
    <noscript><img src={src} alt={alt}/></noscript>
  );

  return (
    <>
      <img
        data-comp={compName}
        data-testid={compName}
        className={tvImage({ratio, className})}
        {...attr}
        alt={alt}
        src={lazy && placeholder ? placeholder : src ? src : placeholder}
        srcSet={!lazy ? srcset : undefined}
        data-src={lazy && !srcset ? src : null}
        data-srcset={lazy && srcset ? srcset : null}
        loading={lazy ? "lazy" : "eager"}
        sizes={!lazy ? "auto" : undefined}
        data-sizes={lazy ? "auto" : undefined}
        role={role}
      />
      {noscript && renderNoscript}
    </>
  );
};
