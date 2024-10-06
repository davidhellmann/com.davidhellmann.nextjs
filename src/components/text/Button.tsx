import { type VariantProps } from "tailwind-variants";
import React from "react";
import { Button as AriaButton } from "react-aria-components";
import type { ButtonProps as AriaButtonProps } from "react-aria-components";
import { IconSprite } from "@/components/ui/IconSprite";
import { tvLink } from "@/components/text/Link";
import { Icons } from "@/types/icons";

type Icon = Icons | undefined;

export type ButtonProps = {
  compName?: string;
  text?: string;
  icon?: Icon;
  className?: string;
  children?: React.ReactNode;
} & (React.HTMLAttributes<HTMLButtonElement>) &
  VariantProps<typeof tvLink> &
  AriaButtonProps;

export const Button: React.FC<ButtonProps> = ({
  compName = "Button",
  text,
  variant = "primary",
  gapSize = 2,
  icon = null,
  iconPosition= "right",
  className,
  ...props
}) => {
  // Check if we have an Icon only case
  let _iconPosition = iconPosition;
  if (!text && icon) {
    _iconPosition = "only";
  }

  return (
    (text || icon) && (
      <AriaButton
        data-comp={compName}
        data-testid={compName}
        className={tvLink({ variant, iconPosition: _iconPosition, gapSize, className })}
        {...props}
      >
        {text}
        {icon && <IconSprite icon={icon} size={"relative"} />}
      </AriaButton>
    )
  );
};
