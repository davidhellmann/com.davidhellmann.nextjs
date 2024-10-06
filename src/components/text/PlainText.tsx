import { tv, type VariantProps } from "tailwind-variants";
import React from "react";
import { Fragment } from "react";

const tvPlainText = tv({
  base: "",
});

export type PlainTextProps = {
  compName?: string;
  className?: string;
  text: string;
} & React.HTMLAttributes<HTMLParagraphElement> &
  VariantProps<typeof tvPlainText>;

export const PlainText: React.FC<PlainTextProps> = ({
  compName = "PlainText",
  className,
  text,
}) => {
  return (
    <>
      {text && (
        <p
          data-comp={compName}
          data-testid={compName}
          className={tvPlainText({ className })}
        >
          {text.split("\n").map((item, key) => {
            return (
              <Fragment key={key}>
                {item}
                <br />
              </Fragment>
            );
          })}
        </p>
      )}
    </>
  );
};
