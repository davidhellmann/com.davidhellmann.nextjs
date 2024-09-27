import { tv, type VariantProps } from "tailwind-variants";
import React from "react";
import { Headline } from "@/components/marketing/text/Headline";
import { PlainText } from "@/components/marketing/text/PlainText";
import { Eyebrow, type EyebrowVariants } from "@/components/marketing/text/Eyebrow";
import { Image, type Asset } from "@/components/marketing/image/Image";
import { Icon, type IconVariants } from "@/components/marketing/image/Icon";
import { Link, type LinkVariants, type Icon as LinkIcon } from "@/components/marketing/text/Link";

const tvCardText = tv({
  slots: {
    slotCard:
      "rounded-md overflow-hidden flex hover:scale-1025 focus-visible:scale-1025 group-hover:scale-1025 group-focus-visible:scale-1025 transition-transform",
    slotImage: "",
    slotContent: "flex flex-col stack-4 h-full",
    slotLink: "mt-auto no-space-t pt-8",
    slotIcon: "",
  },
  variants: {
    layout: {
      vertical: {
        slotCard: "flex-col",
      },
      horizontal: {
        slotCard: "flex-row",
        slotImage: "w-1/4",
      },
    },
    background: {
      true: {
        slotCard: "shadow-dark-sm bg-white",
      },
    },
    iconColor: {
      black: {
        slotIcon: "[&>svg]:fill-black",
      },
      white: {
        slotIcon: "[&>svg]:fill-white",
      },
      primary: {
        slotIcon: "[&>svg]:fill-primary-500",
      },
    },
    align: {
      left: {
        slotContent: "items-start",
      },
      center: {
        slotContent: "items-center text-center",
      },
    },
  },
});

export type CardTextProps = {
  compName?: string;
  image?: Asset;
  eyebrow?: string;
  eyebrowVariants?: EyebrowVariants;
  headline: string;
  text: string;
  inlineLink?: boolean;
  icon?: string;
  iconVariants?: IconVariants;
  linkText?: string;
  linkHref?: string;
  linkVariants?: LinkVariants;
  linkIcon?: LinkIcon;
  className?: string;
} & React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof tvCardText>;

export const Card: React.FC<CardTextProps> = ({
  compName = "Card",
  image = undefined,
  eyebrow = undefined,
  eyebrowVariants = { color: "primary" },
  headline = undefined,
  text = undefined,
  inlineLink = false,
  icon = undefined,
  linkText = undefined,
  linkHref = undefined,
  linkVariants = { variant: "linkSecondary" },
  linkIcon = undefined,
  align = "left",
  iconVariants = { size: "lg" },
  iconColor = "black",
  background = true,
  layout = "vertical",
  className = "",
}) => {
  const { slotCard, slotImage, slotContent, slotLink, slotIcon } = tvCardText({ layout, background, iconColor, align });
  const TagName = inlineLink ? "article" : "a";
  className = inlineLink ? className : className?.concat(" group");

  let padding = "";
  if (image && layout === "vertical") {
    padding = background ? "px-8 pt-8 pb-12" : "pt-8 pb-12";
  } else if (image && layout === "horizontal") {
    padding = "pl-16 pr-8 pt-8 pb-12";
  } else {
    padding = background ? "p-12" : "py-12";
  }

  return (
    <>
      {text && (
        <TagName
          data-comp={compName}
          data-testid={compName}
          className={`${slotCard({ layout, className })}`}
          href={!inlineLink ? linkHref : undefined}
        >
          {image && <Image className={slotImage()} image={image} ratio="landscape" />}

          <div className={`${slotContent()} ${padding}`}>
            {icon && <Icon className={slotIcon()} inlineSvg={icon} {...iconVariants} />}
            {eyebrow && <Eyebrow text={eyebrow} {...eyebrowVariants} />}
            {headline && <Headline text={headline} preset={"h4"} />}
            {text && <PlainText text={text} />}

            {linkHref && linkText && (
              <div className={slotLink()}>
                <Link href={linkHref} text={linkText} {...linkVariants} icon={linkIcon} fakeLink={!inlineLink} />
              </div>
            )}
          </div>
        </TagName>
      )}
    </>
  );
};
