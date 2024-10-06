import { Suspense } from "react";
import { notFound } from "next/navigation";
import { getPreviewData } from "@/lib/preview";
import { PreviewWrapper } from "@/components/wrapper/PreviewWrapper";
import {
  GetEntriesDocument,
  type GetEntriesQuery,
  type GetEntriesQueryVariables,
} from "@/graphql/graphql";
import { getGqlData } from "@/graphql/graphql-client";

interface BlogDetailProps {
  params: {
    blog: "blog";
    slug: string;
  };
  searchParams: { [key: string]: string | string[] | undefined };
}

const BlogDetail = async ({ params, searchParams }: BlogDetailProps) => {
  const { preview, previewTokens } = getPreviewData(searchParams);

  const { entries } = (await getGqlData<GetEntriesQueryVariables>(
    GetEntriesDocument,
    {
      section: ["blog"],
      uri: Object.values(params).join("/"),
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

  console.log(entries[0]);

  return (
    <PreviewWrapper preview={preview}>
      <Suspense fallback={<div>Loading...</div>}>
        <h1>{entries[0].title}</h1>
      </Suspense>
    </PreviewWrapper>
  );
};

export default BlogDetail;

export async function generateStaticParams() {
  // Implement this function to generate static paths at build time
  // This is similar to getStaticPaths in the Pages Router
  const { entries } = (await getGqlData<GetEntriesQueryVariables>(
    GetEntriesDocument,
    {
      section: ["blog"],
    },
  )) as GetEntriesQuery;
  return entries.map((entry) => ({
    blog: "blog",
    uri: entry.slug,
  }));
}
