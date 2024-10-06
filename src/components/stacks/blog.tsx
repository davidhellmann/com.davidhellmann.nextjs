import { tv, type VariantProps } from "tailwind-variants";
import React from "react";
import {
  GetEntriesDocument,
  type GetEntriesQuery,
  type GetEntriesQueryVariables,
  // type Entry_DataFragment,
  // type EntryType_BlogDetailFragment,
} from "@/graphql/graphql";
import { getGqlData } from "@/graphql/graphql-client";

const tvStackBlog = tv({
  slots: {
    slotBase: "container mx-auto",
    slotList: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
    slotListItem: "shadow-md rounded-md p-4",
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

  // type Entry = Entry_DataFragment & EntryType_BlogDetailFragment;
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
            {entries?.map((entry) => (
              <li key={entry.id} className={slotListItem({})}>
                <a href={entry.url}>
                  <h2>{entry.title}</h2>
                  <p>{entry.description}</p>
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};
