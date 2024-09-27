import { tv, type VariantProps } from "tailwind-variants";
import React from "react";

const tvGrid = tv({
  base: "grid",
  variants: {
    columns: {
      2: "grid-cols-1 @3xl:grid-cols-2",
      3: "grid-cols-1 @lg:grid-cols-2 @3xl:grid-cols-3",
      4: "grid-cols-1 @lg:grid-cols-2 @3xl:grid-cols-3 @5xl:grid-cols-4",
      5: "grid-cols-2 @lg:grid-cols-3 @3xl:grid-cols-4 @5xl:grid-cols-5",
      6: "grid-cols-2 @lg:grid-cols-4 @3xl:grid-cols-6",
      cards: "grid-cols-cards",
      logos: "grid-cols-logos",
    },
    gap: {
      unset: "",
      0: "gap-0",
      4: "gap-4",
      8: "gap-8",
      16: "gap-16",
      32: "gap-32",
    },
    gapX: {
      unset: "",
      0: "gap-x-0",
      4: "gap-x-4",
      8: "gap-x-8",
      16: "gap-x-16",
      32: "gap-x-32",
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

export type GridProps = {
  compName?: string;
  className?: string;
  children?: React.ReactNode;
} & VariantProps<typeof tvGrid>;

export const Grid: React.FC<GridProps> = ({
  compName = "Grid",
  className,
  columns= 3,
  gap= 8,
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
          className={tvGrid({ columns, gap, gapX, gapY, className })}>
          {children}
        </div>
      )}
    </>
  );
};
