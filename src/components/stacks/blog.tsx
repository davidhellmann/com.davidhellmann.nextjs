import { tv, type VariantProps } from "tailwind-variants";
import React from "react";
import {
  GetEntriesDocument,
  type GetEntriesQuery,
  type GetEntriesQueryVariables,
  type Entry_DataFragment,
} from "@/graphql/graphql";
import { getGqlData } from "@/graphql/graphql-client";

const tvStackBlog = tv({
  slots: {
    slotBase: "",
    slotList: "",
    slotListItem: "",
  },
});

export type StackBlogVariants = VariantProps<typeof tvStackBlog>;

export type StackBlogProps = {
  compName?: string;
  className?: string;
} & React.HTMLAttributes<HTMLDivElement> &
  StackBlogVariants;

export const StackBlog: React.FC<StackBlogProps> = async ({
  compName = "StackBlog",
  className,
}) => {
  const { entries } = (await getGqlData<GetEntriesQueryVariables>(
    GetEntriesDocument,
    {
      section: ["blog"],
    },
  )) as GetEntriesQuery;

  if (!entries) {
    return <p>No entries found</p>;
  }

  const { slotBase, slotList, slotListItem } = tvStackBlog({});

  return (
    <>
      {entries && (
        <div
          data-comp={compName}
          data-testid={compName}
          className={slotBase({ className })}
        >
          <ul className={slotList({})}>
            {entries?.map((entry: Entry_DataFragment) => (
              <li key={entry.id} className={slotListItem({})}>
                <a href={entry.url}>{entry.title}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
