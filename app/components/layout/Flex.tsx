import { tv, type VariantProps } from "tailwind-variants";
import React from "react";

const tvFlex = tv({
  base: "flex",
  variants: {
    columns: {
      2: "*:basis-full @3xl:*:basis-1/2",
      3: "*:basis-full @lg:*:basis-1/2 @3xl:*:basis-1/3",
      4: "*:basis-full @lg:*:basis-1/2 @3xl:*:basis-1/3 @5xl:*:basis-1/4",
      5: "*:basis-1/2 @lg:*:basis-1/3 @3xl:*:basis-1/4 @5xl:*:basis-1/5",
      6: "*:basis-1/2 @lg:*:basis-1/4 @3xl:*:basis-1/6",
    },
    wrap: {
      true: "flex-wrap",
    },
    justifyContent: {
      start: "justify-start",
      end: "justify-end",
      center: "justify-center",
      between: "justify-between",
      around: "justify-around",
      evenly: "justify-evenly",
      normal: "justify-normal",
    },
    alignItems: {
      start: "items-start",
      end: "items-end",
      center: "items-center",
      baseline: "items-baseline",
      stretch: "items-stretch",
    },
    gap: {
      unset: "",
      0: "mx-0 *:px-0 gap-y-0",
      4: "-mx-2 *:px-2 gap-y-4",
      8: "-mx-4 *:px-4 gap-y-8",
      16: "-mx-8 *:px-8 gap-y-16",
      32: "-mx-16 *:px-16  gap-y-32",
    },
    gapX: {
      unset: "",
      0: "mx-0 *:px-0",
      4: "-mx-2 *:px-2",
      8: "-mx-4 *:px-4",
      16: "-mx-8 *:px-8",
      32: "-mx-16 *:px-16",
    },
    gapY: {
      unset: "",
      0: "gap-y-0",
      4: "gap-y-4",
      8: "gap-y-8",
      16: "gap-y-16",
      32: "gap-y-32",
    },
  }
});

export type FlexProps = {
  compName?: string;
  className?: string;
  children?: React.ReactNode;
} & VariantProps<typeof tvFlex>;

export const Flex: React.FC<FlexProps> = ({
  compName = "Flex",
  className,
  columns = 3,
  wrap= true,
  justifyContent = "start",
  alignItems = "start",
  gap = 8,
  gapX = "unset",
  gapY = "unset",
  children = null,
}) => {
  // Unset Gap if GapX or GapY is set
  if (gapX !== "unset" || gapY !== "unset") {
    gap = "unset";
  }

  return (
    <>
      {children && (
        <div
          data-comp={compName}
          data-testid={compName}
          className={tvFlex({ columns, wrap, justifyContent, alignItems, gap, gapX, gapY, className })}
        >
          {children}
        </div>
      )}
    </>
  );
};
