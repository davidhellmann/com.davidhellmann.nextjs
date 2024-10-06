import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getPreviewData } from "@/lib/preview";
import { PreviewWrapper } from "@/components/wrapper/PreviewWrapper";
import { StackBlog } from "@/components/stacks/blog";
import {
  GetEntriesDocument,
  type GetEntriesQuery,
  type GetEntriesQueryVariables,
} from "@/graphql/graphql";
import { getGqlData } from "@/graphql/graphql-client";

interface PageProps {
  params: {
    uri: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

const Page = async ({ params, searchParams }: PageProps) => {
  const { preview, previewTokens } = getPreviewData(searchParams);

  const { entries } = (await getGqlData<GetEntriesQueryVariables>(
    GetEntriesDocument,
    {
      section: ["pages"],
      uri: params.uri,
      limit: 1,
    },
    {
      token: previewTokens.token,
      xCraftPreview: previewTokens.xCraftPreview,
      xCraftLivePreview: previewTokens.xCraftLivePreview,
    },
  )) as GetEntriesQuery;

  if (!entries[0]) {
    notFound();
  }

  return (
    <PreviewWrapper preview={preview}>
      <Suspense fallback={<div>Loading...</div>}>
        <h1>{entries[0].title}</h1>
        <StackBlog />
      </Suspense>
    </PreviewWrapper>
  );
};

export default Page;

// export async function generateStaticParams() {
//   // Implement this function to generate static paths at build time
//   // This is similar to getStaticPaths in the Pages Router
//     const { entries } = (await getGqlData<GetEntriesQueryVariables>(
//         GetEntriesDocument,
//         {
//             section: ["pages"]
//         },
//     )) as GetEntriesQuery;
//   return entries.map((entry) => ({
//     uri: entry.uri,
//   }));
// }
