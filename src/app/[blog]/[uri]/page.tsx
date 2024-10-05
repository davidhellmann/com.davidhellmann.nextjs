import { Suspense } from "react";
import { notFound } from "next/navigation";
import { cookies } from "next/headers";
import PreviewWrapper from "@/PreviewWrapper";
import {
  GetEntriesDocument,
  type GetEntriesQuery,
  type GetEntriesQueryVariables,
} from "@/graphql/graphql";
import { getGqlData } from "@/graphql/graphql-client";

interface PageProps {
  params: {
    blog: "blog";
    uri: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

export default async function Page({ params, searchParams }: PageProps) {
  const previewData = cookies().get("next-preview-data");
  const preview = previewData ? JSON.parse(previewData.value).isPreview : false;

  const previewTokens = {
    token: searchParams.token as string | undefined,
    xCraftPreview: searchParams["x-craft-preview"] as string | undefined,
    xCraftLivePreview: searchParams["x-craft-live-preview"] as
      | string
      | undefined,
  };

  const { entries } = (await getGqlData<GetEntriesQueryVariables>(
    GetEntriesDocument,
    {
      section: ["blog"],
      uri: Object.values(params).join("/"),
      limit: 1
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
      </Suspense>
    </PreviewWrapper>
  );
}

// export async function generateStaticParams() {
//   // Implement this function to generate static paths at build time
//   // This is similar to getStaticPaths in the Pages Router
//   const entries = await getAllEntries();
//   return entries.map((entry) => ({
//     uri: entry.uri,
//   }));
// }
