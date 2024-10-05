import {
  GetBlogEntriesDocument,
  type GetBlogEntriesQuery,
  type GetBlogEntriesQueryVariables,
  type Entry_DataFragment,
} from "@/graphql/graphql";
import { getGqlData } from "@/graphql/graphql-client";

export default async function StackBlog() {
  const { entries } = (await getGqlData<GetBlogEntriesQueryVariables>(
    GetBlogEntriesDocument,
    {},
  )) as GetBlogEntriesQuery;

  if (!entries) {
    return <p>No entries found</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {entries?.map((entry: Entry_DataFragment) => (
        <div key={entry.id} className="text-white">
          <a href={entry.url}>{entry.title}</a>
        </div>
      ))}
    </div>
  );
}
