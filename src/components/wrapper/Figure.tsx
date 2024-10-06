import { tv, type VariantProps } from "tailwind-variants";
import React from "react";
import {Caption} from "@/components/text/Caption";

const tvFigure= tv({
  slots: {
    figure: "flex flex-col gap-2 bg-neutral-200 px-4 pt-4 pb-3 rounded-md overflow-hidden",
    figcaption: "",
  },
});

export type FigureProps = {
  compName?: string;
  className?: string | undefined;
  headline?: string | undefined;
  text?: string | undefined;
  source?: string | undefined;
  sourceUrl?: string | undefined;
} & React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof tvFigure>;

export const Figure: React.FC<FigureProps> = ({
  compName = "Figure",
  className,
  headline,
  text,
  source,
  sourceUrl ,
  children,
}) => {
  const { figure, figcaption } = tvFigure({ className });

  return (
    <>
      <figure
        data-comp={compName}
        data-testid={compName}
        className={figure({className})}
      >
        {children}
        {text && <Caption
          text={text}
          headline={headline}
          source={source}
          sourceUrl={sourceUrl}
          className={figcaption()}
        />}
      </figure>
    </>
  );
};
