import { tv, type VariantProps } from "tailwind-variants";
import React from "react";

const tvEyebrow = tv({
  base: "uppercase font-extrabold text-sm",
  variants: {
    color: {
      primary: "text-primary-500",
      secondary: "text-secondary-500",
      positive: "text-positive-500",
      tertiary: "text-tertiary-500",
      white: "text-white",
    },
  },
});

export type EyebrowVariants = VariantProps<typeof tvEyebrow>;

export type EyebrowProps = {
  compName?: string;
  text: string;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement> &
  EyebrowVariants;

export const Eyebrow: React.FC<EyebrowProps> = ({
  compName = "Eyebrow",
  text,
  color = "primary",
  className,
}) => {
  return (
    <>
      {text && (
        <div
          data-comp={compName}
          data-testid={compName}
          className={tvEyebrow({ color, className })}
        >
          {text}
        </div>
      )}
    </>
  );
};
