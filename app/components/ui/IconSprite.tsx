import { tv, type VariantProps } from "tailwind-variants";
import React from "react";
import type { MarketingIcons } from "@/types/marketing-icons";

type context = "marketing";

const tvIconSprite= tv({
  base: "inline-flex",
  variants: {
    size: {
      16: "size-4",
      20: "size-5",
      24: "size-6",
      32: "size-8",
      48: "size-12",
      64: "size-16",
      relative: "size-[1em]",
    }
  },
});

export type IconSpriteProps = {
  compName?: string;
  icon?: MarketingIcons;
  context?: context;
  className?: string;
} & React.HTMLAttributes<HTMLOrSVGElement> &
  VariantProps<typeof tvIconSprite>;

export const IconSprite: React.FC<IconSpriteProps> = ({
  compName = "IconSprite",
  icon: iconName,
  context = "marketing",
  size= 20,
  className,
}) => {
  return (
    <>
      {iconName && (
        <svg
          data-icon-name={iconName}
          data-comp={compName}
          data-testid={compName}
          className={tvIconSprite({size, className})}
          aria-hidden="true"
        >
          <use xlinkHref={`/icons/sprites/${context}/sprite.svg#${iconName}`}></use>
        </svg>
      )}
    </>
  );
};
