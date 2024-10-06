import { tv, type VariantProps } from "tailwind-variants";
import React from "react";

const tvRichText = tv({
  base: "stack-4",
});

export type RichTextProps = {
  compName?: string;
  className?: string;
  html: string;
} & React.HTMLAttributes<HTMLDivElement> &
  VariantProps<typeof tvRichText>;

export const RichText: React.FC<RichTextProps> = ({
  compName = "RichText",
  className,
  html,
}) => {
  return (
    <>
      {html && (
        <div
          data-comp={compName}
          data-testid={compName}
          className={tvRichText({ className })}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      )}
    </>
  );
};
