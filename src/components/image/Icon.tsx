import { tv, type VariantProps } from "tailwind-variants";
import React from "react";
import { Image, type Asset } from "@/components/image/Image";
import { InlineSvg } from "@/components/image/InlineSvg";

export type IconVariants = VariantProps<typeof tvIcon>;
const tvIcon = tv({
  base: "[&_svg]:size-full",
  variants: {
    size: {
      xs: "size-4",
      sm: "size-6",
      md: "size-12",
      lg: "size-16",
      xl: "size-24",
    },
  },
});

export type IconProps = {
  compName?: string;
  className?: string;
  image?: Asset | undefined;
  inlineSvg?: string | undefined;
} & React.HTMLAttributes<HTMLParagraphElement> &
  IconVariants;

export const Icon: React.FC<IconProps> = ({
  compName = "Icon",
  className,
  image = undefined,
  inlineSvg = undefined,
  size = "md",
}) => {
  return (
    <>
      {(image || inlineSvg) && (
        <div
          data-comp={compName}
          data-testid={compName}
          className={tvIcon({ size, className })}
        >
          {image && (
            <Image
              alt={""}
              image={image}
              ratio="square"
              noscript={false}
              lazy={false}
            />
          )}

          {inlineSvg && <InlineSvg svg={inlineSvg} />}
        </div>
      )}
    </>
  );
};
