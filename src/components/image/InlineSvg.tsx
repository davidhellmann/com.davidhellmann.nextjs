import { tv, type VariantProps } from "tailwind-variants";
import React from "react";
import parse from "html-react-parser";

const tvInlineSvg = tv({
  base: "w-full h-auto",
});

export type InlineSvgProps = {
  compName?: string;
  className?: string;
  svg: string;
} & React.HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof tvInlineSvg>;

export const InlineSvg: React.FC<InlineSvgProps> = ({
  compName = "InlineSvg",
  className,
  svg,
}) => {
  return (
    <>
      {parse(svg, {
        replace: (domNode) => {
          if (domNode.type === "tag" && domNode.name === "svg") {
            const viewBox = domNode.attribs.viewBox;
            if (viewBox && !domNode.attribs.width && !domNode.attribs.height) {
              const width = domNode.attribs.viewBox?.split(" ")[2];
              const height = domNode.attribs.viewBox?.split(" ")[3];

              if (width && height) {
                domNode.attribs.width = width;
                domNode.attribs.height = height;
              }
            }
            domNode.attribs["data-comp"] = compName;
            domNode.attribs["data-testid"] = compName;
            domNode.attribs.class = tvInlineSvg({ className });
          }
          return domNode;
        },
      })}
    </>
  );
};
