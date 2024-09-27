import { tv, type VariantProps } from "tailwind-variants";
import React from "react";

const tvHeadline = tv({
  base: "",
  variants: {
    preset: {
      h1: "text-4xl font-extrabold",
      h2: "text-3xl font-extrabold",
      h3: "text-2xl font-extrabold",
      h4: "text-xl font-extrabold",
      h5: "text-lg font-extrabold",
      h6: "text-base font-extrabold",
    },
    size: {
      "4xl": "text-4xl",
      "3xl": "text-3xl",
      "2xl": "text-2xl",
      xl: "text-xl",
      lg: "text-lg",
      base: "text-base",
      sm: "text-sm",
      xs: "text-xs",
      "2xs": "text-2xs",
      "3xs": "text-3xs",
    },
    weight: {
      light: "font-light",
      normal: "font-normal",
      semibold: "font-semibold",
      extrabold: "font-extrabold",
    },
  }
});

type HeadlineTags = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

export type HeadlineProps = {
  compName?: string;
  tag?: HeadlineTags;
  text: string;
  className?: string;
} & React.HTMLAttributes<HTMLHeadingElement> &
  VariantProps<typeof tvHeadline>;

export const Headline: React.FC<HeadlineProps> = ({
  compName = "Headline",
  tag: TagName = "h2",
  text,
  preset= "h2",
  size,
  weight,
  className,
}) => {
  return (
    <>
      {text && (
        <TagName
          data-comp={compName}
          data-testid={compName}
          className={tvHeadline({ preset, size, weight, className })}
        >
          {text}
        </TagName>
      )}
    </>
  );
};
