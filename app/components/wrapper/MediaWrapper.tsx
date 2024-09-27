import { tv, type VariantProps } from "tailwind-variants";
import React from "react";

const tvMediaWrapper= tv({
  base: "overflow-clip",
  variants: {
    preset: {
      "unset": "",
      "gradient-primary": "from-primary-500 to-primary-700",
      "gradient-secondary": "from-secondary-500 to-secondary-700",
      "gradient-positive": "from-positive-500 to-positive-600",
      "screenshot": "rounded-md"
    }
  },
  compoundVariants: [
    {
      preset: ["gradient-primary", "gradient-secondary", "gradient-positive"],
      class: "[&_img]:rounded-ss-md [&_img]:rounded-se-md rounded-md px-6 pt-6 @xl:px-24 @xl:pt-24 bg-gradient-to-b"
    }
  ]
});

export type MediaWrapperProps = {
  compName?: string;
  className?: string | undefined;
} & React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof tvMediaWrapper>;

export const MediaWrapper: React.FC<MediaWrapperProps> = ({
  compName = "MediaWrapper",
  className,
  preset,
  children,
}) => {
  return (
    <>
      <div
        data-comp={compName}
        data-testid={compName}
        className={tvMediaWrapper({preset, className})}
      >
        {children}
      </div>
    </>
  );
};
