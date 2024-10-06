import { tv, type VariantProps } from "tailwind-variants";
import React from "react";
import { Link as AriaLink } from "react-aria-components";
import type { LinkProps as AriaLinkProps } from "react-aria-components";
import { IconSprite } from "@/components/ui/IconSprite";
import { Icons } from "@/types/icons";

export type Icon = Icons | undefined;
export type LinkVariants = VariantProps<typeof tvLink>;
export const tvLink = tv({
  base: "transition font-semibold [&_svg]:shrink-0 text-pretty",
  variants: {
    variant: {
      primary: `
        text-white 
        bg-primary-500 disabled:bg-primary-300
        hover:bg-primary-600 group-hover:bg-primary-600 
        focus-visible:bg-primary-600 group-focus-visible:bg-primary-600 
        border-primary-500 disabled:border-primary-300
        hover:border-primary-600 group-hover:border-primary-600
        focus-visible:border-primary-600 group-focus-visible:border-primary-600
      `,
      secondary: `
        text-black disabled:text-neutral-300
        hover:text-white group-hover:text-white
        disabled:hover:text-neutral-300 disabled:group-hover:text-neutral-300
        focus-visible:text-white group-focus-visible:text-white
        bg-transparent 
        hover:bg-black group-hover:bg-black  
        disabled:hover:bg-transparent disabled:group-hover:bg-transparent  
        focus-visible:bg-black group-focus-visible:bg-black  
        border-black disabled:border-neutral-300
      `,
      linkPrimary: "text-primary-500",
      linkSecondary: "text-black",
      inlinePimary: "text-primary-500 hover:text-black inline-flex items-center",
      inlineSecondary: "text-black hover:text-primary-500 inline-flex items-center",
    },
    iconPosition: {
      left: "[&_svg]:-ml-2 flex-row-reverse",
      right: "[&_svg]:-mr-2 flex-row",
      only: "[&_svg]:-mx-2",
    },
    gapSize: {
      2: "gap-2",
      4: "gap-4",
    },
  },
  compoundVariants: [
    {
      variant: ["primary", "secondary"],
      class: "inline-flex items-center rounded-md border-2 py-2.5 px-8",
    },
    {
      variant: ["primary", "secondary"],
      iconPosition: "only",
      class: "py-3",
    },
    {
      variant: ["linkPrimary", "linkSecondary"],
      class: `
        inline py-3.5 pr-[1.5em]
        [&>span]:transition-all 
        [&>span]:w-[calc(100%_+_1px)]
        [&>span]:bg-no-repeat 
        [&>span]:bg-[length:100%_100%,0%_100%]
        [&>span]:py-1.5
        [&>span_svg]:hover:translate-x-1
        [&>span_svg]:group-hover:translate-x-1
        [&>span_svg]:focus-visible:translate-x-1
        [&>span_svg]:group-focus-visible:translate-x-1
        [&>span]:hover:bg-[length:100%_100%]
        [&>span]:group-hover:bg-[length:100%_100%]
        [&>span]:focus-visible:bg-[length:100%_100%]
        [&>span]:group-focus-visible:bg-[length:100%_100%]
        [&>span_svg]:transition-transform
        [&>span_svg]:ml-2
        [&>span_svg]:mr-[-1.4em] 
      `,
    },
  ],
});

export type LinkProps = {
  compName?: string;
  text?: string;
  href: string;
  icon?: Icon;
  fakeLink?: boolean;
  className?: string;
  children?: React.ReactNode;
} & React.HTMLAttributes<HTMLElement> &
  LinkVariants &
  AriaLinkProps;

export const Link: React.FC<LinkProps> = ({
  compName = "Link",
  text,
  href,
  variant = "primary",
  gapSize = 2,
  fakeLink = false,
  icon = null,
  iconPosition = "right",
  className,
  ...props
}) => {
  const TagName = fakeLink ? "div" : AriaLink;

  // Check if we have an Icon only case
  let _iconPosition = iconPosition;
  if (!text && icon) {
    _iconPosition = "only";
  }

  // Check if we need a text split
  const needsSplit = ["linkPrimary", "linkSecondary"].includes(variant);

  // Split the text
  const getSplittedText = (text: string) => {
    const words = text.split(" ");
    const firstPart = words.slice(0, -2).join(" ");
    const lastPart = ` ${words.slice(-2).join(" ")}`;

    return { firstPart, lastPart };
  };

  // Button Markup
  const buttonMarkup = () => {
    const iconPart = icon && <IconSprite icon={icon} size={"relative"} />;
    const textPart = text && (
      <>
        {getSplittedText(text)?.firstPart}
        <span className={"whitespace-nowrap"}>
          {getSplittedText(text)?.lastPart}
          {iconPart}
        </span>
      </>
    );

    return (
      <>
        {needsSplit ? textPart : text}
        {!needsSplit && iconPart}
      </>
    );
  };

  return (
    href &&
    (text || icon) && (
      <TagName
        href={fakeLink ? "" : href}
        data-comp={compName}
        data-testid={compName}
        className={tvLink({ variant, iconPosition: _iconPosition, gapSize, className })}
        {...props}
      >
        {needsSplit ? (
          <span
            style={{
              backgroundImage: `
            linear-gradient(transparent calc(100% - 2px), 
            color-mix(in srgb, currentColor 25%, transparent) 2px),
            linear-gradient(transparent calc(100% - 2px), currentColor 2px)
          `,
            }}
          >
            {buttonMarkup()}
          </span>
        ) : (
          buttonMarkup()
        )}
      </TagName>
    )
  );
};
