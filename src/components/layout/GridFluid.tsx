import { tv, type VariantProps } from "tailwind-variants";
import React from "react";

const tvGridFluid = tv({
  base: "fluid-grid",
  variants: {
    stack: {
      unset: "",
      0: "stack-0",
      4: "stack-4",
      8: "stack-8",
      16: "stack-16",
      32: "stack-32",
    },
  },
});

type tag = "section" | "main";

export type GridFluidProps = {
  compName?: string;
  className?: string;
  tag?: tag;
  children?: React.ReactNode;
} & VariantProps<typeof tvGridFluid>;

export const GridFluid: React.FC<GridFluidProps> = ({
  compName = "GridFluid",
  className,
  stack = 8,
  tag: TagName = "section",
  children = null,
}) => {
  return (
    <>
      {children && (
        <TagName
          data-comp={compName}
          data-testid={compName}
          className={tvGridFluid({ stack, className })}
        >
          {children}
        </TagName>
      )}
    </>
  );
};
