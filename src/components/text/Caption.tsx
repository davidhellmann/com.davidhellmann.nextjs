import { tv, type VariantProps } from "tailwind-variants";
import React from "react";
import {Headline} from "@/components/marketing/text/Headline.tsx";
import {PlainText} from "@/components/marketing/text/PlainText.tsx";
import {Link} from "@/components/marketing/text/Link.tsx";

const tvCaption= tv({
  slots: {
    slotFigcaption: "flex flex-col gap-1",
    slotHeadline: "",
    slotText: "",
    slotSource: "font-semibold",
    textSize: "",
  },
  variants: {
    size: {
      sm: {
        textSize: "text-xs",
      },
      base: {
        textSize: "text-base",
      },
    }
  }
});

export type FigcaptionProps = {
  compName?: string;
  className?: string;
  headline?: string | undefined;
  text: string;
  source?: string | undefined;
  sourceUrl?: string | undefined;
} & React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof tvCaption>;

export const Caption: React.FC<FigcaptionProps> = ({
  compName = "Caption",
  className,
  size = "sm",
  headline,
  text,
  source,
  sourceUrl,
}) => {
  const { slotFigcaption, slotHeadline, slotText, slotSource, textSize } = tvCaption({size});

  return (
    <>
      {text && (
        <figcaption
          data-comp={compName}
          data-testid={compName}
          className={`${slotFigcaption({size, className})} ${textSize()}`}
        >
          {headline && <Headline text={headline}
            tag={"h3"}
            size={size}
            weight={"semibold"}
            className={slotHeadline()}/>}
          {text && <PlainText className={slotText()}
            text={text}/>}
          {source && !sourceUrl && <PlainText className={slotSource()} text={source} />}
          {source && sourceUrl && <Link
            variant={"inlineSecondary"}
            icon={"arrow-right"}
            text={source}
            href={sourceUrl}
          />}
        </figcaption>
      )}
    </>
  );
};
